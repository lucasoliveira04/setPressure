import { addDoc, collection, getDocs } from "firebase/firestore"
import { db } from "../firebase"

class PressureServices{
    constructor() {
        this.collection = "pressureDate"
        this.collectionRef = collection(db, this.collection)
    }

    async savePressure(identificador, date, pressure, horario){
        if (!date || !pressure || !horario) {
            throw new Error("Date, pressão e horario são obrigatórios")	
        }

        try {
            const docRef = await addDoc(this.collectionRef, {
                identificador,
                date,
                pressure,
                horario
            })
            console.log("Document written with ID: ", docRef.id)
            return docRef.id
        } catch (error) {
            throw error
        }
    }

    async getAllPressureData() {
        try {
            const querySnapshot = await getDocs(this.collectionRef);
            const data = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            return data; 
        } catch (error) {
            console.error("Erro ao buscar dados: ", error);
            throw error;
        }
    }
}

export default PressureServices