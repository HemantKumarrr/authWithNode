import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

const Login = () => {
  const [user, setUser]= useState({ email: '', password: '' });
  const [isError, setIsError] = useState('')
  const navigate = useNavigate();

  const handleLogin = async (e)=> {
    e.preventDefault();
    try {
      let loginUser = await fetch('http://localhost:5000/login', {
        method: 'POST',
        body: JSON.stringify(user),
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include'
      });
      const data = await loginUser.json()
      if(data.user) {
        localStorage.setItem('user', JSON.stringify(data) )
        console.log("user logged in successfully");
        navigate('/');
      } else {
        setIsError(data)
      }
    } catch(err) {
      console.log(err)
    }
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen">
          <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Login</h2>
            {
              isError &&
            <p className="w-ful px-5 py-1 text-white bg-red-600 rounded-md" >{isError}</p>
            }
            <form className="flex flex-col">
              <input
                type="email"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Email address"
                onChange={(e)=> setUser({ ...user, email: e.target.value })}
                value={user.email}
              />
              <input
                type="password"
                className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
                placeholder="Password"
                onChange={(e)=> setUser({ ...user, password:e.target.value })}
                value={user.password}
              />
              <div className="flex items-center justify-between flex-wrap">
                <label
                  htmlFor="remember-me"
                  className="text-sm text-gray-900 cursor-pointer"
                >
                  <input type="checkbox" id="remember-me" className="mr-2" />
                  Remember me
                </label>
                <a
                  href="#"
                  className="text-sm text-blue-500 hover:underline mb-0.5"
                >
                  Forgot password?
                </a>
                <p className="text-gray-900 mt-4">
                  {" "}
                  Don't have an account?{" "}
                  <Link
                    to='/signup'
                    className="text-sm text-blue-500 -200 hover:underline mt-4"
                  >
                    Signup
                  </Link>
                </p>
              </div>
              <button
                type="submit"
                className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
                onClick={handleLogin}
              >
                Login
              </button>
            </form>
          </div>
        </div>
    </div>
  )
}

export default Login
