import React, {useState, useEffect} from 'react';
// import Comment from "../Comment/Comment";
import CommentApp from "../Comment/CommentApp";
import './post.css'


const Post = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [author, setAuthor] = useState('');
    const [likes, setLikes] = useState(0);
    const [datas, setDatas] = useState([]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        if (name === 'title') {
            setTitle(value);
        } else if (name === 'description') {
            setDescription(value);
        } else if (name === 'name') {
            setAuthor(value);
        }
    }

    //handle like on click the post will increase by 1
    const handleLikes = () => {
       if(likes === 0){
           setLikes(likes + 1);
       }
       else {
           setLikes(likes - 1);
       }
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (title === '' || description === '') {
            alert('Please fill all the fields');
            return false;
        }
        let data = {
            title, description, name: '', likes: 0, comments: []
        }
        localStorage.setItem('data', JSON.stringify(datas));
        setDatas([...datas, data]);
        console.log(datas);


        setTitle('');
        setDescription('');
        setAuthor('');
        console.log(data)
    }

    useEffect(() => {
        let data = localStorage.getItem('data');
        if (data !== null) {
            setDatas(JSON.parse(data));
        }
    }, [])

    //delete the post after clicking delete button

    const handleDelete = (index) => {
        let data = JSON.parse(localStorage.getItem('data'));
        data.splice(index, 1);
        localStorage.setItem('data', JSON.stringify(data));
        setDatas(data);
    }

    return (<div className="container">
            <h1 className="text-center">Posts</h1>
            {/*<h2>{this.renderName}</h2>*/}
            <form className="form" onSubmit={handleSubmit}>
                <h2 className="heading ">Add a Post</h2>
                <input type="text" placeholder="Enter your post title" name="title" onChange={handleChange}
                       required/> <br/>
                <input type="text" name="name" placeholder="Enter Your Name" onChange={handleChange} required/>
                <br/>
                <textarea name="description" placeholder="Your Post Here" onChange={handleChange} required/>
                <br/>

                <button type="submit">Submit</button>
            </form>
            <ul>
                {(datas.length > 0) ? datas.map((data, index) => {
                    console.log(data.name + 'name');
                    return (<div className="container" key={index}>
                            <table className="">
                                <tbody>
                                <tr>
                                    <td>
                                        <h2 className="post-title">Title:</h2>
                                        <p className="post-content">{data.title}</p> <br/>
                                        <h2 className="post-title">Description:</h2>
                                        <p className="post-content">{data.description}</p> <br/>
                                        {/*<p>content: {data.description}</p>*/}
                                        {/*<p>Author: {data.name }</p>*/}
                                        <hr/>
                                    </td>
                                    <td>
                                        <i id="like" onClick={handleLikes}  name="likes"
                                           className="far fa-thumbs-up icon-post">{likes}</i>
                                        <i onClick={handleDelete} className="far fa-trash-alt icon-post"/>
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
                        </div>)
                }) : <p>No Posts Right Now, Add new post to show !</p>}
            </ul>

        </div>);
}
export default Post;