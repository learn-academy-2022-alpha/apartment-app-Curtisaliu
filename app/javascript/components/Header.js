import React, { Component } from 'react'
import { Nav, NavItem } from 'reactstrap'

class Header extends Component {
    render() {
        const {
            logged_in,
            current_user,
            new_user_route,
            sign_in_route,
            sign_out_route
        } = this.props
        console.log("logged_in:", logged_in)
        console.log("current_user:", current_user)
        console.log("new_user_route:", new_user_route)
        console.log("sign_in_route:", sign_in_route)
        console.log("sign_out_route:", sign_out_route)
        return (
            <>
                <h1 className='center'> Welcome to Apartment Finder! </h1>
                <h3 className='center'> Find local apartments in your area! </h3>
                <Nav>
                    <NavItem>
                        <a href={sign_in_route} className="nav-link"> Sign In </a>
                    </NavItem>
                </Nav>
            </>
        )
    }
}

export default Header
