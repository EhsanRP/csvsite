import React,{useEffect, useState} from 'react';
import {fetch} from "../functions/Fetch";

const Apps = () => {

    const [user, setUser] = useState({})

    useEffect(() => {

        const fetchData = async () => {
            const data = await fetch()
            setUser(data)
        }
        fetchData()
    }, [])
    return (
        <div className="games">
            {
                user.apps&&
                user&&user.apps.map(app =>(
                    <div className="card">
                        <div className="card-info">
                            <h2>{app.name}</h2>
                            <div className="progress"></div>
                        </div>
                        <h2 className="percentage">{app.level*10}%</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Apps;