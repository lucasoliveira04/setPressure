import { BrowserRouter, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/home"
import "../App.css"
import "../responsive.css"
import { MainFather } from "../pages/mainFather"
import { MainMother } from "../pages/mainMother"

export const AppRouter = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/father" element={<MainFather />} />
                    <Route path="/mother" element={<MainMother />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}