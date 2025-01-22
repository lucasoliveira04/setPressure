import { useState } from "react";
import { jsPDF } from "jspdf";
import "jspdf-autotable";
import { SheetComponent } from "../components/sheet";

export const MainMother = () => {
    const columns = ["Data", "Pressão", "Hora"];
    const title = "Ednalva";
    const [tableData, setTableData] = useState([]);
    const [inputValue, setInputValue] = useState(""); // Adicionando estado para o valor do input

    const addPressure = (pressure) => {
        const now = new Date();
        const newRow = [
            now.toLocaleDateString("pt-BR"),
            pressure,
            now.toLocaleTimeString("pt-BR"),
        ];
        setTableData((prev) => [...prev, newRow]);
        setInputValue(""); // Limpar o campo de entrada após inserir
    };

    const editData = (rowIndex, colIndex, newValue) => {
        setTableData((prevData) => {
            const updatedData = [...prevData];
            updatedData[rowIndex][colIndex] = newValue;
            return updatedData;
        });
    };

    const downloadPDF = () => {
        const doc = new jsPDF();
        doc.setFont("helvetica", "bold");
        doc.setFontSize(16);
        doc.text(title, 10, 10);

        if (tableData.length > 0) {
            doc.autoTable({
                head: [columns],
                body: tableData,
                startY: 20,
            });
            doc.save("planilha.pdf");
        } else {
            console.error("Nenhum dado na tabela");
        }
    };

    return (
        <div className="container-sheet-mother">
            <div>
                <SheetComponent
                    title={title}
                    columns={columns}
                    data={tableData}
                    editData={editData}
                />
            </div>
            <div>
                <div>
                    <input
                        type="text"
                        placeholder="Pressão"
                        value={inputValue} 
                        onChange={(e) => setInputValue(e.target.value)} 
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim()) {
                                addPressure(inputValue.trim());
                            }
                        }}
                    />
                    <button
                        onClick={() => {
                            if (inputValue.trim()) {
                                addPressure(inputValue.trim());
                            }
                        }}
                    >
                        Inserir
                    </button>
                </div>

                <button onClick={downloadPDF}>Baixar Planilha</button>
            </div>
        </div>
    );
};
