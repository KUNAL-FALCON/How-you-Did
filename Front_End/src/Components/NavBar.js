import React from 'react'

const Navbar = () => {
    return(
        <nav>
            <div className = "nav-wrapper">
                <ul id = "nav-mobile" className = "right hide-on-med-and-down">
                    <li><a href = "/Register">Sign Up</a></li>
                    <li><a href = "/Login">Log In</a></li>
                    <li><a href = "/Contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    )
}
export default Navbar;