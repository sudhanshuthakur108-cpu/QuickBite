import React from 'react'
import './OrderSuccess.css'
import { useNavigate } from 'react-router-dom'

const OrderSuccess = () => {

  const navigate = useNavigate()

  return (

    <div className='order-success'>

      <div className="success-card">

        <div className="success-check">
          ✓
        </div>

        <h1>Order Placed Successfully 🎉</h1>

        <p>
          Your delicious food is being prepared
          and will arrive shortly.
        </p>

        <button onClick={() => navigate('/')}>
          Continue Shopping
        </button>

      </div>

    </div>
  )
}

export default OrderSuccess