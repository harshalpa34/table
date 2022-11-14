import React from 'react'


const Heading = (props) => {
   
  return (
    <div className="Heading">
        <h1>Todos</h1>
        <input type="text" className='searchbox'  placeholder='Search' onChange={(e)=>props.value(e.target.value)}/>
    </div>
  )
}

export default Heading