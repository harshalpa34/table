import React from 'react'
import { useState } from 'react'
const Table = ({data,userID}) => {

    //.sorting logic 
    const [sortAscending, setsortAscending] = useState(true);
    const sortHandler = ()=>{
        setsortAscending(!sortAscending);
  
        sortAscending ? data.sort((a,b)=> a.id-b.id) : data.sort((a,b)=> b.id-a.id);
        console.log(data);
    }



  return (
    <div>
        <table className="table table-dark table1">
            <thead>
            <tr>
                <th scope="col">TODO ID <button className='button' onClick={sortHandler}> sort</button></th>
                <th scope="col">Title</th>
                <th scope="col">Status</th>
                <th scope="col">Action</th>
            </tr>
            </thead>
            <tbody>
            {data  && data.map((dataitem) => 
                         <tr key={dataitem.id}>
                         <th scope="row">{dataitem.id}</th>
                         <td>{dataitem.title}</td>
                         <td>{dataitem.completed.toString()}</td>
                         <td><button type="button" className="btn btn-light" onClick={()=>{userID(dataitem.userId , dataitem.id, dataitem.title)}}>view User</button></td>
                     </tr>
            )} 
            </tbody>
        </table>
    </div>
  )
}

export default Table;