import { SelectProfile } from "../components/select-profile";
import { IconHelper } from "../utils/iconeHelper";

export const HomePage = () => {
    return (
        <div className="container-home">
            <SelectProfile
                title="Mãe"
                icon={IconHelper.getRandomIcon()}
                color="rgb(255, 99, 132)" 
                link={"/mae"}
            />
            <SelectProfile
                title="Pai"
                icon={IconHelper.getRandomIcon()}
                color="rgb(54, 162, 235)" 
                link={"/pai"}
            />
        </div>
    );
};
