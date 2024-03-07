import * as React from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";
import './Work.scss'

const Work = () => {



    return (
        <>
            <h2 className="head-text"> My Creative <span>Portfolio</span> Section</h2>

            <div className="app__work-filter">
                {['UI/UX', 'Web App', 'Mobile App', 'ReactJS', 'All'].map((item, index) => (
                    <div
                        key={index}
                        onClick={() => handleWorkFilter(item)}>
                        {item}
                    </div>
                ))}
            </div>

        </>
    );
}

export default Work;