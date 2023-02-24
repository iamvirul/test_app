// import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ArrowRight,
  Facebook,
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";

function App() {
  const name = "<virul.n/>";
  return (
    <div className="col-11">
      <div className=" row">
        <div className=" col-lg-5 d-flex align-content-center justify-content-center p-5">
          {/* <img src={require("./images/virulLogo.png")} className="imagelogo p-0" height="200" width={"200"} /> */}
          <span className="imagelogo">{name}</span>
        </div>
        <div className=" ms-5 col-6 d-flex align-items-center justify-content-end">
          <ArrowRight
            size={40}
            color={"royalblue"}
            className="scale-up-center"
          />
        </div>
      </div>
      <div className=" col-12 rowdev">
        <div className="row">
          <div className=" col-lg-6">
            <div className=" d-flex  align-items-center justify-content-center">
              <span className=" d-flex text-center name">Hey I'm</span>
            </div>
            <div className=" d-flex align-items-center justify-content-center">
              <span className="name2 ">
                VIRU<span className="name3">L NIRMALA</span>
              </span>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <span>Business Enthusiast | Software Engineer</span>
            </div>
            <div className="d-flex align-items-center justify-content-center p-5 para">
              <p>
                As a programmer, I am delighted with my current state of
                affairs. I possess an ardent passion for coding and I am
                consistently driven to explore new technologies and programming
                languages. In addition to my professional pursuits, I also
                engage in personal coding projects to satiate my thirst for
                creating novel software. My desire to achieve innovation in my
                craft has been instrumental in my success, and I am constantly
                pushing myself to reach new heights in my abilities.
              </p>
            </div>
            <div className="d-flex align-items-center justify-content-center p-2">
              <div className=" mb-5">
                <a href="https://www.instagram.com/virul_n_w/">
                  <Instagram
                    size={30}
                    className=" text-decoration-none me-3 text-dark  "
                  />
                </a>
                <a href="https://www.facebook.com/virulnirmala/">
                  <Facebook
                    size={30}
                    className=" text-decoration-none me-3 text-dark"
                  />
                </a>
                <a href="https://github.com/iamvirul">
                  <Github
                    size={30}
                    className=" text-decoration-none me-3 text-dark"
                  />
                </a>
                <a href="https://twitter.com/NirmalaVirul">
                  <Twitter
                    size={30}
                    className=" text-decoration-none me-3 text-dark"
                  />
                </a>
                <a href="https://www.youtube.com/channel/UCWrVxJzOmiQn4MEs3oovGtg">
                  <Youtube
                    size={30}
                    className=" text-decoration-none me-3 text-dark"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
