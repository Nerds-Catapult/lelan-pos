import {Routes, Route} from "react-router-dom";
import Signup from "./screens/auth/signup.tsx";
import Login from "./screens/auth/login.tsx";


function App() {
    return (
        <>
            <Routes>
                <Route>
                    <Route path="/" element={<Signup/>}/>
                    <Route path="/login" element={<Login/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;