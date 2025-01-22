import { Link } from "react-router-dom";

export const SelectProfile = ({ title, icon, color, link }) => {
    return (
        <Link to={link} className="link-container">
            <div className="container-card" style={{ backgroundColor: color }}>
                <div className="icon-container">
                    {icon}
                </div>
                <h5>{title}</h5>
            </div>
        </Link>
    );
};
