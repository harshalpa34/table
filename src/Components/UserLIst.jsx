import React from 'react'
import { memo } from 'react';

const UserLIst = ({user}) => {
    if(user !== undefined ){
        return (
    
            <div className='userlist1'>
                <h1>
                    User Details
                </h1>
                <table class="table usertable">
                    <tbody>
        
                        
                            <tr>
                            <th scope="row">TODO ID</th>
                            <td>{user.todoID}</td>
                            </tr>    
        
                            <tr>
                            <th scope="row">TODO TASk</th>
                            <td>{user.todoTitle}</td>
                            </tr>    
        
                            <tr>
                            <th scope="row">USER ID</th>
                            <td>{user.userdata.id}</td>
                            </tr>    
        
                            <tr>
                            <th scope="row">USER NAME</th>
                            <td>{user.userdata.name}</td>
                            </tr>  
        
                            <tr>
                            <th scope="row">EMAIL</th>
                            <td>{user.userdata.email}</td>
                            </tr>        
                        
                         
                    </tbody>
                </table>
        
            </div>
          ) 
    }  
    // return <h1> View User Details</h1>
    return 
 
}

export default memo(UserLIst);