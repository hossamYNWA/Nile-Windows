import classes from "./ConfigItem.module.css";
import { Link } from "react-router-dom";
const ConfigItem = ({ title, value }) => {
    const showTitle = title.split(/(?=[A-Z])/).join(" ");

    return (
        <div className={classes.configItem}>
            <Link to={`#${title}`} className={classes.configLink}>
                <span className={classes.configTitle}>{showTitle}: </span>
                <span className={classes.configValue}>{value? value: "---"}</span>
            </Link>
        </div>
    );
};

export default ConfigItem;
