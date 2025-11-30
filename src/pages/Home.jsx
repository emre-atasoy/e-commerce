
import { Link } from "react-router-dom"; // Link import edildi
import { ShoppingCart } from "lucide-react";
import heroImage from "../assets/hero-model.png"; // Görsel src klasöründeyse import ile çek

function Home() {
  return (
    <div>
      <section className="relative bg-gradient-to-r from-blue-200 to-green-200 rounded-xl overflow-hidden p-6 sm:p-64 flex flex-col-reverse sm:flex-row items-center">
        
        {/* Sol taraf: Metin */}
        <div className="flex-1 text-center sm:text-left mt-6 sm:mt-0">
          <p className="text-sm text-blue-600 font-semibold">SUMMER 2020</p>
          <h1 className="text-2xl sm:text-4xl font-bold mt-2 mb-2">NEW COLLECTION</h1>
          <p className="text-gray-700 mb-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
            SHOP NOW
          </button>
        </div>

        {/* Sağ taraf: Görsel */}
        <div className="flex-1 flex justify-center sm:justify-end">
          <div className="relative w-48 h-48 sm:w-64 sm:h-64">
            <img 
              src={heroImage} 
              alt="New Collection"
              className="object-cover w-full h-full rounded-full"
            />
            {/* Daireler veya dekoratif noktalar için opsiyonel */}
            <div className="absolute top-0 right-0 w-8 h-8 bg-white rounded-full"></div>
            <div className="absolute top-9 right-9 w-8 h-8 bg-white rounded-full"></div>
            
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
