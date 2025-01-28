import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import generateTokenAuth from "../utils/generate-token-auth";

export const SelectProfile = ({ title, icon, color, link }) => {
    const navigate = useNavigate();

    const handleAuthAndNavigate = async () => {
        try {
            const result = await signInWithPopup(auth, provider);
            const token = generateTokenAuth();
            
            console.log("Usuário autenticado:", result.user.email);
            
            localStorage.setItem("user", JSON.stringify(result.user.email))
            localStorage.setItem("title", JSON.stringify(result.user.displayName))
            localStorage.setItem("token", JSON.stringify(token))

            navigate(link);
        } catch (error) {
            console.error("Erro durante o login:", error);
        }

        console.log("Clicou no perfil:", title);
    };

    return (
        <div
            className="link-container"
            onClick={handleAuthAndNavigate}
            style={{ cursor: "pointer" }}
        >
            <div className="container-card" style={{ backgroundColor: color }}>
                <div className="icon-container">{icon}</div>
                <h5>{title}</h5>
            </div>
        </div>
    );
};
