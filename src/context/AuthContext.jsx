import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AuthContext = createContext(null);

const AuthContextProvider = (props) => {

    // USER STATE
    const [user, setUser] = useState(() => {

        const savedUser =
            localStorage.getItem("quickbite-user");

        return savedUser
            ? JSON.parse(savedUser)
            : null;
    });

    // SAVE USER
    useEffect(() => {

        localStorage.setItem(
            "quickbite-user",
            JSON.stringify(user)
        );

    }, [user]);

    // LOGIN FUNCTION
    const login = (email, password) => {

        // EMAIL VALIDATION
        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            toast.error("Invalid Email");
            return false;
        }

        // PASSWORD VALIDATION
        if (password.length < 6) {

            toast.error(
                "Password must be 6 characters"
            );

            return false;
        }

        // FAKE LOGIN SUCCESS
        const fakeUser = {
            email,
            name: email.split("@")[0]
        };

        setUser(fakeUser);

        toast.success("Login Successful 😎");

        return true;
    };

    // SIGNUP FUNCTION
    const signup = (
        name,
        email,
        password
    ) => {

        if (!name.trim()) {

            toast.error("Name Required");
            return false;
        }

        const emailRegex =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(email)) {

            toast.error("Invalid Email");
            return false;
        }

        if (password.length < 6) {

            toast.error(
                "Password must be 6 characters"
            );

            return false;
        }

        const fakeUser = {
            name,
            email
        };

        setUser(fakeUser);

        toast.success("Account Created 🚀");

        return true;
    };

    // LOGOUT
    const logout = () => {

        setUser(null);

        localStorage.removeItem(
            "quickbite-user"
        );

        toast.success("Logged Out");
    };

    // CONTEXT VALUE
    const contextValue = {
        user,
        login,
        signup,
        logout
    };

    return (

        <AuthContext.Provider value={contextValue}>

            {props.children}

        </AuthContext.Provider>

    );
};

export default AuthContextProvider;