import React from 'react';
import { Link, useLocation } from "react-router-dom";
import '../App.css';

export default function Header() {
    const location = useLocation();

    return (
        <header className="App-header">
            <h1>Welcome to Paw MailMerge</h1>
            <br></br>
            <p>a privacy-sensitive, email-provider-agnostic, web-based mail merge solution</p>
            
            {location.pathname === "/" && (
                <Link to="/instructions" className="instructions-link">
                    <button className="instructions-button">Instructions</button>
                </Link>
            )} 
        </header>
    );
}