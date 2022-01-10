// Libs:
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Styles:
import '../../assets/styles/components/global/base.css';

// Components:
import { Header } from '../../components/global/Header';
import { Footer } from '../../components/global/Footer';
import { Home } from '../../components/global/Home';
import { Login } from '../Login/Login';

export const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login/*" element={<Login />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App;