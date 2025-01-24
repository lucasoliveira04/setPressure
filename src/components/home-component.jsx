import { SheetComponent } from "./sheet-component";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; 
import { useEffect, useState } from "react";
import { RulesInputs } from "../utils/rules-input";

export const HomeComponent = ({ title = title, columns = [], data = [] }) => {
    const [newTitle, setNewTitle] = useState(title);

    const handleAlert = () => {
        var valuePrompt = prompt("Digite o novo título");
        if (!RulesInputs.checkInput(valuePrompt)) {
            alert("Digite um valor válido");
            return;
        }
        setNewTitle(valuePrompt);
    }

    const downloadPDF = () => {
        if (data.length > 0) {
            const doc = new jsPDF();
            doc.setFont("Arial", "normal"); 
            doc.setFontSize(18); 
            doc.text(newTitle, 30, 10); 

            doc.autoTable({
                head: [columns],
                body: data,
                startY: 20,
            });

            try {
                doc.save(`${newTitle}.pdf`); 
            } catch (error) {
                console.error("Erro ao salvar o arquivo", error);
            }
        } else {
            console.error("Nenhum dado na tabela");
        }
    };

    return (
        <div className="container-sheet">
            <div className="container-sheet-title">
                <h1>{newTitle}</h1>

                <button onClick={handleAlert} className="change-title">Mudar titulo</button>
            </div>

            <div className="container-sheet-content">
                <SheetComponent columns={columns} data={data} />
            </div>

            <div className="container-sheet-download-button">
                <button className="btn-download" onClick={downloadPDF}>
                    Baixar Planilha
                </button>
            </div>

            
            

        </div>
    );
};
