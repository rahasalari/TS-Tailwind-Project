import { Link } from "react-router-dom";
import LoginPopup from "../LoginPopup";
import SignupPopup from "../SignupPopup";

const Navbar = () => {
  return (
    <ul className="bg-gray flex pt-5">
      <li className="mr-2 hidden md:block">
        <Link className="text-left text-xs px-10" to="/">
          MailMaker
        </Link>
      </li>
      <li className=" ms-100 md:flex-none md:mr-2">
        <Link className="text-center text-xs px-4" to="solution">
          Solution
        </Link>
        <Link className="text-center text-xs px-4" to="features">
          Features
        </Link>
        <Link className="text-center text-xs px-4" to="pricing">
          Pricing
        </Link>
        <Link className="text-center text-xs px-4" to="support">
          Support
        </Link>
      </li>
      <li className="text-right flex me-10 ms-auto">
        <LoginPopup />
        <SignupPopup />
      </li>
    </ul>
  );
}
export default Navbar;