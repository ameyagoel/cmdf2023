import React, { useState } from 'react'
import { Col, Container } from 'react-grid-system'




const Caraousel = () => {

    const items = [
        {
            img: candy1
        },
        {
            img: candy2
        },
        {
            img: candy3
        },
        {

        }
    ]


    const [index, setIndex] = useState(0);
    const length = 4;


    const nextSlide = () => {
        const newIndex = index + 1;
        setIndex(newIndex > 0 ? length : newIndex);
    }

    const prevSlide = () => {
        const newIndex = index - 1;
        setIndex(newIndex < 0 ? length - 1 : newIndex);
    }


    return (
        <div>
            <div className='item_image'>
                <img src={images[slideNumber].img} />
            </div>
            <div style={{ justifyContent: 'center', display: 'flex' }}>
                <img onClick={prevSlide} src={prev} className='prev' />
                <img onClick={nextSlide} src={next} className='next' />

            </div>
        </div>

    )
}

export default Caraousel;
