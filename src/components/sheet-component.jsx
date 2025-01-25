import { updateDoc, doc } from "firebase/firestore";
import { db } from "../firebase"; 
import { useState } from "react";
import { RulesInputs } from "../utils/rules-input";
import { handleDelete } from "../services/handleDelete";

export const SheetComponent = ({
    columns = [],
    data = [],
    onRowClick,
    onCedulaClick,
    pressureServices,
    setData
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState({
        rowIndex: null,
        colIndex: null,
        value: "",
    });

    const columnMapping = {
        "Pressão": "pressure",
    }

    const handleCellClick = (rowIndex, colIndex, value) => {
        const rowData = data[rowIndex];
        if (onRowClick) {
            onRowClick(rowData);
        }

        if (onCedulaClick) {
            onCedulaClick(rowIndex, colIndex, value);
        }

        setSelectedCell({ rowIndex, colIndex, value });
        setIsModalOpen(true);
    };

    const handleSave = async () => {
        const { rowIndex, colIndex, value } = selectedCell;
        const updatedData = [...data];
        updatedData[rowIndex][colIndex] = value;

        // Validação de entrada
        if (!RulesInputs.checkInput(value, "O valor não pode ser vazio")) {
            return;
        }

        // Atualizando o estado da tabela
        data[rowIndex] = updatedData[rowIndex];

        // Agora, atualize o Firestore
        try {
            const identificador = localStorage.getItem("user");
            const horario = data[rowIndex][2];

            // Buscando o dado filtrado
            const dataToUpdate = await pressureServices.getDataFilteredByDate(identificador, horario);

            if (dataToUpdate.length > 0) {
                const docId = dataToUpdate[0].id;
                const docRef = doc(db, "pressureDate", docId);

                // Mapeando a coluna em português para o nome correto em inglês
                const columnInEnglish = columnMapping[columns[colIndex]] || columns[colIndex];

                // Atualizando o documento
                await updateDoc(docRef, {
                    [columnInEnglish]: value, // Atualiza o campo com o nome em inglês
                });

                console.log("Documento atualizado com sucesso!");
            } else {
                console.log("Nenhum dado encontrado para atualizar.");
            }

            setIsModalOpen(false);
        } catch (error) {
            console.error("Erro ao atualizar o documento:", error);
        }
    };


    return (
        <div className="container-sheet-content">
            <table>
                <thead>
                    <tr>
                        {columns.map((col, index) => (
                            <th key={index}>{col}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length === 0 ? (
                        <tr>
                            <td colSpan={columns.length} style={{ textAlign: "center" }}>
                                Tabela vazia
                            </td>
                        </tr>
                    ) : (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((col, colIndex) => (
                                    <td
                                        key={colIndex}
                                        onClick={() => handleCellClick(rowIndex, colIndex, col)}
                                        style={{ cursor: "pointer" }}
                                    >
                                        {col}
                                    </td>
                                ))}
                                {/* <td>
                                    <button onClick={() => handleDelete(rowIndex, data, setData, pressureServices)}>Excluir</button>
                                </td> */}
                            </tr>
                        ))
                    )}
                </tbody>

            </table>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Editar Celula</h3>
                        <input
                            type="text"
                            value={selectedCell.value}
                            onChange={(e) =>
                                setSelectedCell({ ...selectedCell, value: e.target.value })
                            }
                        />
                        <div className="modal-actions">
                            <button onClick={() => setIsModalOpen(false)}>Cancelar</button>
                            <button onClick={handleSave}>Salvar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
