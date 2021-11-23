import React, { Component } from 'react';
import SectionContainer from "../styles/section-container";
import styled from 'styled-components';
import Flip from 'react-reveal/Flip';

const FeatureProducts = () => {
  
  const slides = [
    {
      title: "Highway City",
      subtitle: "Karachi",
      description: "Redefining Luxury, Comfort and Security",
      image:
        "https://staging.starmarketingonline.com/wp-content/uploads/2021/11/Entrance-portal-1.jpg"
    },
    {
      title: "Lyallpur Galleria II",
      subtitle: "Faisalabad ",
      description: "The Mall Experience of a Lifetime",
      image:
        "https://staging.starmarketingonline.com/wp-content/uploads/2021/11/5_lyllpur-galleria.jpg"
    },
    {
      title: "Whiteley Mall",
      subtitle: "Islamabad ",
      description: "A High-End Business and Residential Complex",
      image:
        "https://staging.starmarketingonline.com/wp-content/uploads/2021/10/lifestyle-3-scaled.jpg"
    },

    {
      title: "Rawal Mall and Residencia",
      subtitle: "Rawalpindi",
      description: "A Mall of Dreams and Destiny",
      image:
        "https://staging.starmarketingonline.com/wp-content/uploads/2021/11/2.jpg"
    },
    {
      title: "Ahmed Residency Hyderabad",
      subtitle: "Hyderabad",
      description: "The most promising and exclusive project",
      image:
        "https://staging.starmarketingonline.com/wp-content/uploads/2021/05/ahmed-resize.jpg"
    }
  ];

  function useTilt(active) {
    const ref = React.useRef(null);
  
    React.useEffect(() => {
      if (!ref.current || !active) {
        return;
      }
  
      const state = {
        rect: undefined,
        mouseX: undefined,
        mouseY: undefined
      };
  
      let el = ref.current;
  
      const handleMouseMove = (e) => {
        if (!el) {
          return;
        }
        if (!state.rect) {
          state.rect = el.getBoundingClientRect();
        }
        state.mouseX = e.clientX;
        state.mouseY = e.clientY;
        const px = (state.mouseX - state.rect.left) / state.rect.width;
        const py = (state.mouseY - state.rect.top) / state.rect.height;
  
        el.style.setProperty("--px", px);
        el.style.setProperty("--py", py);
      };
  
      el.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        el.removeEventListener("mousemove", handleMouseMove);
      };
    }, [active]);
  
    return ref;
  }
  
  const initialState = {
    slideIndex: 0
  };
  
  const slidesReducer = (state, event) => {
    if (event.type === "NEXT") {
      return {
        ...state,
        slideIndex: (state.slideIndex + 1) % slides.length
      };
    }
    if (event.type === "PREV") {
      return {
        ...state,
        slideIndex:
          state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1
      };
    }
  };
  
  function Slide({ slide, offset }) {
    const active = offset === 0 ? true : null;
    const ref = useTilt(active);
  
    return (
      
          
       <div ref={ref} className="slide" data-active={active} style={{"--offset": offset, "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1}}>
         <div className="slideBackground " />
        <div className="slideContent" style={{backgroundImage: `url('${slide.image}')`}}>
          <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle"> {slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
            <button className="readMore">
              <a>Read More<img className="arrow" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC8AAAATCAYAAAAAn1R6AAAABHNCSVQICAgIfAhkiAAAAOJJREFUSEvV1sENgkAUBFD+3YMl2IF0ICXYgaEStQNKoAQ7wLMnSsAOTCxgnTmQrJvdDcf5JD8hcHmzTHaxRvAKIQxgzWY21ngmaG+Af8J1wvS1AKr4PeBc/UstgCR+bQO+AGtTDCCNZ4gowA0Vusc1l8cnAUYE6NcALvClAG7wuQCGTl3xolPcMgumA55zXsQ/cMOtycu1A/SI+XqrTQv0hHmzLW7waMg/3OzjAp+Ds+Py+BJcHh/BucgtDqjFxQmbwDvA53Q7lKzNFrhsbYBnPXj2ZFdc+t8G+DOAS64qcXV+eG9h0r2BPmcAAAAASUVORK5CYII="/>
              </a>
            </button>
          </div>
        </div>
      </div> 



     
    );
  }
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);

  return (
    <FeatureProductsMain>
    <SectionContainer>
     <div className="slides">
        <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

        {[...slides, ...slides, ...slides].map((slide, i) => {
          let offset = slides.length + (state.slideIndex - i);
          return <Slide slide={slide} offset={offset} key={i} />;
        })}
        <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
      </div> 
     
    </SectionContainer>
    </FeatureProductsMain>
    
  )
}



export default FeatureProducts;




const FeatureProductsMain = styled.div`
background: #fff;
padding-bottom: 8%;
@media only screen and (max-width: 820px) {
  padding-bottom: 22%;
  overflow: hidden;
}

`