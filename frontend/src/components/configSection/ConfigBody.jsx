import classes from "./ConfigBody.module.css";
import OptionCard from "./OptionCard.jsx";
import ShortUniqueId from "short-unique-id";
const ConfigBody = ({ options,index}) => {
    const uid = new ShortUniqueId({ length: 10 });
    const readyOptions =options? options : []
    const content =readyOptions.length>0? readyOptions.map((option) => {
        if(option.show){
            return (
                    <OptionCard option={option} key={uid.rnd()} index={index} />
            )};
        }):'no options available'       
    // if(bodyRef.current && content.length === 0)
    // {
    //     if(bodyRef.current.parentElement){
    //         bodyRef.current.parentElement.innerHTML = ""
    //     }
    //     // console.log(bodyRef.current)
    // }
    return <div className={classes.body}>{content}</div>;
};

export default ConfigBody;
