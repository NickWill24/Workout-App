
import React, { Component } from 'react'
import "../styles/Home.css"
import { Link } from 'react-router-dom'

export default class Home extends Component {
    render(){
        return(
            <div className="home">
                <h1>Home</h1>
                <img src="https://i.imgur.com/MTClotL.png" alt="logo"></img>
                <p>Pick A Category</p>
                <div className="row">
                <Link to="/balance">
                    <div className="category">
                        Balance
                    </div>
                </Link>
                <Link to="/endurance">
                    <div className="category">
                        Endurance
                    </div>
                </Link>
                <Link to="strength">
                    <div className="category">
                        Strength
                    </div>
                </Link>
                </div>
                
            </div>
        )
    }
}