import { Link } from "react-router-dom";
import logo  from "../../assets/logo.png";
const Header = () => {
  return (
    <div className="w-full  flex justify-center ">
      <Link to={'/home'}>
        <div className="w-full flex flex-wrap items-center justify-center">
            <img className="w-[70px] md:w-[150px] h-auto" src={logo} alt="imagen" />
            <p className=" text-left text-zinc-50 text-4xl font-extrabold md:text-6xl lg:text-7xl">Finder</p>
        </div>
      </Link>
    </div>
  )
}

export default Header
