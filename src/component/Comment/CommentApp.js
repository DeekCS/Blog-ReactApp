import React, { Component } from 'react';
import CommentInput from './CommentInput';
import CommentList from './CommentList';
import './styles/base.css'
// import './styles/comment-app.css'
const COMMENT = '__comment-comments__';

class CommentApp extends Component {
    constructor() {
        super();
        this.state = {
            comments: []
        };

        this.handleAddComment = this.handleAddComment.bind(this);
        this.handleDeleteComment = this.handleDeleteComment.bind(this);
    }

    componentWillMount() {
        this._loadComments();
    }

    _loadComments() {
        const comments = localStorage.getItem(COMMENT);
        if (comments) {
            this.setState({
                comments: JSON.parse(comments)
            });
        }
    }

    _saveComment(comments) {
        localStorage.setItem(COMMENT, JSON.stringify(comments));
    }

    handleAddComment(newComment) {
        const comments = this.state.comments;

        comments.push(newComment);
        this.setState({ comments });
        this._saveComment(comments);
    }

    handleDeleteComment(index) {
        const comments = this.state.comments;
        comments.splice(index, 1);

        this.setState({ comments });
        this._saveComment(comments);
    }

    render() {
        return (
            <div className='comment-app-wrap border'>
                <CommentInput onAddComment={this.handleAddComment} />
                <CommentList comments={this.state.comments} onDeleteComment={this.handleDeleteComment} />
            </div>
        )
    }
}

export default CommentApp;
