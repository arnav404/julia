import './App.css'
import {useState} from 'react'

import React from 'react'

const Sidebar = ({onChangeReal, onChangeIm, onChangeBP, onChangeIT}) => {
    const [realValue, setReal] = useState(0)
    const [imValue, setIm] = useState(0)
    const [bpVal, setBP] = useState(false)
    const [itr, setIT] = useState(150)

    const realChange = (e) => {
        onChangeReal(e.target.value)
        setReal(e.target.value)
    }

    const imChange = (e) => {
        onChangeIm(e.target.value)
        setIm(e.target.value)
    }

    const bpChange = (e) => {
        setBP(!bpVal)
        onChangeBP(bpVal)
    }

    const iterationChange = (e) => {
        setIT(e.target.value)
        onChangeIT(e.target.value)
    }


    return (
        <div className='sidebar'>
            <div style={{paddingLeft:20.0}}>
                <h1>Sidebar</h1>
                <hr/>
                <h2>Value of c</h2>
                <div className="slidecontainer">
                    <h3>Real: {realValue/1000}</h3>
                    <input onChange={realChange} type="range" min="-2000" max="2000" value={realValue} className="slider" id="myRange"/>
                </div>
                <div className="slidecontainer">
                    <h3>Imaginary: {imValue/1000}</h3>
                    <input onChange={imChange} type="range" min="-2000" max="2000" value={imValue} className="slider" id="myRange"/>
                </div>
                <hr/>
                <h2>Iterations</h2>
                <div className="slidecontainer">
                    <h3>Number of Iterations: {itr}</h3>
                    <input onChange={iterationChange} type="range" min="1" max="30" value={itr} className="slider" id="myRange"/>
                </div>
                <div className="buttondiv">
                    <button onClick={bpChange}>
                        <h3>Update</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
