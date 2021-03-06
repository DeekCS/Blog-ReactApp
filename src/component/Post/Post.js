import React, {Component} from 'react';
// import Comment from "../Comment/Comment";
import CommentApp from "../Comment/CommentApp";
import './post.css'

class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            act: 0,
            index: '',
            description: '',
            name: '',
            likes: 0,
            datas: []
        }
    }

    handleChange = (e) => {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    like = () => {
        if (this.state.likes === 0) {
            this.setState({
                likes: this.state.likes + 1
            })
        } else {
            alert("You have liked this post")
        }

    }


    // for pushing data to array
    handleSubmit = (e) => {
        e.preventDefault();
        // if user is not logged in cannot post
        let user = JSON.parse(localStorage.getItem('users'));
        if(user === null) {
            alert("You are not logged in, Please Login To Post")
            this.props.history.push('/register')
        }else {
            const {act, index, description, name, title, likes} = this.state;
            const data = {act, index, description, name, title, likes};
            this.setState({
                datas: [...this.state.datas, data],
            })
            this.state.datas.push({act, index, description, name, title, likes})
            localStorage.setItem('data', JSON.stringify(this.state.datas))
            e.target.reset();
            localStorage.setItem('data', JSON.stringify(this.state.datas))
        }

    }

    //make the posts still visible after refresh

    componentDidMount() {
        const data = JSON.parse(localStorage.getItem('data'));
        if (data) {
            this.setState({
                datas: data
            })
        }
    }

    // delete the post after clicking delete button
    deletePost = (index) => {
        const data = JSON.parse(localStorage.getItem('data'));
        data.splice(index, 1);
        this.setState({
            datas: data
        })
        localStorage.setItem('data', JSON.stringify(data))
    }

    //render user name if user is logged in
    renderName = () => {
        //get the user name from local storage
        const user = JSON.parse(localStorage.getItem('users'));
        if (user) {
            return (
                <div className="user-name">
                    <h3>{user[0].username}</h3>
                </div>
            )
        }else {
            return (
                <div className="user-name">
                    <h3>Guest</h3>
                </div>
            )
        }
    }


    render() {
        //get user name from local storage
        // const user = JSON.parse(localStorage.getItem('users'));
        // console.log(user[0].username)

        return (
            <div className="container">
                <h1 className="text-center">Posts</h1>
                <h2>{this.renderName}</h2>
                <form className="form" onSubmit={this.handleSubmit}>
                    <h2 className="heading ">Add a Post</h2>
                    <input type="text" placeholder="Enter your post title" name="title" onChange={this.handleChange}
                           required/> <br/>
                    <input type="text" name="name" placeholder="Enter Your Name" onChange={this.handleChange} required/>
                    <br/>
                    <textarea name="description" placeholder="Your Post Here" onChange={this.handleChange} required/>
                    <br/>


                    <button type="submit">Submit</button>
                </form>
                <ul>
                    {(this.state.datas.length > 0) ? this.state.datas.map((data, index) => {
                            return (
                                <div className="post" key={index}>
                                    <table>
                                        <tbody>
                                        <tr>
                                            <td>
                                                <p>title: {data.title}</p>
                                                <p>content: {data.description}</p>
                                                <p>Author: {data.name}</p>
                                                <hr/>
                                            </td>
                                            <td>
                                                <i onClick={this.like} className="far fa-thumbs-up">{this.state.likes}</i>
                                                <i onClick={this.deletePost} className="far fa-trash-alt"/>
                                            </td>


                                        </tr>

                                        <tr>
                                            <td>
                                                <p>Add Comment:</p>
                                                <CommentApp className="comment" index={index}/>
                                            </td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            )
                        }
                    ) : <p>No Posts Right Now, Add new post to show !</p>}
                </ul>

            </div>
        );
    }
}

export default Post;