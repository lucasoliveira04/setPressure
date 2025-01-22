import { GiCancer, GiCapricorn } from "react-icons/gi";
import { SelectProfile } from "../components/select-profile";

export const HomePage = () => {
    return (
        <div className="container-home">
            <SelectProfile
                title="Mãe"
                icon={<GiCancer size={50} />}
                color="rgb(255, 99, 132)" 
                link={"/mother"}
            />
            <SelectProfile
                title="Pai"
                icon={<GiCapricorn size={50} />}
                color="rgb(54, 162, 235)" 
                link={"/father"}
            />
        </div>
    );
};
