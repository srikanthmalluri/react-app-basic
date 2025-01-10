import React from "react";

function NApp(props) {
    return (<>
        <h1>Entry Point</h1>
        <br />
        <CompA />
        <CompB />
        <CompC></CompC>
    </>)
}


class CompA extends React.Component {
    render() {
        return (<>
            <h1 style={{ backgroundColor: 'aquamarine', color: 'blue' }}>First Component</h1>
        </>)
    }
}


const CompB = class extends React.Component {
    render() {
        return (<>
            <h1 style={{ backgroundColor: 'olive', color: 'blue' }}>This is yet another class component!</h1>
        </>)
    }
}

class Cars {
    constructor(name, brand) {
        this.name = name;
        this.brand = brand;
    }
    toString() {
        return `Name:${this.name}\tBrand:${this.brand}`;
    }
}

function retCars() {
    let aCars = [];
    let arr1 = ['Octavio', 'Punto', 'Lilac', 'Swift', 'Continental'];
    let arr2 = ['Skoda', 'Fiat', 'Cadillac', 'Maruti', 'Lincoln'];
    for (let i = 0; i < arr1.length; i++) {
        let car = new Cars(arr1[i], arr2[i]);
        aCars.push(car);
    }
    return aCars;
}

class CompC extends React.Component {
    render() {
        return (<>
            <center>
                <table className="pure-table pure-table-striped">
                    <thead>
                        <tr><th>Name</th><th>Brand</th></tr>
                    </thead>
                    <tbody>
                        {
                            retCars().map(n => <tr><td>{n.name}</td><td>{n.brand}</td></tr>)
                        }
                    </tbody>
                </table>
            </center>
        </>)
    }
}



export default NApp;