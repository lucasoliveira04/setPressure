import React, { useState, useEffect } from "react";
import { HomeComponent } from "../components/home-component";
import { PressureInput } from "../components/pressure-input";
import PressureServices from "../services/PressureServices";

export const HomeMae = () => {
    const [data, setData] = useState([]);
    const pressureService = new PressureServices();

    const userEmail = localStorage.getItem("user");
    const displayName = localStorage.getItem("title");

    const formattedDisplayName = (displayName) => {
        return displayName.replace(/['"]+/g, "");
    };

    const title = formattedDisplayName(displayName);

    // Função para buscar dados do Firebase
    const fetchPressureData = async () => {
        try {
            const pressureData = await pressureService.getPressureByIdentificador(userEmail);
            const formattedData = pressureData.map((item) => [
                item.date,
                item.pressure,
                item.horario,
            ]);
            setData(formattedData.reverse());
        } catch (error) {
            console.error("Erro ao buscar dados de pressão:", error);
        }
    };

    useEffect(() => {
        fetchPressureData();
    }, []);

    const handleAddPressure = async (pressure) => {
        const newRow = [
            new Date().toLocaleDateString("pt-BR"),
            pressure,
            new Date().toLocaleTimeString("pt-BR"),
        ];
        setData((prevData) => [...prevData, newRow]);

        try {
            await pressureService.savePressure(userEmail, newRow[0], newRow[1], newRow[2]);
            console.log("Pressão salva com sucesso");
        } catch (error) {
            console.error("Erro ao salvar pressão: ", error);
        }
    };

    const handleCedulaClick = async (rowIndex, colIndex, value) => {
        const selectedRow = data[rowIndex];
        const pressureId = selectedRow[3]; 

        try {
            const pressureData = await pressureService.getPressureById(pressureId);
            console.log("Dados da pressão selecionada:", pressureData);
        } catch (error) {
            console.error("Erro ao buscar dados da pressão:", error);
        }
    };

    return (
        <div>
            <HomeComponent 
                title={title} 
                columns={["Data", "Pressão", "Hora"]} 
                data={data}
                onCedulaClick={handleCedulaClick} 
                setData={setData}
            />
            <div>
                <PressureInput onAddPressure={handleAddPressure} />
            </div>
        </div>
    );
};
