import React, {useEffect, useState} from 'react';
import CommentInput from './CommentInput';
import './styles/base.css'
import './styles/comment-app.css'

const COMMENT = '__comment-comments__';

const CommentApp = () => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const comments = JSON.parse(localStorage.getItem(COMMENT) || '[]');
        setComments(comments);
    }, []);

    useEffect(() => {
        localStorage.setItem(COMMENT, JSON.stringify(comments));
    }, [comments]);

    const handleAddComment = (comment) => { // to add comment
        setComments([comment, ...comments]);
    };

    return (
        <div className="comment-app-wrap border">
            <CommentInput onAddComment={handleAddComment}/>
        </div>
    );

}
export default CommentApp;
