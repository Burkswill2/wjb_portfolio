import React from 'react';

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
    return (
        <div className="app__navigation">
            {[
                'home',
                'about',
                'work',
                'skills',
                'testimonial',
                'contact'
            ].map((item, index) => (
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