import { useState } from "react";
import "../sheetComponent.css";

export const SheetComponent = ({ title, columns = [], data = [], editData }) => {
    const [editing, setEditing] = useState(null); 
    const [newValue, setNewValue] = useState(""); 
    const [isModalOpen, setIsModalOpen] = useState(false);

    const startEditing = (rowIndex, colIndex, currentValue) => {
        setEditing({ rowIndex, colIndex });
        setNewValue(currentValue);
        setIsModalOpen(true);
    };

    const handleChange = (e) => {
        setNewValue(e.target.value);
    };

    const handleModalSave = () => {
        if (newValue.trim() !== "") {
            editData(editing.rowIndex, editing.colIndex, newValue);
        }
        setIsModalOpen(false);
        setEditing(null);
        setNewValue("");
    };

    const handleModalCancel = () => {
        setIsModalOpen(false);
        setEditing(null);
        setNewValue("");
    };

    return (
        <div className="sheet-container">
            <h1>{title}</h1>
            <table className="sheet-table">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.length > 0 ? (
                        data.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {row.map((cell, colIndex) => (
                                    <td
                                        key={`${rowIndex}-${colIndex}`}
                                        onClick={() => startEditing(rowIndex, colIndex, cell)}
                                    >
                                        {cell}
                                    </td>
                                ))}
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length}>Sem dados</td>
                        </tr>
                    )}
                </tbody>
            </table>

            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <h2>Editar Valor</h2>
                        <input
                            type="text"
                            value={newValue}
                            onChange={handleChange}
                            autoFocus
                        />
                        <div className="modal-buttons">
                            <button onClick={handleModalSave} className="save-button">
                                Salvar
                            </button>
                            <button onClick={handleModalCancel} className="cancel-button">
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
