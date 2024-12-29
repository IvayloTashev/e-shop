import React, { useState } from 'react'
import './Slider.css'
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { sliderItems } from '../../dummyData.js'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    };

    return (
        <div className='slider-container'>
            <div className='arrow-left' onClick={() => handleClick("left")}>
                <ArrowLeftIcon />
            </div>

            <div className='wrapper-container'
                style={{
                    transform: `translateX(-${slideIndex * 100}vw)`,
                    transition: 'transform 1.5s ease-in-out',
                }}
            >
                {sliderItems.map((item) => (
                    <div className='slide-container' key={item.id}>

                        <div className='image-container'>
                            <img src={item.image} alt="" />
                        </div>

                        <div className='info-container'>
                            <h1>{item.title}</h1>
                            <p>{item.description}</p>
                            <button>BUY NOW</button>
                        </div>
                    </div>
                ))}

            </div>

            <div className='arrow-right' onClick={() => handleClick("right")}>
                <ArrowRightIcon />
            </div>
        </div>
    )
}

export default Slider


