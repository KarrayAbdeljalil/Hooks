import React from 'react'
import StarRating from './StarRating'

const MovieCard = ({card}) => {
    return (
        <div className="movie-card">
            <StarRating rating={card.rating}/>
            <img src={card.image} alt={card.image} />
            <h3>{card.name}</h3>
            <h3>{card.date}</h3>
            
        </div>
    )
}

export default MovieCard
