// Code MovieReviews Here
import React from 'react'
const Review = ({
    headline,
    byline,
    link,
    summary_short
}) => {
    return(
        <div 
        className="review">
        <header>HEADER: Headline<br/>
            <a className="review-link" href={link.url} >{headline}</a><br/>
            <span className="author">Reviewed By: {byline}</span>
            {/* SUMMARY SHORT: {summary_short} */}
            {/* <blockquote>{summary_short}</blockquote> */}
      </header>
        <blockquote>SUMMARY DESCRIPTION: {summary_short}</blockquote>
        </div>
    )
}

const MovieReviews = ({ reviews }) =>  <div className="review-list">{reviews.map(Review)}</div>;
    // console.log(props)
    // (headline,
    // byline,
    // link
    // summary_short)
    // return (

    //     <div className="review-list">
    //         title: {props.title}
    //     </div>
    // )
    MovieReviews.defaultProps = {
        reviews: []
    };
export default MovieReviews
