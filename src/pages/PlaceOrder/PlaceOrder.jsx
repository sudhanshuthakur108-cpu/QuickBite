import React, { useContext, useEffect } from 'react'
import './PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'

const PlaceOrder = () => {

  const { getTotalCartAmount } = useContext(StoreContext)

  const { user } = useContext(AuthContext)

  const navigate = useNavigate()

  // LOGIN CHECK 😎
  useEffect(() => {

    if (!user) {

      alert("Please login first to proceed checkout 😎")

      navigate('/cart')

    }

  }, [user, navigate])

  return (

    <form className="place-order">

      {/* LEFT SIDE */}
      <div className="place-order-left">

        <p className="title">Delivery Information</p>

        <div className="multi-fields">
          <input type="text" placeholder='First Name' />
          <input type="text" placeholder='Last Name' />
        </div>

        <input type="email" placeholder='Email Address' />

        <input type="text" placeholder='Street' />

        <div className="multi-fields">
          <input type="text" placeholder='City' />
          <input type="text" placeholder='State' />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder='Zip Code' />
          <input type="text" placeholder='Country' />
        </div>

        <input type="text" placeholder='Phone' />

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
              ${getTotalCartAmount() === 0
                ? 0
                : getTotalCartAmount() + 2}
            </b>
          </div>

          <button
            type='button'
            onClick={() => navigate('/success')}
          >
            PROCEED TO PAYMENT
          </button>

        </div>

      </div>

    </form>
  )
}

export default PlaceOrder