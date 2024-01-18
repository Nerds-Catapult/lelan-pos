import {Routes, Route} from "react-router-dom";
import Signup from "./screens/auth/signup.tsx";
import AuthLayout from "./layouts/authLayout.tsx";
import Login from "./screens/auth/login.tsx";
import './index.css'

function App() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<AuthLayout/>}/>
                    <Route path="/signup" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;