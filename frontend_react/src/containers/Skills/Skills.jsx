import React from 'react';
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import { Tooltip } from 'react-tooltip'

import { AppWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import './Skills.scss'


const Skills = () => {

    const [experience, setExperience] = React.useState([]);
    const [skills, setSkills] = React.useState([]);


    /**
     * @callback useEffect - React hook for handling side effects.
     * In this case, it fetches skills and experiences data on the initial render.
     */
    React.useEffect(() => {
        const query_experiences = '*[_type == "experiences"]';
        const query_skills = '*[_type == "skills"]';

        client.fetch(query_experiences).then((data) => {
            setExperience(data);
            console.log(data)
        })
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
                    {experience.map((work) => (
                        <motion.div
                            whileInView={{opacity: [0, 1]}}
                            transition={{duration: 0.5}}
                            className="app__skills-exp-work app__flex"
                            data-tip
                            data-for={work.works.name}
                            key={work.works.name}
                        >{work.works.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
}

export default Skills;