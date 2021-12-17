import React, { useEffect,useState } from 'react';

const USERNAME = '__comment-app-username__';


const CommentInput = ({onAddComment}) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        const newComment = {
            username,
            comment,
            date: new Date().toLocaleString()
        };

        setComments([...comments, newComment]);
        setComment('');

        onAddComment(newComment);



    };

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
        localStorage.setItem(USERNAME, e.target.value);
        console.log(e.target.value);
    };

    const handleCommentChange = (e) => {
        setComment(e.target.value);
    };

    const handleComment = (e) => {
        if (!username) {
            alert('Please enter your name');
            return false;
        }
        if (!comment) {
            alert('Please enter your comment');
            return false;
        }
        //
    }

    return (
        <div className="comment-input">
            <form onSubmit={handleSubmit}>
                <div className="comment-input__field">
                    <label htmlFor="username">Username</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </div>
                <div className="comment-input__field">
                    <label htmlFor="comment">Comment</label>
                    <textarea
                        id="comment"
                        name="comment"
                        value={comment}
                        onChange={handleCommentChange}
                    />
                </div>
                <div className="comment-input__field">
                    <button type="submit">Add comment</button>
                </div>
            </form>
        </div>
    );



}
// class CommentInput extends Component {
//     constructor() {
//         super();
//         this.state = {
//             username: '',
//             comment: ''
//         };
//     }
//
//     componentWillMount() {
//         this._loadUsername();
//     }
//
//     componentDidMount() {
//         if (this.state.username) this.textarea.focus();
//     }
//
//     _saveUsername() {
//         localStorage.setItem(USERNAME, this.state.username);
//     }
//
//     _loadUsername() {
//         const username = localStorage.getItem(USERNAME);
//         if (username) this.setState({ username });
//     }
//
//     handleUsernameChange = (evt) => {
//         this.setState({
//             username: evt.target.value
//         });
//     }
//
//     handleUsernameBlur = () => {
//         this._saveUsername();
//     }
//
//     handleCommentChange = (evt) => {
//         this.setState({
//             comment: evt.target.value
//         });
//     }
//
//     handleComment = () => {
//         const { username, comment } = this.state;
//         if (!username) {
//             alert("please enter user name");
//             return false;
//         }
//         if (!comment) {
//             alert("Please enter the content of the comment");
//             this.textarea.focus();
//             return false;
//         }
//         this.props.onAddComment({
//             username,
//             comment,
//             createTime: +new Date()
//         });
//
//         this.setState({ comment: '' });
//     }
//
//     render() {
//         const { username, comment } = this.state;
//
//         return (
//             <div className="comment-input-wrap border">
//                 <div className="username">
//                     <label>username:</label>
//                     <input
//                         type="text"
//                         className="border"
//                         value={username}
//                         onChange={this.handleUsernameChange}
//                         onBlur={this.handleUsernameBlur}
//                     />
//                 </div>
//                 <div className="comment">
//                     <label>Enter comment</label>
//                     <textarea
//                         className="border btn btn-normal pull-right"
//                         ref={(textarea) => (this.textarea = textarea)}
//                         value={comment}
//                         onChange={this.handleCommentChange}
//                     />
//                 </div>
//                 <div className="release clearfix">
//                     <button className="" onClick={this.handleComment}>add</button>
//                 </div>
//             </div>
//         );
//     }
// }
/*


 */
export default CommentInput;
