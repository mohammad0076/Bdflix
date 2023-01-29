import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Daiyer from './Daiyer';

const AllUsers = () => {

    const [users, setAllUsers] = useState([])
    useEffect(()=>{
        fetch('https://bd-flix-server-i4wbktqxf-mohammad0076.vercel.app/allUsers')
        .then(res => res.json())
        .then(data =>{
            console.log(data)
            setAllUsers(data)
            
        })
    },[])



    return (
        <div className='bg-[#3a3b3c] w-full rounded-lg'>
            
            
            
                    <div>
                        <div className="overflow-x-auto">
  <table className="table w-full">

    <thead>
      <tr>
        <th>Serial</th>
        <th>Image</th>
        <th>Email</th>
      </tr>
    </thead>
    <tbody>

{
    users.map((user, i)=>
    
    <tr key={user._id}>
    <th>{i+1}</th>

    <td><div className="w-12">
                <img className='rounded-full' src="https://placeimg.com/192/192/people" />
              </div></td>

    <td>{user?.email}</td>

  </tr>
    
    )
}

    </tbody>
  </table>
</div>
                    </div>
             
            


        </div>
    );
};

export default AllUsers;