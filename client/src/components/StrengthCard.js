import React, { Component } from 'react'
import '../styles/Card.css'
import  axios from 'axios'


export default class StrengthCard extends Component {
    constructor(){
        super()
        this.state={

        }
    }
    render(){
    const{ name, description, image, time, numOfRep}= this.props
        return(
            <div className="card">
                <p>{name}</p>
                <p>{description}</p>
                <p>{numOfRep}</p>
                <p>{time}</p>
            </div>
        )
        }
    }