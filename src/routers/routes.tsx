import { Routes, Route } from "react-router-dom";
import { Calculator } from "../pages/calculator";
import { StopWhatch } from "../pages/stopwhatch";

export const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Calculator/>}/>
            <Route path="/stopwhatch" element={<StopWhatch/>}/>
        </Routes>
    );
};