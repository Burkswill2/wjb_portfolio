import React from 'react';
import {useLocation} from "react-router-dom";

/**
 * NavigationDots component.
 * This component renders navigation dots.
 * The dot corresponding to the currently active section is colored differently.
 *
 * @component
 * @param {Object} props - The props object
 * @param {string} props.active - The current active section
 *
 * @example
 * <NavigationDots active='home' />
 *
 * @returns {React.Element} The rendered NavigationDots component
 */
const NavigationDots = ({active}) => {

    const location = useLocation();

    const [nav, setNav] = React.useState(["wjb-weather"]);

    if (location.pathname  === '/frontend_react' ) {
        setNav([
            'home',
            'about',
            'work',
            'skills',
            'testimonial',
            'contact'
        ])
    }


    return (
        <div className="app__navigation">
            {nav.map((item, index) => (
                <a
                    href={`#${item}`}
                    key={item + index}
                    className='app__navigation-dot'
                    style={active === item ? {backgroundColor: '#313BAC'} : { }}
                />
            ))}
        </div>
    );
}

export default NavigationDots;