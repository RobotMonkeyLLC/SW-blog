import React from 'react';

export const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Demo />} path="/demo" />
                    <Route element={<Single />} path="/single/:theid" />
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}