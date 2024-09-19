import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa";
import logo from "../../../assets/BookNest.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-[#282828] text-base-content p-10">
        <aside className="text-white">
          <p>
            <span className="text-3xl font-semibold text-orange-600">
              <img src={logo} alt="" className="w-[200px]" />
              Book Nest
            </span>
            <br />
            Providing reliable tech since 1992
          </p>
          <p className="uppercase underline font-semibold">Show on map</p>
          <div className="flex gap-2">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaPinterest />
          </div>
        </aside>
        <nav>
          <h6 className="footer-title text-white">Need Help</h6>
          <h2 className="text-2xl text-orange-600 font-semibold">
            8802136548566
          </h2>
          <a className="text-white">Monday – Friday: 9:00-20:00</a>
          <a className="text-white">Saturday: 11:00 – 15:00</a>
          <h2 className="text-xl text-white">contact@example.com</h2>
        </nav>

        {/* <hr className="border border-white"/> */}
        <nav>
          <h6 className="footer-title text-white">Services</h6>
          <a className="link no-underline hover:text-orange-600 text-white">
            Branding
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Design
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Marketing
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Advertisement
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Company</h6>
          <a className="link no-underline hover:text-orange-600 text-white">
            About us
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Contact
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Jobs
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Press kit
          </a>
        </nav>
        <nav>
          <h6 className="footer-title text-white">Legal</h6>
          <a className="link no-underline hover:text-orange-600 text-white">
            Terms of use
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Privacy policy
          </a>
          <a className="link no-underline hover:text-orange-600 text-white">
            Cookie policy
          </a>
        </nav>
      </footer>

      <hr />

      <footer className="footer bg-[#282828] text-neutral-content items-center p-4">
        <aside className="grid-flow-col items-center">
          <p>
            Copyright © {new Date().getFullYear()}{" "}
            <span className="text-orange-600">BookNest</span> - All rights
            reserved
          </p>
        </aside>
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
