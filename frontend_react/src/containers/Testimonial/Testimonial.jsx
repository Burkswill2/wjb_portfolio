import React from 'react';
import './Testimonial.scss'
import { HiChevronRight, HiChevronLeft } from 'react-icons/hi';
import {AppWrap, MotionWrap} from "../../wrapper";
import { urlFor, client } from "../../client";

import './Testimonial.scss';

const Testimonial = () => {

    const [testimonials, setTestimonials] = React.useState([]);
    const [brands, setBrands] = React.useState([]);
    const [currentIndex, setCurrentIndex] = React.useState(0)

    React.useEffect(() => {
        const query = '*[_type == "Testimonials"]'

        client.fetch(query)
            .then((data) => {
            setTestimonials(data);
            console.log(data)
        })

        // client.fetch(query)
        //     .then((data) => {
        //         setBrands(data);
        //     })
    },[])

    const handleClick = (direction) => {
        switch (direction) {
            case 'left':
                setCurrentIndex(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1);
            case 'right':
                setCurrentIndex(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1);
        }
    }

    const testimonial = testimonials[currentIndex]
    return (
        <>
            {testimonials.length &&
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(testimonial.imgurl)} alt="testimonials" />
                        <div className="app__testimonial-content" >
                            <p className="p-text"> {testimonial.feedback}</p>                                <div>
                                    <h4 className="bold-text">{testimonial.name}</h4>
                                    <h5 className="p-text">{testimonial.company}</h5>
                                </div>
                        </div>
                    </div>
                    <div className="app__testimonial-btns app__flex">
                        <div className="app__flex" onClick={() => handleClick('left')}>
                            <HiChevronLeft/>
                        </div>

                        <div className="app__flex" onClick={() => handleClick('right')}>
                            <HiChevronRight/>
                        </div>
                    </div>
                </>
            }
            <h2 className="head-text">Testimonials</h2>
        </>
    );
}

export default AppWrap(
    MotionWrap(Testimonial, 'app__testimonial'),
    'Testimonial', "app__whitebg");