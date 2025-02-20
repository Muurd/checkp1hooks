import React, { useState } from 'react'
import Moviecard from './Moviecard'
import movies from './Movielist'

function Search() {

    let [SearchMovie, setSearchMovie] = useState('')
    let [SearchRating, setSearchRating] = useState('')
    let [movielist, Setmovielist] = useState([])
    let [SearchImage, setSearchImage] = useState('')
    let [SearchDescirption, setSearchDescription] = useState('')

    let [addSearchMovie, setAddSearchMovie] = useState('')
    let [addSearchRating, setAddSearchRating] = useState('')


    let addMovie = () => {

        if (addSearchMovie && addSearchRating && SearchDescirption !== '') {
            const isMovieExists = [...movies, ...movielist].some(movie => movie.title.toLowerCase().trim() === addSearchMovie.toLowerCase().trim())
            if (isMovieExists) {
                alert('Error,this movie already exists')
            } else {
                Setmovielist([...movielist, { title: addSearchMovie, rating: addSearchRating, imgUrl: SearchImage, description: SearchDescirption }])
                setSearchMovie('')
                setSearchRating('')
                setSearchImage('')
            } 


        } else {
            alert('please fill the inputs...')
        }
    }

        const filteredMovies = [...movies, ...movielist].filter(i => {
            const filteredtitle = i.title.toLowerCase().includes(SearchMovie)
            const filteredRating = SearchRating ? parseFloat(i.rating) >= parseFloat(SearchRating) : true
            return filteredtitle && filteredRating
        })


        return (
            <div>
                <div className='Navbar' style={{ backgroundColor: "black", display: "flex", justifyContent: "space-between", padding: "10px", alignItems: "center" }}>
                    <div>
                        <h2 style={{ textTransform: "uppercase", color: "red" }}>Netflex</h2>
                    </div>
                    <div>
                        <label style={{ textTransform: "uppercase", color: "red", fontWeight: "bold" }}>Search </label>
                        <input value={SearchMovie} type='text' placeholder='Search movie' onChange={(e) => { setSearchMovie(e.target.value) }} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px" }}></input>
                        <label style={{ textTransform: "uppercase", color: "red", fontWeight: "bold" }}>Rating </label>
                        <input value={SearchRating} type='number' onChange={(y) => { setSearchRating(y.target.value) }} style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px" }}></input>
                    </div>
                </div>
                <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", padding: "50px" }}>
                    {filteredMovies.map((item, index) => (
                        <Moviecard key={index} movie={item} />
                    ))}

                </div>
                <div className='addsProduct' style={{ backgroundColor: "rgba(1,1,1,0.5)", height: "400px", display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <div className='ProductAttributes'>
                        <h1 style={{ color: "white" }}>Add a new movie</h1>
                        <label style={{ color: "white", padding: "20px" }}>Add Movie title:</label>
                        <input value={addSearchMovie} onChange={(e) => { setAddSearchMovie(e.target.value) }} type='text' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px" }}></input>
                        <br />
                        <label style={{ color: "white", padding: "20px" }}>Add Movie Description:</label>
                        <input value={SearchDescirption} onChange={(e) => { setSearchDescription(e.target.value) }} type='text' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px",height:'50px' }}></input>
                        <br />
                        <label style={{ color: "white", padding: "20px" }}>Add Movie Rating:</label>
                        <input value={addSearchRating} onChange={(e) => { setAddSearchRating(e.target.value) }} type='number' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px", width:'40px'}}></input>
                        <br />
                        <button onClick={addMovie} style={{ backgroundColor: "red", color: "white", border: "2px solid red", borderRadius: "2px" }}>Add</button>
                    </div>
                    <div>
                        <img src='./assets/addPicbg.jpg' height={'250px'} width={'180px'}></img>
                        <br />
                        <label style={{ color: "white" }}>Movie image</label>
                        <input value={SearchImage} onChange={(e) => { setSearchImage(e.target.value) }} type='text' style={{ backgroundColor: "rgba(255, 255, 255, 0.2)", border: "1px solid red", borderRadius: "8px" }}></input>

                    </div>
                </div>

            </div>

        )
    }

    export default Search
