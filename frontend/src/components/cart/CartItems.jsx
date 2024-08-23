import classes from "./Cart.module.css";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { cartActions } from "../store/CartSlice";
import { useSelector, useDispatch } from "react-redux";
import { memo, useCallback, useMemo } from "react";
// price formatter

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
// the main function
const CartItems = memo(() => {
    const cartItems = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    // console.log(cartItems.items);
    //change qty function call
    const changeQtyHandler = (process, id) => {
        if (process === "inc") {
            dispatch(cartActions.changeQty({ process, id: id }));
        }
        if (process === "dec") {
            dispatch(cartActions.changeQty({ process, id: id }));
        }
    };
    const rowsContent = useMemo(() => {
        return cartItems.items.map((row, i) => {
            let rowDesc = [];
            for (let desc in row) {
                if (desc !== "pieces" && desc !== "uprice" && desc !== "id") {
                    rowDesc.push(
                        <li>
                            <span
                                style={{
                                    textTransform: "capitalize",
                                    fontWeight: "bold",
                                    fontSize: "0.9rem",
                                }}
                            >
                                {desc.replace("_", " ")}:
                            </span>{" "}
                            {row[desc]}
                        </li>,
                    );
                }
            }

            return (
                <TableRow key={i}>
                    <TableCell align="center">
                        <div className={classes.qtyContainer}>
                            <RemoveCircleOutlineIcon
                                sx={{ fontSize: "28px", cursor: "pointer" }}
                                onClick={() => changeQtyHandler("dec", row.id)}
                            />
                            <span className={classes.qty}>{row.pieces}</span>
                            <AddCircleOutlineIcon
                                sx={{ fontSize: "28px", cursor: "pointer" }}
                                onClick={() => changeQtyHandler("inc", row.id)}
                            />{" "}
                        </div>
                    </TableCell>
                    <TableCell
                        align="left"
                        sx={{ maxWidth: "300px", paddingLeft: "70px" }}
                    >
                        <h3>Window uPVC </h3>
                        <ul className={classes.descList}>{...rowDesc}</ul>
                    </TableCell>
                    <TableCell align="center">{row.uprice}</TableCell>
                    <TableCell align="center">
                        {ccyFormat(row.uprice * row.pieces)}
                    </TableCell>
                </TableRow>
            );
        });
    }, [cartItems, ]);
    return rowsContent;
});

export default CartItems;
