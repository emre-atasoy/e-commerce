
import { Link } from "react-router-dom"; 
import { Ellipsis, ShoppingCart } from "lucide-react";
import heroImage from "../assets/hero-model.png"; 

function Home() {
  return (
    <div>
       
      <section className="relative bg-gradient-to-r from-blue-300 to-green-300 rounded-3xl  p-10 flex flex-col sm:flex-row items-center">

        {/* BEYAZ DAİRE */}
  <div className="absolute top-0 left-2/3 w-20 h-20 bg-white rounded-full "></div>

  {/* Sol metin */}
  <div className="flex-1 text-center sm:text-left z-10">
    <p className="text-sm text-blue-600 font-semibold">SUMMER 2020</p>
    <h1 className="text-3xl sm:text-5xl font-bold mt-2 mb-4">NEW COLLECTION</h1>
    <p className="text-gray-700 max-w-sm">
      We know how large objects will act, but things on a small scale.
    </p>

    <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
      SHOP NOW
    </button>
  </div>

  {/* Sağ taraf – model + büyük daire */}
  <div className="flex-1 relative flex justify-center sm:justify-end mt-10 sm:mt-0">

    {/* Büyük beyaz daire */}
    <div className="absolute right-[-45px] top-52 -translate-y-1/2 
                    w-[500px] h-[500px] bg-white rounded-full"></div>

    {/* Model fotoğrafı */}
    <img
  src={heroImage}
  alt="Model"
  className="relative z-10 w-[600pxpx] h-[600px] object-contain bottom-32 right-7
             scale-150 -rotate-12"
 />

    
    
  </div>

</section>
<div className="absolute right-[50px] top-60 w-6 h-6 bg-purple-400 rounded-full"></div>
    </div>
  );
}

export default Home;
