import React, { Component } from 'react';

import 'css/movie.css';

export default class Movie extends Component {

    renderPosterImage = () => {
        const { movie } = this.props;

        if (movie.Poster !== "N/A") {
            return (
                <div className="movie-img-container">
                    <img className="movie-img" src={movie.Poster} alt={"Poster image for " + movie.Title}/>
                </div>
            );
        } else {
            return (
                <div className="text-center">
                    <p>No Image Available</p>
                </div>
            );
        }
    }

    render() {
        const { movie } = this.props;
        return (
            <div className="col-3 align-self-start">
                <div className="movie-container">
                    {this.renderPosterImage()}
                    <div className="movie-content text-center">
                        <h5>
                            {movie.Title}
                        </h5>
                        <p>
                            {movie.Type} ({movie.Year})
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}