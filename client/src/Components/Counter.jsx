import React, {useState, useEffect} from 'react'

export class Counter extends React.Component {
    constructor(props) {
        super(props)
        this.state= {
            population: 38467856
        }
    }
    componentDidMount() {
        setInterval((e)=>{
            this.setState({
                population: this.state.population - 3
            })
        }, 800)
    }

    render() {
        return (
            <p>{this.state.population} humans remaining...</p>
        )
    }
}