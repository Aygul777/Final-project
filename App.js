import React from "react";
import './App.css';
import {Routes, Route} from 'react-router-dom';
import CardsPage from "./components/Pages/CardsPage";
import BasketPage from "./components/Pages/BasketPage/BasketPage";
import LoginPage from "./components/Pages/LoginPage/LoginPage";




function App() {

    return (
        <Routes>
            <Route path={"/"} element={<LoginPage/>} />
            <Route path={"/cards"} element={<CardsPage/>} />
            <Route path={"/basket"} element={<BasketPage/>} />
        </Routes>
    );
}

export default App;
