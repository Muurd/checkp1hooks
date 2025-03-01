import React from 'react'
import Search from '../components/Moviesearch'

function Homepage() {
    return (
        <div style={{ minHeight: "100vh", backgroundImage: "url('./assets/homebg.jpg')", backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            <Search />
        </div>
    )
}

export default Homepage
