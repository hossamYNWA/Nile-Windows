import classes from "./ConfigBody.module.css";
import OptionCard from "./OptionCard.jsx";
import ShortUniqueId from "short-unique-id";
const ConfigBody = ({ options,index }) => {
    const uid = new ShortUniqueId({ length: 10 });
    const readyOptions =options? options : []
    const content =readyOptions.length>0? readyOptions.map((option) => {
        // console.log('show option: ' + 'for index ' + index + 'is: -- ' + option.show)
        if(option.show){
            return (
                    <OptionCard option={option} key={uid.rnd()} index={index} />
            )};
        }):''       
    return <div className={classes.body}>{content}</div>;
};

export default ConfigBody;
