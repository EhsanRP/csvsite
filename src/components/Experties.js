import React,{useEffect, useState} from 'react';
import {fetch} from "../functions/Fetch";

const Experties = () => {

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
                user&&user.experties&&user.experties.map(expert =>(
                    <div className="card">
                        <div className="card-info">
                            <h2>{expert.expert}</h2>
                            <div className="progress"></div>
                        </div>
                        <h2 className="percentage">{expert.level*10}%</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Experties;