// import { Button } from "bootstrap"
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/more.css";
import AnimationPage from "./AnimationPage";

export default function More() {
  // const name = "<virul.n/>";

  return (
    <AnimationPage>
    <div>
      <div className="body">

        <nav>
          <ul>
            <Link to={"/"} className=" text-decoration-none">
            <li>
              Home
              <ArrowRight size={24} className="arrow" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            </Link>
            <li>
              About <ArrowRight size={24} className="arrow" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              Contact <ArrowRight size={24} className="arrow" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
            <li>
              Services
              <ArrowRight size={24} className="arrow" />
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </li>
          </ul>
        </nav>
      <span className=" footer1">d evelope by virul.n</span>
      </div>
    </div>
    </AnimationPage>
  );
}
