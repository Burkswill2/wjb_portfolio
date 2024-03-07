import React from 'react';
import { BsTwitterX, BsInstagram } from "react-icons/bs";
import { FaFacebook} from "react-icons/fa";

/**
 * SocialMedia component.
 * This component displays social media icons for Twitter, Instagram, and Facebook.
 *
 * @component
 * @example
 * <SocialMedia />
 *
 * @returns {React.Element} The rendered SocialMedia component
 */
const SocialMedia = () => {
    return (
        <div className="app__social">
            <div>
                <BsTwitterX/>
            </div>
            <div>
                <BsInstagram/>
            </div>
            <div>
                <FaFacebook/>
            </div>
        </div>
    );
}

export default SocialMedia;