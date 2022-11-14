import React from 'react'
import Heading from './Heading'
import Table from './Table'
import { useState } from 'react';
import { useEffect } from 'react'
import UserLIst from './UserLIst'

const Main = () => {
    const [data, setdata] = useState();
    const [Seachdata, setSeachdata] = useState();
    const [userDetails, setuserDetails] = useState();


// fetchin the table intitially
    useEffect(() => {
        fechdata();
    }, [])
    const fechdata = async()=>{
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await res.json(); 
        setdata(data);
    }
  


    // Search Logic
   const Search = (value) =>{
        const seachdata = data.filter(item => {
            if(value.trim() === ""){
                return item;
            }
            return item.id.toString().includes(value) ||item.title.toLowerCase().includes(value.toLowerCase()) 
            || item.completed.toString().toLowerCase().includes(value.toLowerCase()) 
            ;
        }
        )
        setSeachdata(seachdata)       
     }



     /// fetching User Details 
    const fetchUserDetails = async(id,todoID,todoTitle) =>{
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        const userdata = await res.json();
        setuserDetails({userdata, todoID,todoTitle});

    }
    const getUsedID =(userID, todoID, todoTitle)=>{
        fetchUserDetails(userID, todoID, todoTitle);
    }
    





  return (
    <>   
    <div className="home">
        <div className="TodoLIst">
            <Heading value = {Search} />


            
            <Table data={Seachdata ? Seachdata : data} userID={getUsedID}/>
        </div>
        <div className="userlist">
            <UserLIst user={userDetails}/>
        </div>
    </div>
    </>

       
  )
}

export default Main