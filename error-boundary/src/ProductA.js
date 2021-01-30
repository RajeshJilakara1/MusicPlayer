import React from 'react'

export default function ProductA(props) {
  if(props.name!=='Rajesh')
  {
    throw new Error('Please enter valid name')
  }
  return (
    <div>
     <h1>{props.name}</h1> 
    </div>
  )
}

//Develop webpage 
//PlayList 4,