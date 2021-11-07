import React from 'react'
import { useUserContext } from '../../context/userContext'

function Dashboard() {
    const {user} = useUserContext()
    return (
        <div>
            <button onClick={()=>{console.log(user)}} > </button>
        </div>
    )
}

export default Dashboard
