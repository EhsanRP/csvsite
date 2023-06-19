import React, {useEffect, useState} from 'react';
import {fetch} from "../functions/Fetch";

const Profile = () => {

    const [user,setUser] = useState({})

    useEffect(()=>{

        const fetchData = async ()=>{
            const data = await fetch()
            setUser(data)
        }
        fetchData()
    },[])

    return (
        <div className="user">
            <img src="https://www.shareicon.net/data/2016/07/05/791214_man_512x512.png" alt={user.name}/>
                <h3>{user.name}</h3>
                <p>{user.subtitle}</p>
        </div>
    );
};

export default Profile;