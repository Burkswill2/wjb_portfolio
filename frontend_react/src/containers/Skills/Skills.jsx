import * as React from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import Tooltip from '@mui/material/Tooltip';
import {AppWrap, MotionWrap} from "../../wrapper";
import { urlFor, client } from "../../client";

import './Skills.scss'
import {Button, Fade} from "@mui/material";


/**
 * Skills Component
 *
 * This component fetches skills and experiences data from a client and displays it by each work and each year of experience.
 * It uses motion from framer-motion library for animations.
 * It uses Tooltip from @mui/material library to show the description of work when hovering over its name.
 *
 * @component
 *
 */
const Skills = () => {

    /**
     * @type {Array} experience - State variable used for storing the fetched experience data.
     * @type {Array} skills - State variable used for storing the skills.
     */
    const [experience, setExperience] = React.useState([]);
    const [skills, setSkills] = React.useState([]);


    /**
     * @callback useEffect - React hook for handling side effects.
     * In this case, it fetches skills and experiences data on the initial render.
     */
    React.useEffect(() => {
        const query_experiences = '*[_type == "experiences"]';
        const query_skills = '*[_type == "skills"]';

        //Todo: Add proper error handling
        client.fetch(query_experiences).then((data) => {
            setExperience(data);
            console.log(data);
        })

        //Todo: Add proper error handling
        client.fetch(query_skills).then((data) => {
            setSkills(data);
        })
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experience</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills.map((skill) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={skill.name}
                        >
                            <div className="app__flex" style={{ backgroundColor: skill.bgColor }} >
                                <img src={urlFor(skill.icon)} alt={skill.name} />
                            </div>
                            <p className="p-text">{skill.name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experience.map((experience) => (
                            <motion.div
                                className="app__skills-exp-item"
                                key={experience.year}
                            >
                                <div className="app__skills-exp-year">
                                    <p className="bold.text">{experience.year}</p>
                                </div>
                                <motion.div className="app__skills-exp-works">
                                    {experience.works.map((work) => (
                                        <>
                                            <motion.div
                                                whileInView={{opacity: [0, 1]}}
                                                transition={{duration: 0.5}}
                                                className="app__skills-exp-work app__flex"
                                                data-tip
                                                data-for={work.name}
                                                key={work.name}
                                            >

                                                <Tooltip
                                                    id={work.name}
                                                    title={work.desc}
                                                    TransitionComponent={Fade}
                                                    TransitionProps={{ timeout: 600 }}
                                                    placement='right'
                                                    arrow="true"
                                                    componentsProps={{
                                                        tooltip: {
                                                            sx: {
                                                                '& .MuiTooltip-arrow': {color: 'var(--white-color)'},
                                                                backgroundColor: 'var(--white-color)',
                                                                maxWidth: '300px',
                                                                boxShadow: '0 0 25px rgba(0,0,0,0.1)',
                                                                borderRadius: '5px',
                                                                padding: '1rem',
                                                                color: 'var(--gray-color)',
                                                                textAlign: 'center',
                                                                lineHeight: '1.5',
                                                                opacity: '1',

                                                                ["@media screen and (min-width: 2000px)"]: {
                                                                    fontSize: '1.75rem',
                                                                    maxWidth: '500px',
                                                                    lineHeight: '2',
                                                                }
                                                            }
                                                        }
                                                    }}
                                                >
                                                    <h4 className="bold-text">{work.name}</h4>
                                                </Tooltip>
                                                <p className="p-text">{work.company}</p>
                                            </motion.div>
                                        </>
                                    ))}
                                </motion.div>
                            </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default AppWrap(
    MotionWrap(Skills, 'app__skills'),
    'skills', "app__whitebg");