import { Link } from "react-router-dom";
import { 
  Facebook, Instagram, Mail, Phone, Twitter, Youtube,
  Heart, ShoppingCart, User,
  Search
} from "lucide-react";

function HeaderNav() {
  return (
    <div className="w-full">

      {/* ÜST LACİVERT BAR */}
      <div className="w-full bg-[#252B42] text-white text-sm py-6">
        <div className="mx-auto flex justify-between items-center px-6">

          {/* LEFT */}
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Phone size={18} />
              <span>(225) 555-0118</span>
            </div>

            <div className="flex items-center gap-2">
              <Mail size={18} />
              <span>michelle.rivera@example.com</span>
            </div>
          </div>

          {/* CENTER */}
          <div className="hidden md:block">
            Follow Us <span className="font-semibold">and get a chance to win 80% off</span>
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <span>Follow Us :</span>
            <Instagram size={18} />
            <Youtube size={18} />
            <Facebook size={18} />
            <Twitter size={18} />
          </div>

        </div>
      </div>

      {/* ALT BEYAZ NAVBAR */}
      <div className="w-full bg-white py-4 shadow-sm">
        <div className=" mx-auto flex items-center px-6">

          {/* Logo - Sol */}
          <Link to="/" className="text-2xl font-bold text-[#252B42] mr-10">
            Bandage
          </Link>

          {/* Menü - Orta */}
          <nav className="hidden md:flex items-center gap-6 text-gray-600 font-medium flex-1 justify-center">
            <Link to="/">Home</Link>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/contact">Contact</Link>
            <Link to="/pages">Pages</Link>
          </nav>

          {/* Sağ */}
          <div className="flex items-center gap-4 text-blue-400 ml-10">
            <Link to="/login" className="font-medium flex items-center gap-1">
              <User size={18} /> Login / Register
            </Link>

            <div className="flex items-center gap-3 text-blue-400">
              <Search size={20}/>
              <ShoppingCart size={20} />
              <Heart size={20} />
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}

export default HeaderNav;
