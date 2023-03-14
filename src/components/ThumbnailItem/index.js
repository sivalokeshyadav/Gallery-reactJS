// Write your code here.
import {Component} from 'react'

import './index.css'

class ThumbnailItem extends Component {
  renderThumbnails = () => {
    const {imagesList, onClickImageId, selectImgId} = this.props

    return imagesList.map(eachItem => {
      const {thumbnailUrl, thumbnailAltText, id} = eachItem

      const onClickThumbnail = () => {
        onClickImageId(id)
      }

      const buttonName = id === selectImgId ? 'selected-list-item' : 'list-item'

      return (
        <li key={id}>
          <button
            type="button"
            className={buttonName}
            onClick={onClickThumbnail}
          >
            <img
              src={thumbnailUrl}
              className="thumbnail-image"
              alt={thumbnailAltText}
            />
          </button>
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading">Nature Photography</h1>

        <p className="description">Nature Photography by Rahul</p>

        <ul className="thumbnails-list-container">{this.renderThumbnails()}</ul>
      </div>
    )
  }
}

export default ThumbnailItem
