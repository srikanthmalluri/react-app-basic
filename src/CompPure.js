import React from 'react';

function CompPure(){
  let   state={
        x: "hi",
        y: "hello",
        z: true
    }
    return (
        <div>
            {Object.values(state).map(val=>{
              return   <p>{val+""}</p>
            })}

        </div>
    )
}

export default CompPure;