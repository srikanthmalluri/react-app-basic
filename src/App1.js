import React from 'react';

 import ClassComp from './ClassComp';
// import './App1.css'
function App1(props){
 
    return (
        <>
        <h2>from new Component </h2>
        {/* <marquee direction="up" >Scrolling text</marquee> */}
        <ClassComp/>
        </>
    );
}

class CompA extends React.Component{
    render(){
        return (
            <div>
                <h1 style={{backgroundColor:'blueviolet',color:'red'}}> Class Component</h1>
            </div>
        )
    }
}

export default App1;