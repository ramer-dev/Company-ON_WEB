import React from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from "./route/home/Home";
import SignUp from "./route/signup/SignUp";
import Main from "./route/main/Main";
import QNA from "./route/main/qna/QNA";

function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"/signup"} element={<SignUp/>}/>
                    <Route path={"/main"} element={<Main/>}/>
                    {/*<Route path={"/main"} render={(props => <Main {...props}/>)}/>*/}
                </Routes>
            </BrowserRouter>


        </div>
    );
}

export default App;
