import { Facebook, Instagram, Mail, Phone, Twitter, Youtube } from "lucide-react";

function HeaderNav() {
  return (
    <div className="flex items-center gap-4 text-sm">
        <div>
      <div className="flex items-center gap-1">
        <Phone size={16} /> 225 555-0118
      </div>
      <div className="flex items-center gap-1">
        <Mail size={16} /> emre.atasoy@example.com
      </div>
      </div>
      <div className="flex items-center gap-1">
         Follow Us and get a chance to win 80% off
      </div>
      <div>Follow Us:<Instagram size={16} /> <Youtube size={16}/> <Facebook size={16}/> <Twitter size={16}/></div>
    </div>
  );
}

export default HeaderNav;
