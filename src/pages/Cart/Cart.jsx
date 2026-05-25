import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Cart = () => {

  const {
    food_list,
    cartItems,
    removeFromCart,
    deleteFromCart,
    getTotalCartAmount,
    increaseQuantity,
    decreaseQuantity,
  } = useContext(StoreContext);

  const navigate = useNavigate();

  // EMPTY CART UI
  if (getTotalCartAmount() === 0) {

    return (

      <div className="empty-cart">

        <img src={assets.basket_icon} alt="" />

        <h2>Your cart is empty</h2>

        <p>
          Looks like you haven’t added anything delicious yet.
        </p>

        <button onClick={() => navigate("/")}>
          Explore Menu
        </button>

      </div>

    );
  }

  return (

    <div className="cart">

      {/* TOP HEADINGS */}
      <div className="cart-items">

        <div className="cart-items-title">

          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>

        </div>

        <hr />

        {/* FOOD ITEMS */}
        {food_list.map((item, index) => {

          if (cartItems[item._id] > 0) {

            return (

              <div key={index}>

                <div className="cart-items-title cart-items-item">

                  <img src={item.image} alt="" />

                  <p>{item.name}</p>

                  <p>${item.price}</p>

                  {/* QUANTITY BUTTONS */}
                  <div className="cart-quantity">

                    <button
                      onClick={() => decreaseQuantity(item._id)}
                    >
                      -
                    </button>

                    <span>
                      {cartItems[item._id]}
                    </span>

                    <button
                      onClick={() => increaseQuantity(item._id)}
                    >
                      +
                    </button>

                  </div>

                  {/* TOTAL */}
                  <p>
                    ${item.price * cartItems[item._id]}
                  </p>

                  {/* DELETE ITEM */}
                  <p
                    onClick={() => deleteFromCart(item._id)}
                    className="cross"
                  >
                    x
                  </p>

                </div>

                <hr />

              </div>

            );
          }

          return null;

        })}

      </div>

      {/* BOTTOM SECTION */}
      <div className="cart-bottom">

        {/* LEFT */}
        <div className="cart-total">

          <h2>Cart Totals</h2>

          <div>

            <div className="cart-total-details">

              <p>Subtotal</p>

              <p>${getTotalCartAmount()}</p>

            </div>

            <hr />

            <div className="cart-total-details">

              <p>Delivery Fee</p>

              <p>$2</p>

            </div>

            <hr />

            <div className="cart-total-details">

              <b>Total</b>

              <b>${getTotalCartAmount() + 2}</b>

            </div>

          </div>

          <button onClick={() => navigate("/order")}>

            PROCEED TO CHECKOUT

          </button>

        </div>

        {/* RIGHT */}
        <div className="cart-promocode">

          <p>
            If you have a promo code, Enter it here
          </p>

          <div className="cart-promocode-input">

            <input
              type="text"
              placeholder="promo code"
            />

            <button>
              Submit
            </button>

          </div>

        </div>

      </div>

    </div>

  );
};

export default Cart;