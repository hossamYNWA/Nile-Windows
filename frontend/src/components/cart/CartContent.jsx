import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import CartItems from "./CartItems.jsx";
import { useSelector } from "react-redux";
import { useCallback, useRef, useState } from "react";
import CustomBtn from "../inputs/CustomBtn.jsx";
import PrintIcon from "@mui/icons-material/Print";
import { json } from "react-router-dom";
//the print library
import { useReactToPrint } from "react-to-print";
const TAX_RATE = 0.07;

function ccyFormat(num) {
    return `${num.toFixed(2)}`;
}
// send data to server
async function sendCartData(url, data) {
    const res = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: data }),
    });
    if (!res.ok) {
        throw json({ message: "unable to send data" }, { status: 500 });
    } else {
        return res.json();
    }
}
// function subtotal(items) {
//     return items.map(({ price }) => price).reduce((sum, i) => sum + i, 0);
// }

export default function CartContent() {
    const [saved, setSaveState] = useState(false);
    const cartRef = useRef(null);
    const invoiceItems = useSelector((state) => state.cart.items);
    const invoiceSubtotal = useSelector((state) => state.cart.totalPrice);
    //calculating totals
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal;
    //save button handler (send cart data to server)
    const saveHandler = useCallback(() => {
        console.log("cartItems " + JSON.stringify(invoiceItems));
        const url = "http://16.170.125.114/api/v1/Invoice/download-pdf";
        sendCartData(url, invoiceItems)
            .then((res) => {
                console.log(res);
                setSaveState(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [invoiceItems]);

    //print button handler
    const printHandler = useReactToPrint({
        content: () => cartRef.current,
        title: "Invoice",
    });
    if (invoiceItems.length === 0) {
        return (
            <div>
                <h2 style={{ marginTop: "200px", textAlign: "center" }}>
                    Cart is empty
                </h2>
            </div>
        );
    }
    return (
        <Container>
            <TableContainer
                sx={{ marginTop: "200px" }}
                component={Paper}
                ref={cartRef}
            >
                <Table sx={{ minWidth: 700 }} aria-label="spanning table">
                    <TableHead>
                        {/* <TableRow>
                            <TableCell align="center" sx={{fontWeight:"bold"}} colSpan={3}>
                                Details
                            </TableCell>
                            <TableCell sx={{fontWeight:"bold"}}  align="right">Price</TableCell>
                        </TableRow> */}
                        <TableRow>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                                Qantity
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                                Items
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                                Unit price
                            </TableCell>
                            <TableCell
                                align="center"
                                sx={{ fontWeight: "bold", fontSize: "1rem" }}
                            >
                                Sum
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <CartItems />
                        <TableRow>
                            <TableCell rowSpan={3} />
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">
                                {ccyFormat(invoiceSubtotal)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Tax</TableCell>
                            <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                            <TableCell align="right">
                                {ccyFormat(invoiceTaxes)}
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Total</TableCell>
                            <TableCell align="right">
                                {ccyFormat(invoiceTotal)}
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    height: "100px",
                }}
            >
                <CustomBtn disabled={saved} onClick={saveHandler}>
                    {saved ? "Saved" : "Save invoice"}
                </CustomBtn>
                <CustomBtn
                    disabled={!saved}
                    onClick={printHandler}
                    endIcon={<PrintIcon />}
                >
                    Print
                </CustomBtn>
            </div>
        </Container>
    );
}
