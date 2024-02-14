import React from 'react';
import { CSSProperties } from 'react';

const SlideComp = ({myVarValue,image,class_num})=>{
    const classN=`slider_container__item item-${class_num}`;
    return (
        <>
            <span className={classN}>
                <img src={image} width={300} alt="slide image" />
            </span>
        </>
    );
}
export default SlideComp;
