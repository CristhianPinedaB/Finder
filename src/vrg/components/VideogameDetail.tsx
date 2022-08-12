import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useVideogame } from "../hooks/useVideogame";
import Footer from "./Footer";
import Header from "./Header";
import Loading from "./Loading";

const VideogameDetail = () => {
  const { getVideoGameById, videogameDetail } = useVideogame();
  const { id } = useParams();

  useEffect(() => {
    console.log("id---->", id);
    getVideoGameById(id as string);
    return () =>{
        getVideoGameById(undefined)
    }
  }, []);

  //Estado para mi Loading...
  const [loading,setLoading] = useState(false);
  useEffect(()=>{
      setLoading(true);
      setTimeout(()=>{
          setLoading(false);
      },2000);
  },[])

  let requirements = videogameDetail.platforms?.find(
    (r) => r.platform.name === "PC"
  );
  console.log("requerimientos-->", requirements);

  let minimos = requirements?.requirements.minimum;
  let recomendados = requirements?.requirements.recommended;
  let Recommended = 'Recommended';
  let Minimum = 'Minimum';
  let OS = 'OS';
  let Processor = 'Processor';
  let Memory = 'Memory';
  let Graphics = 'Graphics';
  let Storage = 'Storage';



  return (
    <div>
      {
        loading?(
          <div  className='h-screen flex items-center justify-center'>
            <Loading/>
          </div>
        ):(
          <div className="text-white mx-8">
                <Header/>
                <div className="text-2xl font-bold text-sky-500 my-4">{videogameDetail.name}</div>

                <div className=" md:grid grid-cols-2 gap-4">
                  <div className="my-3">
                    <img src={videogameDetail.background_image} alt="image" />
                  </div>
                  <div className="text-justify"
                      dangerouslySetInnerHTML={{
                      __html: videogameDetail.description as string,
                      }}
                  ></div>
                </div>


                <div className="md:grid grid-cols-2 gap-4 md:my-8 md:content-start">
                <div className="bg-black rounded-t-lg my-8 md:my-0">
                  <p className="font-bold text-sky-400">Minimum Requirementes</p>
                  {requirements?.requirements.minimum?
                  (
                  <div className="text-justify mx-5">
                      <p>-{minimos?.slice(minimos.indexOf(Minimum),minimos.indexOf(OS))}</p>
                      <p>-{minimos?.slice(minimos.indexOf(OS),minimos.indexOf(Processor))}</p>
                      <p>-{minimos?.slice(minimos.indexOf(Processor),minimos.indexOf(Memory))}</p>
                      <p>-{minimos?.slice(minimos.indexOf(Memory),minimos.indexOf(Graphics))}</p>
                      <p>-{minimos?.slice(minimos.indexOf(Graphics),minimos.indexOf(Storage))}</p>
                      <p>-{minimos?.slice(minimos.indexOf(Storage),minimos.length)}</p>
                  </div>
                  ):(
                      <p>-Not Found-</p>
                  )}
                </div>

                <div className="bg-black rounded-t-lg">
                  <p className="font-bold text-sky-400">Recommended Requirements</p>
                  {requirements?.requirements.recommended ? 
                  (<div className="text-justify mx-5">
                      <p>-{recomendados?.slice(recomendados.indexOf(Recommended),recomendados.indexOf(OS))}</p>
                      <p>-{recomendados?.slice(recomendados.indexOf(OS),recomendados.indexOf(Processor))}</p>
                      <p>-{recomendados?.slice(recomendados.indexOf(Processor),recomendados.indexOf(Memory))}</p>
                      <p>-{recomendados?.slice(recomendados.indexOf(Memory),recomendados.indexOf(Graphics))}</p>
                      <p>-{recomendados?.slice(recomendados.indexOf(Graphics),recomendados.indexOf(Storage))}</p>
                      <p>-{recomendados?.slice(recomendados.indexOf(Storage),recomendados.length)}</p>
                  </div>) 
                  : (
                    <p>-Not Found-</p>
                  )}
                </div>
              </div>
              <Footer/>
          </div>
        )
      }

    </div>
  );
};

export default VideogameDetail;
