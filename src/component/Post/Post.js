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

    //make the likes visible after refresh

    render() {
        return (
            <div className="">
                <h1>Posts</h1>

                <form className="form" onSubmit={this.handleSubmit}>
                    <h2 className="heading">Add a Post</h2>
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
                                                <i onClick={this.deletePost} className="far fa-trash-alt"></i>
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