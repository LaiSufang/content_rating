import React, { Component } from "react";
import "./ContentRating.css";

class ContentRating extends Component {
  constructor() {
    super();
    // Create this.state object and initialize the values of likes and dislikes to 0 for the initial state. then Create two event handlers for the like and dislike button
    this.state = {
      likes: 0,
      dislikes: 0,
      totalRatings: 0,
      handleLike: () => {
        this.setState((previousState) => ({
          likes: previousState.likes + 1,
          totalRatings: previousState.totalRatings + 1,
        }));
      },
      handleDislike: () => {
        this.setState((previousState) => ({
          dislikes: previousState.dislikes + 1,
          totalRatings: previousState.totalRatings + 1,
        }));
      },
    };
  }
  render() {
    return (
      <>
        <div className="content-rating">
          <p>Life is like a box of chocolate!</p>
          <div className="rating-buttons">
            <button className="like-button" onClick={this.state.handleLike}>
              Like ({this.state.likes})
            </button>
            <button
              className="dislike-button"
              onClick={this.state.handleDislike}
            >
              Dislike ({this.state.dislikes})
            </button>
            <p>Total Ratings: {this.state.totalRatings}</p>
          </div>
        </div>
      </>
    );
  }
}

export default ContentRating;
