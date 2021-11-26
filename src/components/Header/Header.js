import React from 'react';
import { Link } from 'react-router-dom';
import '../Header/header.css'

const Header = () => {
    return(
        <div className="appbar">
            <h2>Enocta</h2>
            <div className="links">
                <Link  className="linkfont" to="/">Coin Meter</Link>  
                <Link className="linkfont" to="/timer">Timer</Link>  
            </div>
        </div>
    )
}

export default Header