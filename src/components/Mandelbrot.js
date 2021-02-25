import {useState, useRef, useEffect} from 'react'
import Sidebar from './Sidebar'
import './App.css'

const Mandelbrot = props => {

    // Get the canvas and context
    const canvasRef = useRef(null)
    const[real, setR] = useState(-0.5)
    const[imaginary, setI] = useState(0.5)
    const[buttonPressed, setBP] = useState(false)
    const[itr, setIT] = useState(100)

    const onChangeReal = (data) => {
        setR(data/1000)
    }
    const onChangeIm = (data) => {
        setI(data/1000)
    }

    const onChangeBP = (data) => {
        setBP(data)
    }

    const onChangeIT = (data) => {
        setIT(data)
    }

    var colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#000000']
    useEffect(() => {
        console.log("RENDER")
        const myCanvas = canvasRef.current
        const context = myCanvas.getContext('2d')
        
        myCanvas.width = window.innerWidth
        myCanvas.height = window.innerHeight

        context.fillStyle = colors[0]

        for(var x=0; x < myCanvas.width; x++) {
            for(var y=0; y < myCanvas.height; y++) {
                var im = (y-myCanvas.height/2)/(myCanvas.height/2)
                var r = (x-myCanvas.width/2)/(myCanvas.height/2)
                var ci = imaginary
                var cr = real
                var b = 0
                var inSet = true
                for(var i = 1; i < itr+1; i++){
                    var tempim = 2*im*r+ci
                    var tempr = r*r-im*im+cr
                    im = tempim
                    r = tempr
                    if(b<20) {
                        b++
                    }
                    if(im*im+r*r>20) {
                        inSet=false
                        break
                    }
                }
                if(inSet) {
                    context.fillStyle=colors[4]
                } else {
                    context.fillStyle=colors[Math.trunc(3*b/20)]
                }
                context.fillRect(x,y, 1,1);
            } 
         }

         context.fillStyle = '#FFFFFF'
         context.fillRect(myCanvas.width/2, 0, 1, myCanvas.height)
         context.fillRect(0, myCanvas.height/2, myCanvas.width, 1)


      }, [buttonPressed])
    

    return (
        <div>
            <canvas ref={canvasRef} className="canvas"/>
            <Sidebar onChangeIT={onChangeIT} onChangeReal={onChangeReal} onChangeBP={onChangeBP} onChangeIm={onChangeIm}/>
        </div>
    )
}


export default Mandelbrot
