import React from 'react';
import { HiMenuAlt4,HiX } from "react-icons/hi";
import { motion } from "framer-motion"
import './Navbar.scss'
import {images} from '../../constants'
import { Link } from 'react-router-dom';
import Page from "../Pages/WeatherAppDemo"

/**
 * Navbar component.
 * It displays navigation links and houses the functionality to enable and disable the right hand expansion menu.
 *
 * @component
 */
const Navbar = () => {

    /**
     * @description A state variable used to toggle the visibility of the menu.
     * @type {boolean} toggle
     */
    const [toggle, setToggle] = React.useState(false)

    /**
     * @type {Object} variants
     * Variants to specify animation behaviours.
     */
    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: "100%" },
    }

    /**
     * @type {Array.<string>} navBarItems
     * Defines the menu items for the navbar.
     */
    const navBarItems = [
        'home',
        'about',
        'work',
        'skills',
        'contact'
    ]

    /**
     * Opens the dropdown menu by setting toggle state to true.
     * Called when menu icon is clicked.
     */
    const handleMenuOpen = () => {
        setToggle(true);
    }

    /**
     * Closes the dropdown menu by setting toggle state to false.
     * Called when close icon in the right hand expansion menu is clicked.
     */
    const handleMenuClose = () => {
        setToggle(false);
    }

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={images.logo} alt="logo"/>
            </div>
            <ul className="app__navbar-links">
                {navBarItems.map((item) => (
                    <li className="app__flex p-text" key={`link-${item}`}>
                        <div/>
                        <a href={`#${item}`}>{item}</a>
                    </li>
                ))}
                <li className="app__flex p-text"><Link to="/page">Page</Link></li>
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={handleMenuOpen}/>
                    <motion.div
                        initial={{x: "100%"}}
                        animate={toggle ? "open" : "closed"}
                        variants={variants}
                        transition={{duration: 0.5, ease: "easeInOut"}}
                    >
                        <HiX onClick={handleMenuClose}/>
                        <ul className="app__navbar-links">
                            {navBarItems.map((item) => (
                                <li key={item}>
                                    <a href={`#${item}`}>{item}</a>
                                </li>

                            ))}
                        </ul>
                        >
                    </motion.div>

            </div>
        </nav>
    );
}
export default Navbar;