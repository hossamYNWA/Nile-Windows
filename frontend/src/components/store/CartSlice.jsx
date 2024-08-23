import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cartSlice",
    initialState: { items: [], totalPrice: 0 },
    reducers: {
        addToCart(state, action) {
            state.items.push({ ...action.payload, uprice: 20,user_id:"101" });
            console.log(action.payload);
        },
        changeQty(state, action) {
            const { process, id } = action.payload;
            state.items.forEach((item) => {
                if (item.id === id) {
                    const qty = parseInt(item.pieces);
                    if (process === "inc") {
                        item.pieces = qty + 1;
                    }
                    if (process === "dec") {
                        item.pieces = qty - 1;
                        if (item.pieces < 1) {
                            state.items.splice(state.items.indexOf(item), 1);
                        }
                    }
                }
            });
        },
    },
});

const cartActions = cartSlice.actions;
export default cartSlice;
export { cartActions };
