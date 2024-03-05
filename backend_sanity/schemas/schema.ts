import {createSchema} from "sanity";
import {schemaTypes} from "../schemaTypes";
import testimonials from "./testimonials";
import about from "./about";
import brands from "./brands";
import contact from "./contact";
import experiences from "./experiences";
import skills from "./skills";
import workExperience from "./workExperience";
import works from "./works";

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        testimonials,
        about,
        brands,
        contact,
        experiences,
        skills,
        workExperience,
        works,
    ])
})