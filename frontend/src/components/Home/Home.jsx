import { Link } from "react-router-dom"


const Home = () => {

  return (
    <div className="text-white w-2/4 mx-auto py-16">
      <h1 className="text-center text-6xl p-2" >Welcome</h1>
      <p className="p-2 text-xl" >This is our website of printing dollars every second!</p>
      <div className="my-8 w-2/4 mx-auto text-white text-center">
        <Link to='cards' className="p-4 bg-yellow-600 rounded-full shadow-lg active:bg-yellow-400" >Show Cards</Link>
      </div>
    </div>
  )
}

export default Home
