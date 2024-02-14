import './styling.scss';
import React from 'react';
import slides from './data_stock';
import SlideComp from './Slide_comp';

function App() {
  return (
    <div className="App">
         <div className="slider">
         <div className="slider__title"><h4>created by Ilyass Elhidam</h4></div>
            <div className="slider_container">
                {
                  slides.map(element=>
                        <SlideComp
                           key={element.id}
                           class_num={element.id}
                           myVarValue={element.id}
                           image={element.image}
                        />
                    )
                }
            </div>
         </div>
    </div>
  );
}
export default App;