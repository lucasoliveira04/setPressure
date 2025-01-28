import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import "../App.css"
import "../responsive.css"
import "../sheetComponent.css"
import { HomePressao } from "../pages/homePressao"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pressao" element={<HomePressao />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}