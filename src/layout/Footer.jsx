import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faFacebook, 
  faInstagram, 
  faTwitter 
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="max-w-7xl mx-auto bg-white mt-24 border-t">
      <div className=" mx-auto flex items-center justify-between px-6 py-16">

  <Link to="/" className="text-3xl font-bold text-[#252B42]">
    Bandage
  </Link>

  <div className="flex items-center gap-6 ml-10">
  <FontAwesomeIcon icon={faFacebook} style={{ color: "#74C0FC" }}  size="2x"/>
  <FontAwesomeIcon icon={faInstagram} style={{ color: "#74C0FC" }} size="2x" />
  <FontAwesomeIcon icon={faTwitter} style={{ color: "#74C0FC" }} size="2x" />
</div>


</div>


  
      {/* Üst Kısım */}
      <div className="max-w-full mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-1">
        
        {/* Company Info */}
        <div>
          <h3 className="font-semibold mb-4">Company Info</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Carrier</li>
            <li>We are hiring</li>
            <li>Blog</li>
          </ul>
        </div>

        {/* Features */}
        <div>
          <h3 className="font-semibold mb-4">Features</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Business Marketing</li>
            <li>User Analytic</li>
            <li>Live Chat</li>
            <li>Unlimited Support</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-gray-600">
            <li>IOS & Android</li>
            <li>Watch a Demo</li>
            <li>Customers</li>
            <li>API</li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="font-semibold mb-4">Get In Touch</h3>

          <div className="flex items-center w-56">
            <input
              type="email"
              placeholder="Your Email"
              className="border px-3 py-2 rounded-l-md w-full outline-none text-gray-600"
            />
            <button className="bg-[#74C0FC] text-white px-5 py-2 rounded-r-md hover:bg-blue-600 transition">
              Subscribe
            </button>
          </div>

          <p className="text-gray-500 text-sm mt-3">
            Lore imp sum dolar Amit
          </p>
        </div>

      </div>
      <div className="w-full bg-white py-4 shadow-sm">
  
</div>

      {/* Alt Bar */}
      <div className="max-w-7xl mx-auto border-t py-4 text-start text-gray-600 text-sm">
        Made With Love By Finland All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
