import { Link, useParams } from "react-router-dom"


const Postpage = ({posts, handleDelete,handleEdit}) => {
    const {id} = useParams();
    const post = posts.find(post=> (post.id).toString()=== id);

    return (
        <main className="PostPage">
            <article className="post">
                {post &&
                    <>
                        <h2>{post.title}</h2>
                        <p className="postDate">{post.datetime}</p>
                        <p className="postBody">{post.body}</p>
                        <Link to={`/edit/${post.id}`}>
                            <button onClick={()=>handleEdit(post.id)}>
                                Edit Post
                            </button>
                        </Link>
                        <button onClick={()=>handleDelete(post.id)}>
                            Delete Post
                        </button>
                    </>
                }

                {!post &&
                    <>
                        Post not Found
                    </>
                }
            </article>
        </main>    
    )
}

export default Postpage