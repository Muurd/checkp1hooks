import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

function Trailerpage({ movie }) {
    const { id } = useParams();
    const Foundmovie = movie.find((e) => e.id === parseInt(id))
    let navigate = useNavigate();
    const handleclick = () => {
        navigate('/home')
    }
    return (
        <div>
            <div className='Navbar' style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
                <h2 style={{ textTransform: "uppercase", color: "red" }}>Netflex</h2>
                <button onClick={handleclick} style={{ width: "80px", height:"40px" ,backgroundColor: "red", border: "2px solid red", borderRadius: "12px", color:"white"}}>Back</button>
            </div>
            <div className='bg' style={{ backgroundImage: "url('/assets/homebg.jpg')", backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "500px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                <h1 style={{ fontWeight: "bold", color: "whitesmoke" }}>Watch {Foundmovie.title} Trailer</h1>
                <br />
                <p style={{ color: "white" }}>{Foundmovie.description}</p>
                <button style={{ width: "80px", backgroundColor: "red", border: "2px solid red", borderRadius: "12px" }}><i style={{ color: "white" }} class="fa-solid fa-arrow-down"></i></button>
            </div>
            <div style={{ height: "400px", width: "100%", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "20px" }}>
                <iframe style={{ height: "400px", width: "800px", borderRadius: "12px" }} src={Foundmovie.ytTrailerLink}></iframe>
                <p>{Foundmovie.title} Trailer</p>
                <button onClick={handleclick} style={{ width: "80px", height:"60px" ,backgroundColor: "red", border: "2px solid red", borderRadius: "12px", color:"white"}}>Home</button>
            </div>
            <div style={{ backgroundColor: "black", width: "100%", height: "75px", display: "flex", justifyContent: "center", alignItems: "center", gap:"50px"}}>
                <i style={{color:"whitesmoke"}} class="fa-brands fa-instagram"></i>
                <i style={{color:"whitesmoke"}} class="fa-brands fa-facebook"></i>
                <i style={{color:"whitesmoke"}} class="fa-brands fa-twitter"></i>
            </div>
        </div>
    )
}

export default Trailerpage
