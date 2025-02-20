import React from 'react'
import movies from './Movielist'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Moviecard({movie}) {
    return (
        
            
                <Card style={{ width: '12rem', backgroundColor:"transparent", border:"none"}}>
                    <Card.Img variant="top" src={movie.imgUrl}/>
                    <Card.Body>
                        <Card.Title style={{fontSize:"15px", color:"white", textTransform:"uppercase",fontWeight:"bold"}}>{movie.title}</Card.Title>
                        <Card.Text style={{fontSize:"14px", color:"white"}}>
                            {movie.description}
                        </Card.Text>
                        <Button variant="primary" style={{backgroundColor:"#222", border:"2px solid #222"}}>{movie.rating}</Button>
                    </Card.Body>
                </Card>
        
    )
}

export default Moviecard
