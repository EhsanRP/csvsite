import React from 'react';
import {NavLink} from "react-router-dom";

const Links = () => {
    return (
        <div className="links">
            <NavLink to={"/languages"} className="link">
                <h2>Languages</h2>
            </NavLink>

            <NavLink  to={"/apps"} className="link">
                <h2>Apps</h2>
            </NavLink>

            <NavLink  to={"/educations"} className="link">
                <h2>Educations</h2>
            </NavLink>

            <NavLink to={"/experties"} className="link">
                <h2>Experties</h2>
            </NavLink>
        </div>
    );
};

export default Links;