import React, {useEffect, useState} from 'react';
import {fetch} from "../functions/Fetch";


const Languages = () => {

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
                user.languages&&
                user && user.languages.map(language => (
                    <div className="card">
                        <div className="card-info">
                            <h2>{language.language}</h2>
                        </div>
                        <h2 className="percentage">{language.level * 10}%</h2>
                    </div>
                ))
            }
        </div>
    )
};

export default Languages;