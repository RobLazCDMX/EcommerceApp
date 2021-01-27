import React, { useState } from 'react';
import './SlideShow.scss';
import SlideShowImgComp from './SlideShowImgComp';
import i1 from '../../assets/header.jpg';
import i2 from '../../assets/h1.jpg';
import i3 from '../../assets/mix.jpg';
import i4 from '../../assets/mix2.jpg';
import i5 from '../../assets/service.jpg';




const Slider = () => {
    // Array for component to show inside the slider
    let sliderArr = [ 
    <SlideShowImgComp src={i1}/>, 
    <SlideShowImgComp src={i2}/>, 
    <SlideShowImgComp src={i3}/>, 
    <SlideShowImgComp src={i4}/>, 
    <SlideShowImgComp src={i5}/>,
    ];
    
    const [x, setX] = useState(0);
    // console.log(x)

    const goLeft = () => {
        console.log(x);
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    };

    const goRight = () => {
        console.log(x)
        // sliderArr.length was used so the input can be dynamic
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    };

    return ( 
        <div className="slider"> 

        {sliderArr.map((item, index)=> {
            return (
                <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                    {item}
                </div>
                
            );
       })}
        {/* Add navigation buttons */}
        <button id="goLeft" onClick={goLeft}>
            {/* <i class="fas fa-chevron-left"></i> */}
        </button>
        <button id="goRight" onClick={goRight}>
            {/* <i class="fas fa-chevron-right"></i> */}
        </button>
        </div>
    );
}
 
export default Slider;