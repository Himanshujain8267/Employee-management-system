import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';

const Login = () => {

  
  const [email, setEmail] = useState('');


  const [password, setPassword] = useState('');

 
  const [showPassword, setShowPassword] = useState(false);

  
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);

    alert(`
      Email: ${email}
      Password: ${password}
    `);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#18171c]">

      <div className="bg-[#18171c] p-8 rounded-lg shadow-lg w-full max-w-sm">

        <h1 className="text-3xl font-bold text-white mb-8">
          Log In
        </h1>

        <form onSubmit={(e) =>{
             handleSubmit(e) ;
             setEmail('');
             setPassword('');
             }}>

        
          <div className="mb-6">

            <div className="relative mb-4">

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b97a7a]">
                <FaEnvelope />
              </span>

              <input required
                className="w-full pl-10 pr-4 py-3 rounded-full border-2 border-[#b97a7a] bg-transparent text-white focus:outline-none focus:border-[#b97a7a] placeholder-[#b97a7a]"
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

            </div>

            
            <div className="relative">

              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#b97a7a]">
                <FaLock />
              </span>

              <input
                className="w-full pl-10 pr-16 py-3 rounded-full border-2 border-[#b97a7a] bg-transparent text-white focus:outline-none focus:border-[#b97a7a] placeholder-[#b97a7a]"
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                type="button"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#b97a7a] text-sm focus:outline-none"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? 'Hide' : 'Show'}
              </button>

            </div>

          </div>

        
          <div className="flex items-center justify-between mb-8">

            <div className="flex items-center">

              <input
                type="checkbox"
                id="remember"
                className="accent-[#b97a7a] mr-2"
              />

              <label
                htmlFor="remember"
                className="text-[#b97a7a] text-sm"
              >
                Remember me
              </label>

            </div>

            <button
              type="button"
              className="text-[#b97a7a] text-sm hover:underline"
            >
              Forget Password
            </button>

          </div>

        
          <button
            type="submit"
            className="w-full bg-[#b97a7a] text-white font-semibold py-3 rounded-full text-lg hover:bg-[#a05e5e] transition-colors"
          >
            Log In
          </button>

        </form>

      </div>

    </div>
  );
};

export default Login;