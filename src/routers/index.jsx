import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import "../App.css"
import "../responsive.css"
import "../sheetComponent.css"
import { HomeMae } from "../pages/homeMae"
import { HomePai } from "../pages/homePai"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/mae" element={<HomeMae />} />
                    <Route path="/pai" element={<HomePai/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}