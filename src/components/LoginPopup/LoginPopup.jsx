import React, { useContext, useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets'
import { AuthContext } from '../../context/AuthContext'

const LoginPopup = ({ setShowLogin }) => {

    const [currState, setCurrState] = useState("Login")

    // FORM DATA
    const [data, setData] = useState({

        name: "",
        email: "",
        password: ""

    })

    // AUTH CONTEXT
    const { login, signup } = useContext(AuthContext)

    // INPUT CHANGE
    const onChangeHandler = (event) => {

        const name = event.target.name
        const value = event.target.value

        setData(data => ({
            ...data,
            [name]: value
        }))
    }

    // FORM SUBMIT
    const onSubmitHandler = (event) => {

        event.preventDefault()

        let success = false

        if (currState === "Login") {

            success = login(
                data.email,
                data.password
            )

        }

        else {

            success = signup(
                data.name,
                data.email,
                data.password
            )

        }

        // CLOSE POPUP IF SUCCESS
        if (success) {

            setShowLogin(false)

        }
    }

    return (

        <div className='login-popup'>

            <form
                onSubmit={onSubmitHandler}
                className="login-popup-container"
            >

                {/* TITLE */}
                <div className="login-popup-title">

                    <h2>{currState}</h2>

                    <img
                        onClick={() => setShowLogin(false)}
                        src={assets.cross_icon}
                        alt=""
                    />

                </div>

                {/* INPUTS */}
                <div className="login-popup-inputs">

                    {
                        currState === "Sign Up"
                        &&
                        <input
                            type="text"
                            name='name'
                            value={data.name}
                            onChange={onChangeHandler}
                            placeholder='Your name'
                            required
                        />
                    }

                    <input
                        type="email"
                        name='email'
                        value={data.email}
                        onChange={onChangeHandler}
                        placeholder='Your email'
                        required
                    />

                    <input
                        type="password"
                        name='password'
                        value={data.password}
                        onChange={onChangeHandler}
                        placeholder='Your password'
                        required
                    />

                </div>

                {/* BUTTON */}
                <button type='submit'>

                    {
                        currState === "Sign Up"
                        ? "Create Account"
                        : "Login"
                    }

                </button>

                {/* TERMS */}
                <div className="login-popup-condition">

                    <input type="checkbox" required />

                    <p>
                        By continuing, I agree to the terms of use and privacy policy.
                    </p>

                </div>

                {/* TOGGLE */}
                {

                    currState === "Login"

                    ?

                    <p>

                        Create a new account?

                        <span onClick={() => setCurrState("Sign Up")}>

                            Click here

                        </span>

                    </p>

                    :

                    <p>

                        Already have an account?

                        <span onClick={() => setCurrState("Login")}>

                            Login here

                        </span>

                    </p>

                }

            </form>

        </div>
    )
}

export default LoginPopup