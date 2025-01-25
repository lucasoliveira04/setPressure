import { deleteDoc, doc } from "firebase/firestore"; 
import { db } from "../firebase";

export const handleDelete = async (rowIndex, data, setData, pressureServices) => {
    const rowData = data[rowIndex];
    const identificador = localStorage.getItem("user"); 
    const horario = rowData[2]; 

    try {
        const dataToDelete = await pressureServices.getDataFilteredByDate(identificador, horario);
        
        if (dataToDelete.length > 0) {
            const docId = dataToDelete[0].id;
            const docRef = doc(db, "pressureDate", docId);

            await deleteDoc(docRef);
            console.log("Documento deletado com sucesso!");

            // Atualiza os dados após deletar
            const updatedData = [...data];
            updatedData.splice(rowIndex, 1); 
            setData(updatedData); // Atualiza o estado de data
        } else {
            console.log("Nenhum dado encontrado para deletar.");
        }
    } catch (error) {
        console.error("Erro ao deletar o documento:", error);
    }
};
