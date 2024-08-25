import { memo,useCallback } from "react";
import ConfigHead from "./ConfigHead.jsx";
import { addWinConfig } from "../store/WinConfigs";
import { useDispatch } from "react-redux";

// to convert into camel case 
function camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
const RadioOptions = memo(({ id, title, options }) => {
    const dispatch = useDispatch();
    const titleSentToStore = camelize(title)
    const handleChange = useCallback((event) => {
        dispatch(
            addWinConfig.addRadioConfig({
                configName: titleSentToStore,
                selectedOption: event.target.value,
            }),
        );
    }, []);
    const content = options.map((option, i) => {
        return (
            <div
                key={id + i}
                style={{ display: "inline-block", marginTop: "20px" }}
            >
                <input
                    type="radio"
                    key={id + option}
                    value={option}
                    onChange={handleChange}
                    name={title}
                />
                <span key={option}>{option}</span>
            </div>
        );
    });
    return (
        <div style={{ minHeight: "130px" }}>
            <ConfigHead title={title} />
            {content}
        </div>
    );
});

export default RadioOptions;
