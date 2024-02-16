import { Link, useNavigate } from "react-router-dom"

const Navbar = () => {
  const auth = localStorage.getItem('user');
  const navigate = useNavigate();
  
  const handleLogout = async ()=> {
    try {
      let data = await fetch('http://localhost:5000/logout', { credentials: 'include' });
      localStorage.clear();
      navigate('/signup')
      console.log(data);
    } catch(err) {
      console.error(err);
    }
  }
  

  return (
    <div className="w-full h-16 flex justify-between items-center text-white px-24" >
      <div className="text-3xl uppercase">
        Logo
      </div>
      <ul className="flex justify-between items-center w-2/6 text-xl" >
        <li><Link to='/' >Home</Link></li>
        {
          auth ?
          <>
            <p className="text-sm bg-green-400 text-green-900 font-semibold p-1 rounded-xl">{JSON.parse(auth).email}</p>
            <button className="bg-red-600 p-1 rounded-md text-md" onClick={handleLogout} >Log Out</button>
          </>
          :
          <>
            <li><Link to='/login' >Login</Link></li>
            <li><Link to='/signup' >Sign up</Link></li>
          </>
        }
      </ul>
    </div>
  )
}

export default Navbar
