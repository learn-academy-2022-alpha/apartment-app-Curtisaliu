import React, { Component } from 'react'
import { Nav, NavItem, NavbarBrand, NavbarToggler, Collapse, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavbarText } from 'reactstrap'
import { Navbar } from 'reactstrap'
import { NavLink } from 'react-router-dom'

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
                <div>
                    <Navbar
                        color="light"
                        expand="md"
                        light
                    >
                        <NavbarBrand href="/">
                            Home
                        </NavbarBrand>
                        <NavbarToggler onClick={function noRefCheck() { }} />
                        <Collapse navbar>
                            <Nav
                                className="me-auto"
                                navbar
                            >
                                <NavItem>
                                    <NavLink to="/Apartments">
                                        View Apartments
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <UncontrolledDropdown
                                inNavbar
                                nav
                            >
                                <DropdownToggle
                                    caret
                                    nav
                                >
                                    Users
                                </DropdownToggle>
                                <DropdownMenu end>
                                    <DropdownItem>
                                        <a href={new_user_route} className="nav-link" > Sign Up</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href={sign_in_route} className="nav-link" > Sign In </a>
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        <a href={sign_out_route} className="nav-link" > Sign Out</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Collapse>
                    </Navbar>
                    <h1 className='center'> Welcome to Apartment Finder! </h1>
                    <h3 className='center'> Find local apartments in your area! </h3>
                </div>


                {/* <h1 className='center'> Welcome to Apartment Finder! </h1>
                <h3 className='center'> Find local apartments in your area! </h3>
                <Nav>
                    <NavItem>
                        <a href={new_user_route} className="nav-link" > Sign Up</a>
                        <a href={sign_in_route} className="nav-link" > Sign In </a>
                        <a href={sign_out_route} className="nav-link" > Sign Out</a>
                    </NavItem>
                    <NavLink to="/"> Home </NavLink>
                    <NavLink to="/Apartments"> View Available Apartments </NavLink>
                </Nav> */}
            </>
        )
    }
}

export default Header
