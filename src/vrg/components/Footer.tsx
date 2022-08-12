

const Footer = () => {
  return (
    

      <div className="bg-black mt-8 grid grid-cols-3 h-[50px] items-center">
        <div className="rounded-l-lg">
          <button className="w-1/2  rounded-l-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><a href="https://www.linkedin.com/in/cristhian-pineda-burgos/">Linkedin</a></button>
        </div>
        
        <div className="">
          <p className="text-lg font-bold text-white">Contact</p> 
        </div>

        <div className="rounded-r-lg ">
          <button className="w-1/2 rounded-r-lg transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"><a href="https://github.com/CristhianPinedaB">GitHub</a></button>
        </div>
      </div>

    
  )
}

export default Footer
