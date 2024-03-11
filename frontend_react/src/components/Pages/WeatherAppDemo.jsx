import * as React from 'react';

// import { motion } from 'framer-motion';
//
// import AppWrap from "../../wrapper/AppWrap";
// import { images } from '../../constants';

import WeatherApp from "../../assets/Projects/Weather-App/src/WeatherApp";
import {AppWrap, MotionWrap} from "../../wrapper";
import {motion} from "framer-motion";
import {urlFor} from "../../client";
import Stage from "../../wrapper/Stage"
import './WeatherAppDemo.scss'

/**
 * Header component
 * This is a presentation component which renders the header of the page.
 *
 * @component
 */
const WeatherAppDemo = () => {
    // <>
    //     <h2 className="head-text"> Take a Coffee <span>&</span> Chat With Me</h2>
    //     <div className="app__weatherApp-container app__flex">
    //             <div className='app__weatherApp-desc'>
    //                 <h3>Description</h3>
    //                 <p>This is a description of the project</p>
    //
    //             </div>
    //             {/*<h2 className="head-text"> Take a Coffee <span>&</span> Chat With Me</h2>*/}
    //
    //             <motion.div
    //                 whileInView={{opacity: [0, 1]}}
    //                 transition={{duration: 0.5}}
    //                 className="app__weatherApp-demo app__flex"
    //             >
    //                 <WeatherApp/>
    //             </motion.div>
    //     </div>
    // </>

    return (
        <>
            <h2 className="head-text"> ReactJS: <br /><span>Weather App</span></h2>
            <div className="app__weatherAppDemo">
                <motion.div
                    whileInView={{opacity: 1}}
                    whileHover={{scale: 1.1}}
                    transition={{duration: 0.5, type: 'tween'}}
                    className="app__weatherAppDemo-item"
                >
                    <div className="demo-container app__flex">
                        <div>
                            <WeatherApp className='app__WeatherAppDemo-item'/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </>
    );
}


export default AppWrap(
    MotionWrap(WeatherAppDemo, 'app__weatherAppDemo'),
    'weatherAppDemo', "app__whitebg");