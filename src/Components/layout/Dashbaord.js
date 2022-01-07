import React, { Component } from 'react'
import PokeList from '../Pokemon/PokeList'

export default class Dashbaord extends Component {
    render() {
        return (
            <div className='row'>
                <div className='col'>
               <PokeList/> 
               </div>
            </div>
        )
    }
}
