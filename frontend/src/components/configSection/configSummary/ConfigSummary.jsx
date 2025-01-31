import { useSelector } from "react-redux";
import ConfigHead from "../ConfigHead.jsx";
import MainImg from "./MainImg.jsx";
import ConfigItem from "./ConfigItem.jsx";
const ConfigSummary = () => {
    const winConfigs = useSelector((state) => state.selectedWinConfigs);
    let content = [];
    winConfigs.forEach((item) => {
        for (let objKey in item) {
            content.push(
                <ConfigItem title={objKey} value={item[objKey]} key={objKey} />,
            );
        }
    });

    return (
        <div>
            <MainImg />
            <ConfigHead inChart={false} title="Your selected configurations" />
            {content}
        </div>
    );
};

export default ConfigSummary;
