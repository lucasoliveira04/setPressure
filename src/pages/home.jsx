import { useEffect } from "react";
import { SelectProfile } from "../components/select-profile";
import { IconHelper } from "../utils/icone-helper";

export const HomePage = () => {

    useEffect(() => {
        if (localStorage.getItem("token") !== null){
            window.location.href = "/pressao";
        }
    })

    return (
        <div className="container-home">
            <SelectProfile
                title="Acessar Planilha"
                icon={IconHelper.getRandomIcon()}
                link={"/pressao"}
            />
        </div>
    );
};
