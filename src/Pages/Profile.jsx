import React from "react";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"
import { useLocation, useNavigate } from "react-router-dom";
import { User, Mail, Lock, LogOut, ShoppingBag } from "lucide-react";

export default function Profile() {

  const [loginFormData, setLoginFormData] = React.useState({ email: "", password: "" })
  const [user, setUser] = React.useState(null)
  const [status, setStatus] = React.useState("idle");
  const [error, setError] = React.useState(null);

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from || "/products";

  React.useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser)
        localStorage.setItem("isLoggedIn", "true")
      } else {
        setUser(null);
        localStorage.removeItem("isLoggedIn");
      }
    })
    return () => unsubscribe();
  }, [])

  function handleChange(e) {
    const { name, value } = e.target;
    setLoginFormData(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("Submitting")
    setError(null)

    try {
      await signInWithEmailAndPassword(auth, loginFormData.email, loginFormData.password);
      navigate(from, { replace: true })
    } catch (err) {
      setError("Invalid email or password. Please try again")
    } finally {
      setStatus('idle')
    }
  }
  function handleLogout() {
    signOut(auth);
  }


  if (user) {
    return (
      <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#FAF9F6]">
        <div className="max-w-md w-full bg-white rounded-[2.5rem] p-10 shadow-2xl shadow-pink-100 border border-pink-50 text-center">
          <div className="w-24 h-24 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <User size={48} className="text-[#f199b9]" />
          </div>
          <h2 className="font-souri text-3xl text-gray-800 italic uppercase mb-2">Welcome Back!</h2>
          <p className="text-gray-500 mb-8 italic">{user.email}</p>

          <div className="space-y-4 mb-8">
            <button
              onClick={() => navigate("/products")}
              className="w-full flex items-center justify-center gap-3 p-4 bg-purple-50 rounded-2xl text-gray-700 font-bold hover:bg-purple-100 transition-all"
            >
              <ShoppingBag size={20} /> Continue to Shopping
            </button>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center justify-center gap-2 mx-auto text-red-400 font-bold hover:text-red-600 transition-colors italic"
          >
            <LogOut size={18} /> Sign Out
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-[80vh] flex items-center justify-center p-6 bg-[#FAF9F6]">
      <div className="max-w-md w-full bg-white rounded-[3rem] p-10 shadow-2xl shadow-pink-200 border border-pink-50" >
        {
          location.state?.message && (
            <div className="bg-pink-50 text-[#f199b9] p-4 rounded-2xl mb-6 text-center font-bold italic border border-pink-100">
              {location.state.message}
            </div>
          )
        }

        <div className="text-center mb-10" >
          <h1 className="font-souri text-4xl text-[#f199b9] italic uppercase tracking-wider">Sign In</h1>
          <p className="text-gray-400 italic mt-2">Welcome to Souri BKK</p>
        </div >

        {
          error && (
            <p className="text-red-500 text-center mb-6 font-bold text-sm bg-red-50 p-3 rounded-xl">{error}</p>
          )
        }

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="relative">
            <Mail size={20} className="absolute left-4 top-4 text-gray-300 " />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-purple-50 border-none  focus:ring-2 focus:ring-[#f199b9] outline-none transition-all italic text-gray-700"
              value={loginFormData.email}
              required
            />
          </div>

          <div className="relative">
            <Lock size={20} className="absolute left-4 top-4 text-gray-300 " />
            <input
              type="password"
              name="password"
              onChange={handleChange}
              placeholder="Password"
              className="w-full pl-12 pr-4 py-4 rounded-2xl bg-purple-50 border-none  focus:ring-2 focus:ring-[#f199b9] outline-none transition-all italic text-gray-700"
              value={loginFormData.password}
              required
            />
          </div>
          <button
            disabled={status === 'submitting'}
            className={`w-full py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-white transition-all shadow-lg 
              ${status === "submitting"
                ? "bg-gray-300 cursor-not-allowed"
                : "bg-[#f199b9] hover:bg-[#b60848] shadow-pink-200"}`}
          >
            {status === 'submitting' ? "Checking..." : "Log In"}
          </button>
        </form>
        <p className="mt-10 text-center text-gray-400 italic text-sm">
          Don't have an account? <span className="text-[#f199b9] font-bold cursor-pointer hover:underline">Sign up</span>
        </p>
      </div >
    </div >
  )
}
