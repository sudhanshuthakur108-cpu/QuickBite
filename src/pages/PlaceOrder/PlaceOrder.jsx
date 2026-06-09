import React, { useContext, useEffect } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext);

  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "",
    phone: "",
  });

  const { user } = useContext(AuthContext);

  const navigate = useNavigate();

  // LOGIN CHECK 😎
  useEffect(() => {

    if (!user) {

      alert("Please login first to proceed checkout 😎");

      navigate("/cart");
    }

  }, [user, navigate]);

  // PAYMENT BUTTON 😎
  const handlePayment = () => {

    // CHECK EMPTY FIELDS 😎
    if (
      !formData.firstName ||
      !formData.lastName ||
      !formData.email ||
      !formData.street ||
      !formData.city ||
      !formData.state ||
      !formData.zip ||
      !formData.country ||
      !formData.phone
    ) {

      alert("Please fill all delivery details 😎");

      return;
    }

    navigate("/success");
  };

  return (
    <form className="place-order">

      {/* LEFT SIDE */}
      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">

          <input
            type="text"
            placeholder="First Name"
            value={formData.firstName}
            onChange={(e) =>
              setFormData({ ...formData, firstName: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={(e) =>
              setFormData({ ...formData, lastName: e.target.value })
            }
          />

        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={(e) =>
            setFormData({ ...formData, email: e.target.value })
          }
        />

        <input
          type="text"
          placeholder="Street"
          value={formData.street}
          onChange={(e) =>
            setFormData({ ...formData, street: e.target.value })
          }
        />

        <div className="multi-fields">

          <input
            type="text"
            placeholder="City"
            value={formData.city}
            onChange={(e) =>
              setFormData({ ...formData, city: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="State"
            value={formData.state}
            onChange={(e) =>
              setFormData({ ...formData, state: e.target.value })
            }
          />

        </div>

        <div className="multi-fields">

          <input
            type="text"
            placeholder="Zip Code"
            value={formData.zip}
            onChange={(e) =>
              setFormData({ ...formData, zip: e.target.value })
            }
          />

          <input
            type="text"
            placeholder="Country"
            value={formData.country}
            onChange={(e) =>
              setFormData({ ...formData, country: e.target.value })
            }
          />

        </div>

        <input
          type="text"
          placeholder="Phone"
          value={formData.phone}
          onChange={(e) =>
            setFormData({ ...formData, phone: e.target.value })
          }
        />

      </div>

      {/* RIGHT SIDE */}
      <div className="place-order-right">

        <div className="cart-total">

          <h2>Cart Totals</h2>

          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
          </div>

          <hr />

          <div className="cart-total-details">
            <b>Total</b>

            <b>
              $
              {getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + 2}
            </b>

          </div>

          <button
            type="button"
            onClick={handlePayment}
          >
            PROCEED TO PAYMENT
          </button>

        </div>

      </div>

    </form>
  );
};

export default PlaceOrder;