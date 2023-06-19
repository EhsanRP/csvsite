import React,{useEffect, useState}  from 'react';
import {fetch} from "../functions/Fetch";

const Educations = () => {

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
                user&&user.educations&&user.educations.map(education =>(
                    <div className="card">
                        <div className="card-info">
                            <h2>{education.place}</h2>
                            <div className="progress"></div>
                        </div>
                        <h2 className="percentage">{education.level}</h2>
                    </div>
                ))
            }
        </div>
    );
};

export default Educations;