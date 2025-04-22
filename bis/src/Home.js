import { useContext } from "react"
import Feed from "./Feed"
import DataContext from "./context/DataContext"

const Home = () => {
  const {searchResults} = useContext(DataContext)
  return (
    <main className='Home'>
      {searchResults.length ? (
        <Feed posts={searchResults}/>
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