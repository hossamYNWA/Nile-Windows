// import Accordion from "@mui/material/Accordion";
import measures from "../assets/images/measures.png";
import { useState,useMemo } from "react";
import HelpIcon from "@mui/icons-material/Help";
// import AccordionSummary from "@mui/material/AccordionSummary";
// import AccordionDetails from "@mui/material/AccordionDetails";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
// import Typography from "@mui/material/Typography";
import classes from "./Head.module.css";
const ConfigHead = ({ title, inChart = false }) => {
    const [showDetails, setShowDetails] = useState(false);
    const titleToId = useMemo(
        () => title.toLowerCase().replace(" ", "_"),
        [title],
    );
    // title breakdown from camel case to normal sentence
    const titleToDisplay = title.split(/(?=[A-Z])/).join(" ");
    return (
        <div id={titleToId} className={classes.head}>
            <span style={{ paddingLeft: "15px" }}>{titleToDisplay}</span>
            {inChart && (
                <HelpIcon
                    sx={{
                        fontSize: "1.4rem",
                        cursor: "pointer",
                        position: "absolute",
                        right: "10px",
                        top: "15px",
                        transform: " translateY(-50%)",
                    }}
                    onClick={() => setShowDetails(!showDetails)}
                />
            )}
            <div
                style={{ height: `${showDetails ? "300px" : "0"}` }}
                className={classes.innerData}
            >
                <img src={measures} alt="measures" />
            </div>
        </div>
    );
};

export default ConfigHead;

// <Accordion>
//     <AccordionSummary sx={{backgroundColor:'var(--primary-color)',color:"white",height:'20px'}} expandIcon={<ExpandMoreIcon sx={{color:'white'}} />}>
//         {title}
//         <Typography variant="caption" sx={{position: 'absolute', bottom: '10px',right: '40px'}} display="block" gutterBottom>
//             More Details
//         </Typography>
//     </AccordionSummary>
//     <AccordionDetails>
//         <img src={measures} alt="measures data" />
//     </AccordionDetails>
// </Accordion>
