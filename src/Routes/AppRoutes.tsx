import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FluxoOne } from "../page/FluxoOne";
export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" Component={FluxoOne} />
                <Route path="/Fluxo1" Component={FluxoOne} />
            </Routes>
        </BrowserRouter>
    )
}