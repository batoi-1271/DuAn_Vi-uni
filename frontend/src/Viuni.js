import 'swiper/swiper.min.css';
import './assets/boxicons-2.0.7/css/boxicons.min.css';
import './App.scss';

import { BrowserRouter, Route } from 'react-router-dom';
import bgLogin from "../src/assets/bgLogin.jpg";
import logo from "../src/assets/logo.png";
import Login from './Form/Login/Login';

function Viuni() {
    return (
        <>
        <Login/>
        </>
    );
}

export default Viuni;