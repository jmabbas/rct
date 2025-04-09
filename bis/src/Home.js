import Feed from "./Feed"

const Home = ({posts}) => {
  return (
    <main className='Home'>
      {posts.length ? (
        <Feed posts={posts}/>
      ) : (
        <p>
          <br/>
          <br/>
          No Posts to display
          <br/>
          <br/>
        </p>
      )
      }
    </main>
  )
}

export default Home