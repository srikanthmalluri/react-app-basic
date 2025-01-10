import React from 'react';


function ClassComp(){
    return (
        <CompA></CompA>
    )
};

class CompA extends React.Component{
    render(){
        return (
            <div>
                {/* <h1 style={{backgroundColor:'blueviolet',color:'red'}}> Class Component</h1> */}
                <center>
                    <table className="pure-table pure-table-horizontal">
                        <thead>
                            <tr>
                                <th></th><th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Name</td><td><input type='text' placeholder='Name'></input></td>
                                <td>password</td><td><input type='password' placeholder='Name'></input></td>
                                <td>email</td><td><input type='text' placeholder='Name'></input></td>
                                <tr><td><input type="submit" className="pure-button pure-button-primary" value="Register" /></td>
                            <td><input type="reset" className="pure-button pure-button-primary" value="Cancel" /></td></tr>
                                

                            </tr>
                        </tbody>
                    </table>
                </center>
                
            </div>
          

        )
    }
}

export default ClassComp;