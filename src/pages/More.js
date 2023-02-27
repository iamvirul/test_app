// import { Button } from "bootstrap"
import { ArrowRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import "../css/more.css";
import AnimationPage from "./AnimationPage";

export default function More() {
  // const name = "<virul.n/>";

  return (
    <AnimationPage>
      <div className="body">
        <div>
          <nav className="linkdiv">
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
              <Link to={"/About"} className=" text-decoration-none">
                <li>
                  About <ArrowRight size={24} className="arrow" />
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </li>
              </Link>
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
        </div>
        <div className=" d-none d-lg-block col-12 d-flex justify-content-end pe-4">
          <div className=" row ">
          <span className=" footer1 d-flex justify-content-end">develope by virul.n</span>
          </div>
        </div>
        <div className=" d-block d-lg-none  col-12 d-flex justify-content-end pe-4">
          <div className=" row ">
          <span className=" footer2 d-flex justify-content-end">develope by virul.n</span>
          </div>
        </div>
      </div>
    </AnimationPage>
  );
}
