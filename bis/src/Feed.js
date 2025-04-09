import Post from "./Post"

const feed =({posts}) => {
  return (
    <>
        {posts.map(post=>(
            <Post key={post.id} post={post} />
        ))}
    </>
  )
}

export default feed