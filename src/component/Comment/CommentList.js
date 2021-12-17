import React, { Component } from 'react';
import Comment from './Comment';


const CommentList = ({comments, onDeleteComment}) => {
  return (
    <div className="commentList">
      {comments.map(comment =>
        <Comment
          key={comment.id}
          id={comment.id}
          comment={comment}
          author={comment.author}
          onDeleteComment={onDeleteComment}
          text={comment.text}
        />
      )}
    </div>
  );
};


// };
// class CommentList extends Component {
//     static defaultProps = {
//         comments: []
//     }
//
//     constructor() {
//         super();
//         this.handleDeleteComment = this.handleDeleteComment.bind(this);
//     }
//
//     handleDeleteComment(index) {
//         if (this.props.onDeleteComment) this.props.onDeleteComment(index);
//     }
//
//     render() {
//         const { comments } = this.props;
//         return (
//             <ul className='comment-list-wrap border'>
//                 {comments.map((comment, index) =>
//                     <Comment
//                         key={index}
//                         index={index}
//                         comment={comment}
//                         onDeleteComment={this.handleDeleteComment.bind(this)} />
//                 )}
//             </ul>
//         )
//     }
// }

export default CommentList;