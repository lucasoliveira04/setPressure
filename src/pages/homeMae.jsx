import { useState } from "react"
import { HomeComponent } from "../components/home-component"
import { PressureInput } from "../components/pressure-input";
import PressureServices from "../services/PressureServices";

export const HomeMae = () => {
    const [data, setData] = useState([])
    const pressureService = new PressureServices()
    
    var userEmail = localStorage.getItem("user")
    var displayName = localStorage.getItem("title")

    const formattedDisplayName = (displayName) => {
        return displayName.replace(/['"]+/g, '')
    }

    const title = formattedDisplayName(displayName)

    const handleAddPressure = async (pressure) => {
        const newRow = [
            new Date().toLocaleDateString("pt-BR"),
            pressure,
            new Date().toLocaleTimeString("pt-BR")
        ]
        setData((prevData) => [...prevData, newRow])

        
        try {
            await pressureService.savePressure(userEmail ,newRow[0], newRow[1], newRow[2])
            console.log("Pressão salva com sucesso")
        } catch (error) {
            console.error("Erro ao salvar pressão: ", error)
        }
    };

    return (    
        <div>
            <HomeComponent
                title={title}
                columns={["Data", "Pressão", "Hora"]}
                data={data}
            />
            <div>
                <PressureInput onAddPressure={handleAddPressure}/>
            </div>
            
        </div>
    )
}