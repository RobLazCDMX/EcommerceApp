import React from 'react';

const  ImgComp = ({ src }) => {  //by using {src} rather than props we are deconstructing therefore we don't have to write props.'' 
    let imgStyles={
                width:100+"%",
                height: 100+"%"
            }
    return ( 
        
        <img src={src} alt="slide-img" style={imgStyles} ></img>
    );
}
 
export default ImgComp;