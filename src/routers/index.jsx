import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import "../App.css"
import "../responsive.css"
import "../sheetComponent.css"
import { HomePressao } from "../pages/homePressao"
import { TestProd } from "../pages/test-prod"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pressao" element={<HomePressao />} />
                    <Route path="/teste" element={<TestProd />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}