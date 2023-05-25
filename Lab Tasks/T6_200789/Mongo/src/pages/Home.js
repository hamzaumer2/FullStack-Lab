import React, {useEffect, useState} from 'react'
import axios from 'axios';
export default function Home() {
    const [userDetails, setUserDetails] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8080/user/getAll').then((res) => {
            console.log("user Details", res.data);
            setUserDetails(res.data.data);
        })
    }, [])
  return (
    <div>
      <h1>User Details:</h1>
      {userDetails.map((item) => (
        <p>{item.name}</p>
      ))}
    </div>
  )
}
