import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase/firebaseConfig'
// import CardContact from '../../Components/CardContact/CardContact'

const Home = ({ user }) => {
    const navigate = useNavigate();

    useEffect(() => {
        // forcing user to signup
        onAuthStateChanged(auth, (user) => {
            if (!user) {
                navigate('/login');
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