import React from "react";
import { Link, Outlet } from "react-router-dom";

function About()
{
    return(
        <>
            <h1>About Page</h1>
                <ul>
                    <li><Link to="/aboutpage1">Aboutpage1</Link></li>
                    <li><Link to="/aboutpage2">Aboutpage2</Link></li>
                </ul>
        </>
    )
}

export default About;