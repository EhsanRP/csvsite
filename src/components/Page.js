import React from 'react';
import {Route, Routes} from "react-router-dom"
import Home from "./Home";
import Apps from "./Apps";
import Languages from "./Languages";
import Experties from "./Experties";
import Educations from "./Educations";

const Page = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/apps" element={<Apps/>}/>
            <Route path="/languages" element={<Languages/>}/>
            <Route path="/experties" element={<Experties/>}/>
            <Route path="/educations" element={<Educations/>}/>
        </Routes>
    );
};

export default Page;