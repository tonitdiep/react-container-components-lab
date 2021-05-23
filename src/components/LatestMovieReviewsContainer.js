import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends Component {
    constructor() {
        super();
        this.state = {
            reviews: []
        };
    }


    componentDidMount() {
        console.log('inside component DID MOUNT')
        fetch(URL)
            .then(res => res.json())
            .then(response => this.setState({ reviews: response.results }) )

    }

    render() {
        // console.log("inside render")
        return(
            <div className="latest-movie-reviews">
            <h1>Latest Reviews</h1>
            
            <MovieReviews reviews={this.state.reviews}/>
        </div>
           ); 
    }
}

export default LatestMovieReviewsContainer;