import React from 'react';
import { HiMenuAlt4,HiX } from "react-icons/hi";
import { motion } from "framer-motion"
import './Navbar.scss'
import {images} from '../../constants'

/**
 * Navbar component displaying navigation links and a toggleable menu.
 * Utilizes Framer Motion for animation effects.
 */
const Navbar = () => {

    /**
     * State to manage the toggle state of the menu
     */
    const [toggle, setToggle] = React.useState(false)

    const navBarItems = [
        'home',
        'about',
        'work',
        'skills',
        'contact'
    ]

    /**
     * Handles click event on the menu icon to open the menu.
     */
    const handleMenuOpen = () => {
        setToggle(true);
    }

    /**
     * Handles click event on the close icon to close the menu.
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
            </ul>

            <div className="app__navbar-menu">
                <HiMenuAlt4 onClick={handleMenuOpen}/>
                {toggle && (
                    <motion.div
                        initial={{x: 300}}
                        animate={{x: 0}}
                        transition={{duration: 0.85, ease: "easeOut"}}
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
                )}
            </div>
        </nav>
    );
}
export default Navbar;