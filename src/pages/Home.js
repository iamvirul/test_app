// import logo from './logo.svg';
import "../css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Facebook,
  Github,
  Instagram,
  Twitter,
  Youtube,
} from "react-bootstrap-icons";
import AnimationPage from "./AnimationPage";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Navbar from "../components/Nav";

function Home() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);
  return (
    <AnimationPage>
      {loading ? (
        <HashLoader color={"#4169e1"} loading={loading} size={80} />
      ) : (
        <div className="col-12">
          <Navbar/>
          <div className=" col-12 rowdev">
            <div className="row">
              <div className=" col-lg-6">
                <div className=" d-flex  align-items-center justify-content-center">
                  <span className=" d-flex text-center name"> I'm</span>
                </div>
                <div className=" d-flex align-items-center justify-content-center">
                  <span className="name2 ">
                    VIRU<span className="name3">L NIRMALA</span>
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center">
                  <span className="scale-up-hor-left">
                    Business Enthusiast | Software Engineer
                  </span>
                </div>
                <div className="d-flex align-items-center justify-content-center p-4 para text-focus-in">
                  <p className="shadow-drop-2-center para ">
                    As a programmer, I am delighted with my current state of
                    affairs. I possess an ardent passion for coding and I am
                    consistently driven to explore new technologies and
                    programming languages. In addition to my professional
                    pursuits, I also engage in personal coding projects to
                    satiate my thirst for creating novel software. My desire to
                    achieve innovation in my craft has been instrumental in my
                    success, and I am constantly pushing myself to reach new
                    heights in my abilities.
                  </p>
                </div>
                <div className="d-flex align-items-center justify-content-center p-2 text-focus-in ">
                  <div className=" mb-3 shadow-drop-2-tb ">
                    <a href="https://www.instagram.com/virul_n_w/">
                      <Instagram
                        size={30}
                        className=" text-decoration-none me-3 text-dark   "
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
              <div className=" d-none d-lg-block col-lg-6">
                <img
                  src={require("../images/me.png")}
                  className="imagelogo p-0 melogo text-focus-in"
                  alt="me"
                  height="600"
                  width={"500"}
                />
              </div>
            </div>
            <div className="d-block d-lg-none col-11 mt-3">
              <div className=" d-flex col-12 justify-content-center">
                <span className="rights">
                  All right reserved 2023 ® | develope by virul.n
                </span>
              </div>
            </div>
            <div className=" d-none d-lg-block col-11 mt-3 pt-4">
              <div className=" d-flex col-12 justify-content-end">
                <span className="rights">
                  All right reserved 2023 ® | develope by virul.n
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimationPage>
  );
}
export default Home;
