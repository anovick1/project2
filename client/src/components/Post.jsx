import React from 'react'
import { useNavigate } from 'react-router-dom'

const Post = (props) => {
  let navigate = useNavigate()

  const showPost = (user) => {
    navigate(`${user._id}`)
  }
  const showPost1 = (user) => {
    navigate(`/home/${user}`)
  }

  return (
    <div className="newsfeed">
      {props.posts.map((post) => (
        <div key={post.title}>
          <div className="post">
            {props.users
              .filter((u) => u._id === post.user)
              .map((user) => (
                <div key={user.username} className="post-info">
                  <div className="pfp-name">
                    <img src={user.pfp} alt="pfp" />
                    <h2 className="post-name">{user.name}</h2>
                  </div>
                  <h3 onClick={() => showPost(user)} className="post-username">
                    @{user.username}
                  </h3>
                  <p className="post-date">{post.date}</p>
                </div>
              ))}
            <h2>{post.title}</h2>
            <div className="comment-pic-likes">
              <img src={post.image} alt="post-pic" />
              <div className="likes">
                <div className="post-like">👍 {post.likes}</div>
                <div className="post-dislike">👎 {post.dislikes}</div>
              </div>
            </div>
            <div className="comments">
              {props.comments
                .filter((c) => c.post === post._id)
                .map((comment) => (
                  <div className="comment" key={comment.text}>
                    <div className="comment-pfp">
                      <img src={comment.pfp} alt="commenter-pfp" />
                    </div>
                    <div
                      onClick={() => showPost1(comment.user)}
                      className="comment-username"
                    >
                      {comment.username}:{' '}
                    </div>
                    <div className="comment-text">{comment.text}</div>
                    <div className="comment-likes"> 👍{comment.likes}</div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Post
