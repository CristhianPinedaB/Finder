import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import  Loading  from "./Loading";
import logo  from "../../assets/logo.png";

const Landing = () => {
  const [loading , setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false)
      }, 3000);
  },[])
  return(
      <div  className="bg-gradient-to-r from-sky-500 to-indigo-500 bg-cover bg-center h-screen flex items-center flex justify-center flex-nowrap" >
          
          {
          loading ? (
            <>
              <Loading/>
              <br />
              <p className="text-zinc-50 text-2xl md:text-4xl font-bold text-left">Find game<br/>requirements</p>
            </>
          ):(
            <>
            
              <div className="w-[300px] h-[100px] flex items-center flex justify-center">

                  <Link to='/home'>
                    <div className="font-bold text-white text-2xl ">Push</div>
                    <div className="w-[200px] animate-bounce">
                      <img src={logo} alt="logo" />
                    </div>
                  </Link>
                  
              </div>
              
            </>
          )
          }
      </div>
  )
}

export default Landing
