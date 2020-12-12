import React, { Component } from 'react';
import { MenuItems } from "./Menuitems";
import './Navbar.css';
import {Button} from "./Button.js";

class Navbar extends Component {
    state = { clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }


    render() {
        return (

            <nav className="NavbarItems">
                <h1 className="navbar-logo"><i className="fab fa-react"></i> S.P.E.C.I.A.L Flash Cards</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className = {this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <a className={item.cName} href={item.url}>
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar