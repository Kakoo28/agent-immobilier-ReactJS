import React, {Component} from 'react';
import {NavLink} from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <header>
                <NavLink to={'/'}><h1 className={'header-title'}>Featured <strong>Properties</strong></h1></NavLink>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, consequatur dolor dolore incidunt inventore maiores
                </p>
            </header>
        );
    }
}

export default Header;