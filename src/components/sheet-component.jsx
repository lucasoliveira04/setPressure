import React, { useState } from "react";
import { RulesInputs } from "../utils/rules-input";

export const SheetComponent = ({ columns = [], data = [] }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCell, setSelectedCell] = useState({ rowIndex: null, colIndex: null, value: "" });

    const handleCellClick = (rowIndex, colIndex, value) => {
        setSelectedCell({ rowIndex, colIndex, value });
        setIsModalOpen(true);
    };

    const handleSave = () => {
        const { rowIndex, colIndex, value } = selectedCell;

        if (!RulesInputs.checkInput(value, "O valor não pode ser vazio")) {
            return;
        }
        
        data[rowIndex][colIndex] = value; 
        setIsModalOpen(false);
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
                            </tr>
                        ))
                    )}
                </tbody>
            </table>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <h3>Edit Cell</h3>
                        <input
                            type="text"
                            value={selectedCell.value}
                            onChange={(e) =>
                                setSelectedCell({ ...selectedCell, value: e.target.value })
                            }
                        />
                        <div className="modal-actions">
                            <button onClick={() => setIsModalOpen(false)}>Cancel</button>
                            <button onClick={handleSave}>Save</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
