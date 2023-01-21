import React, { useEffect, useState } from 'react'
import "../style/css/slider.css";
import developer from "../style/image/image1.jpg";
import painter from "../style/image/image2.jpg";
import doctor from "../style/image/image3.jpg";

const SliderSection = () => {
    const [sliderValue, setSliderValue] = useState({})
    const [sliderView, setsSliderView] = useState(1)

    useEffect(() => {
        changeSliderHandle(sliderView)
    }, [sliderView])

    const changeSliderHandle = (id) => {
        switch (id) {
            case 1:
                setSliderValue({
                    id: 1,
                    img: developer,
                    name: "John Doe",
                    position: "Web Developer"
                })
                break;
            case 2:
                setSliderValue({
                    id: 2,
                    img: painter,
                    name: "Roshni Datta",
                    position: "Painter"
                })
                break;
            case 3:
                setSliderValue({
                    id: 3,
                    img: doctor,
                    name: "Rahul Gupta",
                    position: "Doctor"
                })
                break;

            default:
                break;
        }
    }


    const nextSliderViewHandler = () => {
        if (sliderView === 3) {
            setsSliderView(1)
        } else {
            setsSliderView(sliderView + 1)
        }
    }
    const previousSliderViewHandler = () => {
        if (sliderView === 1) {
            setsSliderView(3)
        } else {
            setsSliderView(sliderView - 1)
        }
    }
    return (
        <>
            <div className="hero-image" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${sliderValue?.img})` }}>
                <div className="hero-text">
                    <h1 style={{ fontSize: "50px", margin: 0 }}>I am {sliderValue?.name}</h1>
                    <p>And I'm a {sliderValue?.position}</p>
                    <button>Hire me</button>
                </div>
            </div>
            <div className="iconView">
                <i className="fas fa-angle-left arrowIconSize" onClick={() => nextSliderViewHandler()} style={{ marginLeft: "40px" }}></i>
                <i className="fas fa-angle-right arrowIconSize" onClick={() => previousSliderViewHandler()} style={{ marginRight: "40px" }}></i>
            </div>
        </>
    )
}

export default SliderSection