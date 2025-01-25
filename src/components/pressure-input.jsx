import { useState } from "react";

export const PressureInput = ({ onAddPressure }) => {
    const [pressure, setPressure] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (pressure) {
            onAddPressure(pressure);
            setPressure("");
        }
    };

    return (
        <form onSubmit={handleSubmit} className="pressure-input">
            <label>
                Pressão:
                <input
                    type="text"
                    value={pressure}
                    onChange={(e) => setPressure(e.target.value)}
                    placeholder="Digite a pressão"
                />
            </label>
            <button type="submit">Adicionar</button>
        </form>
    );
};
