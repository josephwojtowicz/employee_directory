import React from "react";
import "./Header.css";

function Header () {
    return (
        <div className="header">
            <div class="jumbotron jumbotron-fluid">
                <div class="container">
                    <h1 class="display-4">Employee Directory</h1>
                    <p class="lead">Quickly and easily find your employees with this directory.</p>
                </div>
            </div>
        </div>
    )
}

export default Header;