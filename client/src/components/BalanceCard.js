import React, { Component } from 'react'
import '../styles/Card.css'

export default class BalanceCard extends Component {
    constructor(){
        super()
        this.state={

        }
    }


    // deleteBalance= async (id) =>{
    //     console.log(id)
    //     try{
    //       const response = await axios.delete(`http://localhost:3001/api/deleteBalance/${id}`)
    //       this.setState({balanceArr: response.data.balances})
    //       console.log("delete", id, this.state.balanceArr)
    //     } catch(error){
    //       console.log('error')
    //     }
    // }



    render(){
    const{ name, description, image, time, numOfRep, id}= this.props
    console.log(id)
        return(
            <div className="card">
                <p>{name}</p>
                <p>{description}</p>
                <p>{numOfRep}</p>
                <p>{time}</p>
                <input hidden value={id}/> 
                {/* <button onClick={()=>deleteBalance(id)}>delete</button> */}
                
            </div>
        )
        }
    }