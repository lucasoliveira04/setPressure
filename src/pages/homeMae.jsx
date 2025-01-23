import { useState } from "react"
import { HomeComponent } from "../components/home-component"
import { PressureInput } from "../components/pressure-input";

export const HomeMae = () => {
    const [data, setData] = useState([])

    const handleAddPressure = (pressure) => {
        const newRow = [
            new Date().toLocaleDateString("pt-BR"),
            pressure,
            new Date().toLocaleTimeString("pt-BR")
        ]
        setData((prevData) => [...prevData, newRow])
    };

    return (    
        <div>
            <HomeComponent
                title={"Ednalva"}
                columns={["Data", "Pressão", "Hora"]}
                data={data}
            />
            <div>
                <PressureInput onAddPressure={handleAddPressure}/>
            </div>
            
        </div>
    )
}