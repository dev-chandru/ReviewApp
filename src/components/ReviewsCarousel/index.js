// Write your code here
import {Component} from 'react'

import './index.css'

class ReviewsCarousel extends Component {
  state = {
    count: 0,
  }

  onClickLeftArrow = () => {
    const {count} = this.state

    if (count > 0) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  onClickRightArrow = () => {
    const {count} = this.state
    const {reviewsList} = this.props

    if (count < reviewsList.length - 1) {
      this.setState(prevState => ({count: prevState.count + 1}))
    }
  }

  render() {
    const {count} = this.state
    const {reviewsList} = this.props

    return (
      <div className="main-bg-container">
        <h1 className="main-heading">Reviews</h1>
        <div className="main-card-container">
          <button
            type="button"
            className="left-arrow-button"
            onClick={this.onClickLeftArrow}
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
              alt="left arrow"
              className="arrows"
              data-testid="leftArrow"
            />
          </button>
          <div>
            <div className="image-container">
              <img
                src={reviewsList[count].imgUrl}
                alt={reviewsList[count].username}
                className="profile-image"
              />
            </div>
            <h1 className="user-name">{reviewsList[count].username}</h1>
            <p className="company-name">{reviewsList[count].companyName}</p>
            <p className="review-description">
              {reviewsList[count].description}
            </p>
          </div>
          <button
            type="button"
            className="right-arrow-button"
            onClick={this.onClickRightArrow}
            data-testid="rightArrow"
          >
            <img
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
              alt="right arrow"
              className="arrows"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
