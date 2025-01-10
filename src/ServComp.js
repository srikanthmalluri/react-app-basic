import React from "react";

export default class ServComp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data :[]
        }
    }
    componentDidMount(){
        fetch('http://localhost:8080/todos')
        .then(data => data.json())
        .then(data=> this.setState({data:data}))

    }
    render(){
        return (
            <div>
                {this.state.data.map(e => <p>{JSON.stringify(e)}</p>)}
            </div>
        )
    }
}