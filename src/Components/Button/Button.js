import React from 'react'
import './Button.css'


function Button(props) {
    return (
        props.type === 'button' 
        ?
            <button className={props.theme}>
                {props.label}
            </button> 
        :
            <a className={props.theme} href={props.link}>
                {props.label}
            </a>
    )
}

export default Button
