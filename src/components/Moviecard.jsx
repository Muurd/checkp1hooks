import React from 'react'
import movies from './Movielist'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from 'react-router-dom';
function Moviecard({movie}) {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate(`/Trailer/${movie.id}`)
    }
    return (
        
            
                <Card onClick={handleclick} style={{ width: '12rem', backgroundColor:"transparent", border:"none", cursor:"pointer"}}>
                    <Card.Img variant="top" src={movie.imgUrl}/>
                    <Card.Body>
                        <Card.Title style={{fontSize:"15px", color:"white", textTransform:"uppercase",fontWeight:"bold"}}>{movie.title}</Card.Title>
                        <Card.Text style={{fontSize:"14px", color:"white"}}>
                            <button onClick={handleclick} style={{ width: "80px", height:"40px" ,backgroundColor: "red", border: "2px solid red", borderRadius: "12px", color:"white"}}>See Trailer</button>
                        </Card.Text>
                        <Button variant="primary" style={{backgroundColor:"#222", border:"2px solid #222"}}>{movie.rating}</Button>
                    </Card.Body>
                </Card>
        
    )
}

export default Moviecard
