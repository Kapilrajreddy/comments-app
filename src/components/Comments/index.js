import {Component} from 'react'
import {v4} from 'uuid'

import CommentItem from '../CommentItem'

import './index.css'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentList: [],
  }

  nameChange = e => {
    this.setState({nameInput: e.target.value})
  }

  commentChange = e => {
    this.setState({commentInput: e.target.value})
  }

  addComment = e => {
    e.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  likedComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    })
  }

  deleteComment = id => {
    const {commentList} = this.state
    this.setState({
      commentList: commentList.filter(eachComment => {
        if (eachComment.id !== id) {
          return eachComment
        }
        return null
      }),
    })
  }

  render() {
    const {commentList, nameInput, commentInput} = this.state
    const commentListLength = commentList.length
    return (
      <div className="comments-app-main-container">
        <div className="comments-app-sub-container">
          <h1 className="comments-main-heading">Comments</h1>
          <div className="comments-top-container">
            <form
              className="comments-app-left-container"
              onSubmit={this.addComment}
            >
              <p className="comments-app-sub-heading">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                placeholder="Your Name"
                className="comments-app-input"
                onChange={this.nameChange}
                value={nameInput}
              />
              <textarea
                rows="6"
                placeholder="Your Comment"
                className="comments-app-textarea"
                onChange={this.commentChange}
                value={commentInput}
              />
              <button type="submit" className="comments-app-button">
                Add Comment
              </button>
            </form>

            <img
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
              className="image"
            />
          </div>
          <hr className="comments-app-horizontal-line" />
          <div>
            <p className="comment-list-heading">
              <span className="comment-list-length">{commentListLength}</span>
              comments
            </p>
          </div>
          <ul className="comment-list-main-container">
            {commentList.map(eachComment => (
              <CommentItem
                eachComment={eachComment}
                commentListLength={commentListLength}
                likedComment={this.likedComment}
                deleteComment={this.deleteComment}
                key={eachComment.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Comments
/*
class Comments extends Component {
  state = {
    nameInput: '',
    commentInput: '',
    commentsList: [],
  }

  deleteComment = commentId => {
    const {commentsList} = this.state

    this.setState({
      commentsList: commentsList.filter(comment => comment.id !== commentId),
    })
  }

  toggleIsLiked = id => {
    this.setState(prevState => ({
      commentsList: prevState.commentsList.map(eachComment => {
        if (id === eachComment.id) {
          return {...eachComment, isLiked: !eachComment.isLiked}
        }
        return eachComment
      }),
    }))
  }

  renderCommentsList = () => {
    const {commentsList} = this.state

    return commentsList.map(eachComment => (
      <CommentItem
        key={eachComment.id}
        commentDetails={eachComment}
        toggleIsLiked={this.toggleIsLiked}
        deleteComment={this.deleteComment}
      />
    ))
  }

  onAddComment = event => {
    event.preventDefault()
    const {nameInput, commentInput} = this.state
    const initialBackgroundColorClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`
    const newComment = {
      id: v4(),
      name: nameInput,
      comment: commentInput,
      date: new Date(),
      isLiked: false,
      initialClassName: initialBackgroundColorClassName,
    }

    this.setState(prevState => ({
      commentsList: [...prevState.commentsList, newComment],
      nameInput: '',
      commentInput: '',
    }))
  }

  onChangeCommentInput = event => {
    this.setState({
      commentInput: event.target.value,
    })
  }

  onChangeNameInput = event => {
    this.setState({
      nameInput: event.target.value,
    })
  }

  render() {
    const {nameInput, commentInput, commentsList} = this.state

    return (
      <div className="app-container">
        <div className="comments-container">
          <h1 className="app-heading">Comments</h1>
          <div className="comments-inputs">
            <form className="form" onSubmit={this.onAddComment}>
              <p className="form-description">
                Say something about 4.0 Technologies
              </p>
              <input
                type="text"
                className="name-input"
                placeholder="Your Name"
                value={nameInput}
                onChange={this.onChangeNameInput}
              />
              <textarea
                placeholder="Your Comment"
                className="comment-input"
                value={commentInput}
                onChange={this.onChangeCommentInput}
                rows="6"
              />
              <button type="submit" className="add-button">
                Add Comment
              </button>
            </form>
            <img
              className="image"
              src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png"
              alt="comments"
            />
          </div>
          <hr className="line" />
          <p className="heading">
            <span className="comments-count">{commentsList.length}</span>
            Comments
          </p>
          <ul className="comments-list">{this.renderCommentsList()}</ul>
        </div>
      </div>
    )
  }
}

export default Comments
*/
