import React, { Component } from 'react';

class Comment extends Component {
    constructor() {
        super();
        this.state = {
            commentTime: ''
        }

        this.handleDeleteComment =  this.handleDeleteComment.bind(this);
    }

    componentWillMount() {
        this._updateCommentTime();
        this._timer = setInterval(this._updateCommentTime.bind(this), 5000);
    }

    componentWillUnmount() {
        clearInterval(this._timer);
    }

    _updateCommentTime() {
        const { createTime } = this.props.comment
        const duration = (+Date.now() - createTime) / 1000

        this.setState({
            commentTime:
                duration > 3600
                    ? `${Math.round(duration / 3600)} hour ago`
                    : duration > 60
                        ? `${Math.round(duration / 60)}minutes ago`
                        : `${Math.round(Math.max(duration, 1))}Seconds ago`,
        });
    }

    _getCurrentComment(comment) {
        return comment
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;')
            .replace(/`([\S\s]+?)`/g, '<code>$1</code>')
    }

    handleDeleteComment() {
        if (!this.props.onDeleteComment) return false;

        const index = this.props.index;
        this.props.onDeleteComment(index);
    }

    render() {
        const { username, comment } = this.props.comment
        return (
            <li className='comment-wrap clearfix'>
                <span className='delete-btn fr' onClick={this.handleDeleteComment}>Delete</span>
                <div className='username fl'>
                    <span>{username}</span>：
                </div>
                <div className='comment'>
                    <p dangerouslySetInnerHTML={{
                        __html: this._getCurrentComment(comment)
                    }} />
                </div>
                <span className='comment-time fr'>{this.state.commentTime}</span>
            </li>
        )
    }
}

export default Comment;