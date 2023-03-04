import AnimationPage from "./AnimationPage";
import Navbar from "../components/Nav";
import { useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import "../css/App.css";
import { Link } from "react-router-dom";

function About() {
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
        <div className=" col-12 maindiv">
          <Navbar />
          <div className="aboutdiv row d-flex justify-content-center">
            <div className=" col-10 smalldiv1 shadow-drop-2-center ">
              <h1 className="imagelogo2 ps-2 pt-4 text-focus-in">About</h1>
              <span className=" text-focus-in mb-2">
              As a typical adolescent, I am determined to expand my intellectual horizons and master contemporary advancements in the field of technology. Allow me to share a bit about myself.
              </span>
            </div>

            <div className=" col-12 pt-5">
              <div className=" d-flex justify-content-center">
                <div className=" col-10 col-lg-8 borderdiv text-focus-in">
                  <p>
                    Hi, my name is <span className="spanvirul">Virul</span>, and I'm a passionate individual
                    with a talent for creativity and technology. I have always
                    been fascinated by the world of video editing, graphic
                    design, and software engineering and have spent a
                    considerable amount of time honing my skills in these areas.
                  </p>
                  <br></br>
                  <p>
                    In 2018, I started learning video editing through YouTube,
                    and since then, I have made significant progress. Currently,
                    I use Kdenlive to edit videos, and I am proud of the
                    projects I have completed, some of which I have sold to
                    friends. I enjoy creating projects that look professional
                    and leave my clients satisfied with the end result.
                  </p>
                  <br></br>
                  <p>
                    As a skilled graphic designer, I use my proficiency in
                    Photoshop and GIMP to create stunning designs and images. I
                    am always excited to take on new projects that challenge me
                    and allow me to use my creative abilities to the fullest.
                  </p>
                  <br></br>
                  <p>
                    Recently, I began studying software engineering, and I am
                    excited about the possibilities this field offers. I have
                    self-studied several programming languages, including Java,
                    PHP, SQL, React, and React Native, which are essential in
                    today's technology-driven world. My friend Sihilel has been
                    a great help to me in my learning journey, providing
                    guidance and support that has helped me progress quickly.
                  </p>
                  <br></br>
                  <p>
                    My friends and I started a software company named Eyons
                    Software Solution together. We are a group of ten friends
                    working together to create innovative software solutions
                    that solve real-world problems for our clients. As
                    co-founders, we bring a wealth of knowledge and expertise to
                    the table and work tirelessly to ensure the success of our
                    company.
                  </p>
                  <br></br>
                  <p>
                    The journey has been exciting, and I feel fortunate to have
                    supportive friends who help me grow and learn in my areas of
                    interest. <Link to={"https://sihilel.com"} className="sihilal">Sihilel </Link>, in particular, has been an essential part
                    of my learning journey in software development.
                  </p>
                  <br></br>
                  <p>
                    With my diverse skill set, dedication to learning and
                    improving, and experience in running a successful software
                    company, I am confident that I have a bright future ahead of
                    me. I am continuously expanding my knowledge and building a
                    solid foundation that will enable me to pursue my dreams and
                    make a significant impact in the world of technology and
                    creativity.
                  </p>
                  <br></br>
                  <p>
                    I am excited about the possibilities that the future holds,
                    and I am eager to continue pursuing my passion for
                    creativity and technology. Whether I choose to pursue a
                    career in video editing, graphic design, or software
                    engineering, I know that my abilities and expertise will be
                    invaluable to any project I undertake.
                  </p>
                  <br></br>
                  <p>
                    In conclusion, I am grateful for the opportunities that have
                    come my way, and I look forward to what the future holds. I
                    believe that with hard work, dedication, and a passion for
                    what I do, I can achieve anything I set my mind to.
                  </p>
                  <br></br>
                  <p>
                    As I continue on my journey, I hope to inspire others to
                    pursue their passions and follow their dreams, just as I
                    have. I firmly believe that anyone can achieve success with
                    the right mindset, and I hope to be an example to others
                    that with perseverance and determination, anything is
                    possible.
                  </p>
                  <br></br>
                  <p>
                    Thank you for taking the time to read my story. I hope that
                    it has inspired you to pursue your passions and strive for
                    greatness in all that you do. Remember, the sky's the limit,
                    and with hard work and dedication, anything is possible.
                  </p>
                </div>
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

export default About;
