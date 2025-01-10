import React from 'react'

export default class StateChange extends React.Component{
constructor(props){
    super(props);
    this.state = {
        x: "hi",
        y: "helloo",
        z: "greetings"
    }
}

componentDidMount(){
    this.setState({x:"hi1 from overridden method "})
}
render(){
    return (
        <div>
            {Object.values(this.state).map(e=> <p>{e}</p>)}
        </div>
    )
}
}