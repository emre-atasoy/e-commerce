import coupleImg from "../assets/couple.png";
import blackImg from "../assets/black.png";
import whiteShirtImg from "../assets/white-shirt.png";
import heroImage from "../assets/hero-model.png";
import oneImage from "../assets/one.png";
import twoImage from "../assets/two.png";
import postImg1 from "../assets/design1.png";
import postImg2 from "../assets/design2.png";
import product1 from "../assets/product1.png";
import product2 from "../assets/product2.png";
import product3 from "../assets/product3.png";
import product4 from "../assets/product4.png";
import product5 from "../assets/product5.png";
import product6 from "../assets/product6.png";
import product7 from "../assets/product7.png";
import product8 from "../assets/product8.png";
import product9 from "../assets/product9.png";
import product10 from "../assets/product10.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BookOpen, Notebook, TrendingUp,Heart, ShoppingCart, Eye, Star, Clock, BarChart, AlarmClock, ChartSpline, ChartArea } from "lucide-react";
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


{/* BESTSELLER PRODUCTS SECTION */}
<section className="mt-32 px-10 lg:px-20 text-center">

  {/* Üst Yazılar */}
  <p className="text-blue-600 font-semibold">Featured Products</p>

  <h2 className="text-3xl font-bold mt-1">BESTSELLER PRODUCTS</h2>

  <p className="text-gray-500 mt-1">
    Problems trying to resolve the conflict between
  </p>

  {/* Ürün Grid’i */}
  <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">

    {/* Kart 1 */}
    <div>
      <img src={product1} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    {/* Kart 2 */}
    <div>
      <img src={product2} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    {/* Kart 3 */}
    <div>
      <img src={product3} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    {/* Kart 4 */}
    <div>
      <img src={product4} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    {/* Kart 5 */}
    <div>
      <img src={product5} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    {/* ALT SIRA */}

    <div>
      <img src={product6} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    <div>
      <img src={product7} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    <div>
      <img src={product8} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    <div>
      <img src={product9} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

    <div>
      <img src={product10} className="w-full h-64 object-cover shadow-lg" />

      <h3 className="font-bold mt-4 text-lg">Graphic Design</h3>
      <p className="text-gray-500 text-sm">English Department</p>

      <div className="mt-2 flex justify-center gap-2">
        <span className="text-gray-500 line-through">$16.48</span>
        <span className="text-green-500 font-semibold">$6.48</span>
      </div>
    </div>

  </div>

  {/* LOAD MORE BUTTON */}
  <button className="mt-12 border border-blue-500 text-blue-500 px-6 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition">
    LOAD MORE PRODUCTS
  </button>

</section>







{/* FEATURED SECTION (2 FOTOĞRAF + METİN) */}
<section className="mt-32 px-10 lg:px-20 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">

  {/* SOLDA 2 FOTO YAN YANA */}
  <div className="flex gap-6">
    <img
      src={oneImage}
      alt="one"
      className="w-1/2 h-[380px] object-cover"
    />

    <img
      src={twoImage}
      alt="two"
      className="w-1/2 h-[380px] object-cover"
    />
  </div>

  {/* SAĞDA METİN */}
  <div className="max-w-96 break-words">
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


 
    <section className="mt-32 text-center px-4">
      
      {/* Üst Başlıklar */}
      <p className="text-blue-600 font-semibold">Featured Products</p>

      <h2 className="text-3xl font-bold mt-2">THE BEST SERVICES</h2>

      <p className="text-gray-500 mt-1">
        Problems trying to resolve the conflict between
      </p>

      {/* 3'lü Kutu */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-5xl mx-auto">

        {/* 1 */}
        <div className="flex flex-col items-center">
          <BookOpen size={48} className="text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">Easy Wins</h3>
          <p className="text-gray-500 text-sm mt-2">
            Get your best looking smile now!
          </p>
        </div>

        {/* 2 */}
        <div className="flex flex-col items-center">
          <Notebook size={48} className="text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">Concrete</h3>
          <p className="text-gray-500 text-sm mt-2">
            Delicate is most focused in helping you discover your most beautiful smile.
          </p>
        </div>

        {/* 3 */}
        <div className="flex flex-col items-center">
          <TrendingUp size={48} className="text-blue-500 mb-4" />
          <h3 className="text-lg font-semibold">Hack Growth</h3>
          <p className="text-gray-500 text-sm mt-2">
            Overcame any hurdle or any other problem.
          </p>
        </div>

      </div>
    </section>


{/* FEATURED POSTS SECTION */}
<section className="mt-32 px-10 lg:px-20">

  {/* ÜST BAŞLIKLAR */}
  <p className="text-blue-600 font-semibold text-center">Practice Advice</p>
  <h2 className="text-3xl font-bold text-center mt-2">Featured Posts</h2>

  {/* KARTLAR */}
  <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

    {/* ---------------- KART 1 ---------------- */}
    <div className="flex bg-white shadow-lg overflow-hidden">

      {/* SOL GÖRSEL */}
      <div className="relative w-1/3">
        <img
          src={postImg2}
          alt="post"
          className="w-full h-full object-cover"
        />

        {/* SALE ETİKETİ */}
        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
          Sale
        </span>
      </div>

      {/* SAĞ TARAF */}
      <div className="w-2/3 p-6 flex flex-col">

        {/* Üst Kısım */}
        <span className="text-blue-600 text-sm font-semibold">English Department</span>

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mt-2">Graphic Design</h3>
          <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
            ★ 4.9
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-2">
          We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
        </p>

        <span className="text-gray-400 text-xs mt-2">15 Sales</span>

        {/* Renkli Dots */}
        <div className="flex items-center gap-2 mt-3">
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

        {/* Saat, Ders, Progress */}
        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">

          <div className="flex items-center gap-1">
            <span><AlarmClock size={18}/></span>
            <span>22h…</span>
          </div>

          <div className="flex items-center gap-1">
            <span><ChartArea size={18}/></span>
            <span>64 Lessons</span>
          </div>

          <div className="flex items-center gap-1">
            <span><ChartSpline size={18}/></span>
            <span>Progress</span>
          </div>

        </div>

        {/* BUTON */}
        <button className="mt-6 border border-blue-500 text-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition w-max">
          Learn More →
        </button>
      </div>

    </div>


    {/* ---------------- KART 2 ---------------- */}
    <div className="flex bg-white shadow-lg overflow-hidden">

      {/* SOL GÖRSEL */}
      <div className="relative w-1/3">
        <img
          src={postImg1}
          alt="post"
          className="w-full h-full object-cover"
        />

        <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded">
          Sale
        </span>
      </div>

      {/* SAĞ TARAF */}
      <div className="w-2/3 p-6 flex flex-col">

        <span className="text-blue-600 text-sm font-semibold">English Department</span>

        <div className="flex justify-between items-center">
          <h3 className="text-xl font-bold mt-2">Graphic Design</h3>
          <span className="bg-gray-800 text-white text-xs px-2 py-1 rounded-full">
            ★ 4.9
          </span>
        </div>

        <p className="text-gray-600 text-sm mt-2">
          We focus on ergonomics and meeting you where you work. It’s only a keystroke away.
        </p>

        <span className="text-gray-400 text-xs mt-2">15 Sales</span>

        <div className="flex items-center gap-2 mt-3">
        <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
          <div className="w-3 h-3 bg-black rounded-full"></div>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500 mt-4">

          <div className="flex items-center gap-1">
            <span><AlarmClock size={18}/></span>
            <span>22h…</span>
          </div>

          <div className="flex items-center gap-1">
            <span><ChartArea size={18}/></span>
            <span>64 Lessons</span>
          </div>

          <div className="flex items-center gap-1">
            <span><ChartSpline size={18}/></span>
            <span>Progress</span>
          </div>

        </div>

        <button className="mt-6 border border-blue-500 text-blue-500 px-5 py-2 rounded-lg hover:bg-blue-500 hover:text-white transition w-max">
          Learn More →
        </button>

      </div>

    </div>

  </div>
</section>



          
    </div>
  );
}

export default Home;
