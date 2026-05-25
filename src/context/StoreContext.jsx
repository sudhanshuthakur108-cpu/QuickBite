import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";
import { toast } from 'react-toastify';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {

    // LOAD CART FROM LOCAL STORAGE
    const [cartItems, setCartItems] = useState(() => {

        const savedCart = localStorage.getItem("cartItems");

        return savedCart
            ? JSON.parse(savedCart)
            : {};

    });

    // SAVE CART TO LOCAL STORAGE
    useEffect(() => {

        localStorage.setItem(
            "cartItems",
            JSON.stringify(cartItems)
        );

    }, [cartItems]);

    // ADD TO CART
    const addToCart = (itemId) => {

        if (!cartItems[itemId]) {

            setCartItems((prev) => ({
                ...prev,
                [itemId]: 1
            }));

        }
        else {

            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1
            }));

        }

        // TOAST
        const item = food_list.find(
            (product) => product._id === itemId
        );

        toast.success(`${item.name} added to cart`);

    };

    // REMOVE ONE QUANTITY
    const removeFromCart = (itemId) => {

        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1
        }));

        // TOAST
        const item = food_list.find(
            (product) => product._id === itemId
        );

        toast.error(`${item.name} quantity decreased`);

    };

    // DELETE COMPLETE ITEM
    const deleteFromCart = (itemId) => {

        setCartItems((prev) => {

            const updatedCart = { ...prev };

            delete updatedCart[itemId];

            return updatedCart;

        });

        // TOAST
        const item = food_list.find(
            (product) => product._id === itemId
        );

        toast.error(`${item.name} removed from cart`);

    };

    // INCREASE QUANTITY
    const increaseQuantity = (itemId) => {

        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1
        }));

    };

    // DECREASE QUANTITY
    const decreaseQuantity = (itemId) => {

        if (cartItems[itemId] === 1) {

            deleteFromCart(itemId);

        }
        else {

            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] - 1
            }));

        }

    };

    // TOTAL CART AMOUNT
    const getTotalCartAmount = () => {

        let totalAmount = 0;

        for (const item in cartItems) {

            if (cartItems[item] > 0) {

                let itemInfo = food_list.find(
                    (product) => product._id === item
                );

                totalAmount +=
                    itemInfo.price * cartItems[item];

            }
        }

        return totalAmount;
    };

    // CONTEXT VALUE
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        increaseQuantity,
        decreaseQuantity,
        getTotalCartAmount
    };

    return (

        <StoreContext.Provider value={contextValue}>

            {props.children}

        </StoreContext.Provider>

    );
};

export default StoreContextProvider;