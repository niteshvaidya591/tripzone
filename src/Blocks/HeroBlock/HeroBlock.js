import './HeroBlock.css'
import HeroImage from './welcome-image.svg'
import React from 'react'
import Button from '../../Components/Button/Button'

function HeroBlock() {
    return (
        <section className="app-container hero-container">
            <div className="hero-image__block">
                <img className="hero-image__block-image" src={HeroImage} alt="plan to trip" />
            </div>
            <div className="hero-content__block">
                <h1 className="hero-content__block-title">Life is short <br /> and the world is wide!</h1>
                <h4>Stay at the comfort of your homes and book a trip to travel after the post pandemic era.</h4>
                <Button label="plan a trip" type="button" theme="button-primary" />
            </div>
        </section>
    )
}

export default HeroBlock
