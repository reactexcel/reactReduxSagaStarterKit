import React from 'react'
import { Link } from 'react-router'
import './header.scss'

class Header extends React.Component{
    render(){
        return(
            <a href='#/'>
                <div className="row header">
                    <span alt="Excellence Technologies"></span>
                </div>
            </a>
        );
    }
}

export default Header;
