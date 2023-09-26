// Write your code here
import {formatDistanceToNow} from 'date-fns'

import './index.css'

const CommentItem = props => {
  const {eachComment, likedComment, deleteComment} = props
  const {id, name, comment, date, isLiked, initialClassName} = eachComment

  const postedTime = formatDistanceToNow(date)

  const initial = name[0].toUpperCase()

  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'

  const likedText = isLiked ? 'comment-item-like' : 'comment-item-dislike'

  const onLike = () => {
    likedComment(id)
  }

  const onDelete = () => {
    deleteComment(id)
  }

  return (
    <li className="comment-item-main-container" key={id}>
      <div className="comment-item-sub-container">
        <p className={initialClassName}>{initial}</p>
        <div className="comment-item-top-container">
          <div className="comment-item-name-time-container">
            <p className="comment-item-name">{name}</p>
            <p className="comment-item-time">{postedTime} ago</p>
          </div>
          <p className="comment-item-comment">{comment}</p>
        </div>
      </div>
      <div className="comment-item-like-delete-container">
        <div className="comment-item-like-container">
          <img src={likeImageUrl} alt="like" />
          <button type="button" className={likedText} onClick={onLike}>
            Like
          </button>
        </div>
        <button
          data-testid="delete"
          onClick={onDelete}
          type="button"
          className="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="line" />
    </li>
  )
}

export default CommentItem
/*
const CommentItem = props => {
  const {commentDetails} = props
  const {id, name, comment, isLiked, initialClassName, date} = commentDetails
  const initial = name ? name[0].toUpperCase() : ''
  const likeTextClassName = isLiked ? 'button active' : 'button'
  const likeImageUrl = isLiked
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const postedTime = formatDistanceToNow(date)

  const onClickLike = () => {
    const {toggleIsLiked} = props
    toggleIsLiked(id)
  }

  const onDeleteComment = () => {
    const {deleteComment} = props
    deleteComment(id)
  }

  return (
    <li className="comment-item">
      <div className="comment-container">
        <div className={initialClassName}>
          <p className="initial">{initial}</p>
        </div>
        <div>
          <div className="username-time-container">
            <p className="username">{name}</p>
            <p className="time">{postedTime} ago</p>
          </div>
          <p className="comment">{comment}</p>
        </div>
      </div>
      <div className="buttons-container">
        <div className="like-container">
          <img src={likeImageUrl} alt="like" className="like-image" />
          <button
            className={likeTextClassName}
            type="button"
            onClick={onClickLike}
          >
            Like
          </button>
        </div>
        <button
          className="button"
          type="button"
          onClick={onDeleteComment}
          data-testid="delete"
        >
          <img
            className="delete"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr className="comment-line" />
    </li>
  )
}

export default CommentItem
*/
