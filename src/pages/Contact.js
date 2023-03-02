import { useEffect, useState } from "react";
import Navbar from "../components/Nav";
import AnimationPage from "./AnimationPage";
import HashLoader from "react-spinners/HashLoader";
import "../css/Contact.css";
import { Facebook, Github, Instagram, Linkedin, Spotify, Twitter, Youtube } from "react-bootstrap-icons";
function Contact() {
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
        <HashLoader color={"#4169e1"} loading={loading} size={60} />
      ) : (
        <div className="col-12 maindiv ">
          <Navbar />
          <div className=" col-12 justify-content-center d-flex">
            <div className=" col-10 smalldiv1 shadow-drop-2-center ">
              <h1 className="imagelogo2 ps-2 pt-2 text-focus-in">Contact</h1>
              <span className=" text-focus-in paragraptxt mb-2">
                I am readily available for communication and can be reached
                through various channels including email and social media. If
                you have any questions or concerns, please do not hesitate to
                reach out to me. I strive to be responsive and provide timely
                assistance to those who require my help.
              </span>
            </div>
          </div>
          <div className=" mt-5 col-12 justify-content-center d-flex">
            <div className=" col-8 text-focus-in">
              <div className=" social_media shadow-drop-2-center">Social media</div>
              <div className="socaillink">
              <a href="https://www.instagram.com/virul_n_w/" className=" col-lg-1 col-3 me-3 btn text-decoration-none border-0">
                <Instagram size={30}/>
              </a>
              <a href="https://www.youtube.com/channel/UCWrVxJzOmiQn4MEs3oovGtg" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Youtube size={30}/>
              </a>
              <a href="https://www.facebook.com/virulnirmala/" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Facebook size={30}/>
              </a>
              <a href="https://twitter.com/NirmalaVirul" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Twitter size={30}/>
              </a>
              <a href="https://github.com/iamvirul" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Github size={30}/>
              </a>
              <a href="https://open.spotify.com/user/e88jbhlsk0u1ikk4cgtapa90t?si=3b8ec5ea9015468c" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Spotify size={30}/>
              </a>
              <a href="https://www.linkedin.com/in/virul-nirmala-a2b220217/" className=" col-lg-1  col-3 me-3 btn text-decoration-none border-0">
                <Linkedin size={30}/>
              </a>
              </div>
            </div>
          </div>
          <div className=" col-12 justify-content-center d-flex">
            <div className=" col-8 text-focus-in">
              <div className=" social_media shadow-drop-2-center">Mail</div>
              <div className="socaillink">
              <a href="https://mail.google.com/mail/" className=" col-lg-1 col-2 me-1 btn text-decoration-none border-0">
                <span className="gmail">
                help@virul.info
                </span>
              </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </AnimationPage>
  );
}

export default Contact;
