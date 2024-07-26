import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Detail from './views/Detail.jsx';
import Nav from './components/Nav';

export const Layout = () => {
    return (
            <BrowserRouter>
                <Nav />
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Detail />} path=":category/:id"/>
                </Routes>
            </BrowserRouter>
    );
}