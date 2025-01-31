import { memo, useRef, useEffect } from "react";
import classes from "./Dialog.module.css";
const Dialog = memo(({ message, onclose }) => {
    const dialogRef = useRef(null);
    useEffect(() => {
        dialogRef.current.showModal();
    }, []);
    const handleOkClick = () => {
        dialogRef.current.close();
        onclose();
    };

    return (
        <dialog className={classes.dialog} ref={dialogRef}>
            <p>{message}</p>
            <button onClick={handleOkClick}>OK</button>
        </dialog>
    );
});

export default Dialog;
