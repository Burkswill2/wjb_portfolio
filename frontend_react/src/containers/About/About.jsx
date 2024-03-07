import React from 'react';
import {motion} from "framer-motion";
import { urlFor, client } from '../../client'
import {AppWrap} from "../../wrapper";
import './About.scss'

/**
 * The About component renders the About page
 * It fetches data from a client and maps through the data to display it.
 *
 * @component
 */
const About = () => {

    /**
     * @typedef abouts A state variable which stores fetched abouts data which is a list of page sections
     * @type {Array}
     */
    const [abouts, setAbouts] = React.useState([])

    /**
     * Fetches data when the component mounts
     * and updates the abouts state.
     */
    React.useEffect(() => {
        /**
         * @type {string} query
         * The query string to fetch abouts data type from the client.
         */
        const query = '*[_type == "abouts"]';

        /**
         * client.fetch is a function which takes a query string
         * and resolves with data, in this case, it updates our abouts state.
         */
        client.fetch(query).then((data) => {
                setAbouts(data);
                console.log(data);
            }
        )
    }, []);

    return (
        <>
            <h2 className="head-text"> I know that <span>Good Dev</span> <br /> means <span>Good Business</span> </h2>
            <div className="app__profiles">
                {abouts.map((about, index)=> (
                    <motion.div
                        whileInView={{opacity: 1}}
                        whileHover={{scale: 1.1}}
                        transition={{duration: 0.5, type: 'tween'}}
                        className="app__profile-item"
                        key={about.title + index}
                    >
                        <img src={urlFor(about.imgUrl)} alt={about.title}/>
                        <h2 className="bold-text" style={{marginTop: 20}}>{about.title}</h2>
                        <p className="p" style={{marginTop: 10}}>{about.description}</p>
                    </motion.div>
                ))}
            </div>
        </>
    );
}

export default AppWrap(About, 'about');