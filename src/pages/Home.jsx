import coupleImg from "../assets/couple.png";
import blackImg from "../assets/black.png";
import whiteShirtImg from "../assets/white-shirt.png";
import heroImage from "../assets/hero-model.png";
import oneImage from "../assets/one.png";
import twoImage from "../assets/two.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faHooli,
  faLyft,
  faStripe,
  faAws,
  faRedditAlien,
  faGithubAlt 
} from "@fortawesome/free-brands-svg-icons";

function Home() {
  return (
    <div className="relative p-6 overflow-x-hidden">  

      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-300 to-green-300
                    rounded-3xl py-1 px-12 flex flex-col sm:flex-row items-center 
                    overflow-hidden">

        {/* Küçük Beyaz Daire */}
        <div className="absolute top-10 right-1/3 w-24 h-24 bg-white rounded-full opacity-60"></div>

        {/* Sol Metin Alanı */}
        <div className="flex-1 text-center sm:text-left z-10">
          <p className="text-sm text-blue-700 font-semibold">SUMMER 2020</p>

          <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">
            NEW COLLECTION
          </h1>

          <p className="text-gray-700 max-w-sm mx-auto sm:mx-0">
            We know how large objects will act, but things on a small scale.
          </p>

          <button className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
            SHOP NOW
          </button>
        </div>

        {/* Sağ Model + Büyük Daire */}
        <div className="flex-1 relative flex justify-center sm:justify-end mt-10 sm:mt-0">

          {/* Büyük Daire */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 
                          w-[420px] h-[420px] bg-white rounded-full opacity-70"></div>

          {/* Model Fotoğrafı */}
          <img
            src={heroImage}
            alt="Model"
            className="relative z-10 w-[420px] sm:w-[500px] object-contain 
                       -rotate-6 scale-110 sm:scale-125"
          />
        </div>

      </section>

      {/* Sağdaki Mor Küçük Daire */}
      <div className="absolute right-10 top-1/2 w-6 h-6 bg-purple-400 rounded-full"></div>

          {/* MARKA LOGOLARI */}
      <div className="w-full py-12 flex items-center justify-center gap-x-16 text-[#807f7f] mt-16">
        <FontAwesomeIcon icon={faHooli} size="8x" />
        <FontAwesomeIcon icon={faLyft} size="8x" />
        <FontAwesomeIcon icon={faGithubAlt} size="8x" />
        <FontAwesomeIcon icon={faStripe} size="8x" />
        <FontAwesomeIcon icon={faAws} size="8x" />
        <FontAwesomeIcon icon={faRedditAlien} size="8x" />
        
        
      </div>




{/* TOP PRODUCT SECTION */}
<div className="px-20 mx-auto mt-24 grid grid-cols-1 lg:grid-cols-2 gap-3">

  {/* SOL BÜYÜK KART */}
  <div className="relative h-[500px] overflow-hidden">
    <img
      src={coupleImg}
      className="w-full h-full object-cover"
    />

    {/* Mavi Overlay */}
    <div className="absolute bottom-0 left-0 max-w-screen-md bg-blue-500/60 p-12 text-white">
      <h2 className="text-2xl font-bold">Top Product Of the Week</h2>

      <button className="mt-6 border border-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
        EXPLORE ITEMS
      </button>
    </div>
  </div>

  {/* SAĞ TARAF (2 KUTU) */}
  <div className="flex flex-col gap-5">

    {/* Üst Kart */}
    <div className="relative h-[240px] overflow-hidden">
      <img
        src={blackImg}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 max-w-screen-md bg-blue-500/60 p-10 text-white">
        <h2 className="text-xl font-bold">Top Product Of the Week</h2>

        <button className="mt-4 border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
          EXPLORE ITEMS
        </button>
      </div>
    </div>

    {/* Alt Kart */}
    <div className="relative h-[240px] overflow-hidden">
      <img
        src={whiteShirtImg}
        className="w-full h-full object-cover"
      />

      <div className="absolute bottom-0 left-0 max-w-screen-md bg-blue-500/60 p-10 text-white">
        <h2 className="text-xl font-bold">Top Product Of the Week</h2>

        <button className="mt-4 border border-white px-5 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition">
          EXPLORE ITEMS
        </button>
      </div>
    </div>

  </div>
</div>





{/* FEATURED SECTION (2 FOTOĞRAF + METİN) */}
<section className="mt-32 px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

  {/* SOLDA 2 FOTO YAN YANA */}
  <div className="flex gap-6">
    <img
      src={oneImage}
      alt="one"
      className="w-1/2 h-[380px] object-cover rounded-xl"
    />

    <img
      src={twoImage}
      alt="two"
      className="w-1/2 h-[380px] object-cover rounded-xl"
    />
  </div>

  {/* SAĞDA METİN */}
  <div>
    <p className="text-blue-600 font-semibold">Featured Products</p>

    <h2 className="text-4xl font-bold my-4">We love what we do</h2>

    <p className="text-gray-600 mb-4">
      Problems trying to resolve the conflict between the two major realms
      of Classical physics: Newtonian mechanics.
    </p>

    <p className="text-gray-600">
      Problems trying to resolve the conflict between the two major realms
      of Classical physics: Newtonian mechanics.
    </p>
  </div>

</section>

          
    </div>
  );
}

export default Home;
