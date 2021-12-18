import React, {useEffect, useState} from 'react';

const USERNAME = '__comment-app-username__';
const COMMENT = '__comment-comments__';


const CommentInput = () => {
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const savedUsername = localStorage.getItem(USERNAME);
        if (savedUsername) {
            setUsername(savedUsername);
            console.log(savedUsername + ' is saved');
        }

    }, []);


    useEffect(() => {
        const savedComments = localStorage.getItem(COMMENT);
        if (savedComments) {
            setComments(JSON.parse(savedComments));
            console.log(JSON.parse(savedComments) + 'comment is saved');
        }


    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            username,
            comment,
            commentTime: new Date().toLocaleString()
        };
        if (!username) {
            alert("Enter username");
            return false;
        }
        if (!comment) {
            alert("Enter Comment");
            return false;
        }
        setComments([...comments, newComment]);
        setComment('');
        localStorage.setItem(COMMENT, JSON.stringify(comments));
    };


    const handleDelete = (index) => {
        const newComments = [...comments];
        newComments.splice(index, 1);
        setComments(newComments);
        localStorage.setItem(COMMENT, JSON.stringify(newComments));
    };


    const handleChange = (e) => {
        const {value, name} = e.target;
        if (name === 'username') {
            setUsername(value);
            localStorage.setItem(USERNAME, value);
        } else {
            setComment(value);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        name="username"
                        id="username"
                        value={username}
                        placeholder={'Enter username'}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        name="comment"
                        id="comment"
                        value={comment}
                        placeholder="Enter your comment"
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            {
                comments.map((comment, index) => {
                    return (
                        <div key={index}>
                            <span className="post-div">{comment.username} :</span> <br/>
                            <span className="post-div">{comment.comment}</span> <br/>
                            <span className='comment-time fr'>{comment.commentTime}</span><br/>
                            <button onClick={() => handleDelete(index)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    );

};

export default CommentInput;

