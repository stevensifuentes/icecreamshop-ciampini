import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { useHistory } from 'react-router-dom'
import { auth } from '../../Config/Config'
// import CardContact from '../../Components/CardContact/CardContact'

const Home = ({ user }) => {

    const history = useHistory();

    useEffect(() => {
        // forcing user to signup
        auth.onAuthStateChanged(user => {
            if (!user) {
                history.push('/login');
            }
        })
    })

    return (
        <div className='wrapper'>
            <Navbar user={user} />
            {/* <CardContact/> */}
        </div>
    )
}

export default Home;