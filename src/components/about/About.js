import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css";

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset={0} animateIn="fadeInLeft" duration={2.4} animateOnce={true} initiallyVisible={true}>
                    <span className={classes.head}>ABOUT ME</span>
                    {/* <h2 className={classes.heading}>Who Am I?</h2> */}
                    <div className={classes.About}>
                        <p> My name is <b>Shivam kumar</b> and I am currently pursuing  my degree in Bachelor of Technology in Computer Science Engineering Specialization In Cyber Security  from <a target="_blank" href="https://www.oistbpl.com/">Oriental College of Technology, Bhopal.</a>  I am much interested in cyber security new things which excite me a lot. :)  </p>
                        <p className={classes.br}>I love exploring new technologies and being a practitioner, I like to stay on top of latest trends. I try to leave every line of code I write more readable, accessible, and modular.
                        </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;