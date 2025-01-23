import { SheetComponent } from "./sheet-component";
import { jsPDF } from "jspdf";
import "jspdf-autotable"; 

export const HomeComponent = ({ title, columns = [], data = [] }) => {
    const downloadPDF = () => {
        if (data.length > 0) {
            const doc = new jsPDF();
            doc.setFont("Arial", "normal"); 
            doc.setFontSize(18); 
            doc.text(title, 30, 10); 

            doc.autoTable({
                head: [columns],
                body: data,
                startY: 20,
            });

            try {
                doc.save(`${title}.pdf`); 
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
                <h1>{title}</h1>
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
