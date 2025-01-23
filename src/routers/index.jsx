import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import "../App.css"
import "../responsive.css"
import "../sheetComponent.css"
import { HomePai } from "../pages/HomePai"
import { HomeMae } from "../pages/homeMae"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/pai" element={<HomePai />} />
                    <Route path="/mae" element={<HomeMae />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}