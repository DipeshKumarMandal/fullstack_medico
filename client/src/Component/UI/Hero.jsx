// import heroImg from "../../assets/images/hero.svg";
import profile from "../../assets/images/profile-pic.jpg";
import CountUp from "react-countup";
import useAuth from "../../Hooks/useAuth";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const loginAuth = useAuth();
  return (
    <>
      <section className="pt-0 px-8" id="about">
        <div className="container pt-0">
          <div className="md:flex items-center justify-between sm:flex-col md:flex-row">
            {/*=================Hero Left Content */}

            <div className="w-full md:basis-1/2  ">
              <h5
                data-aos="fade-right"
                data-aos-duration="1500"
                className="text-headingColor font-[600] text-[30px] "
              >
                Welcome
              </h5>
              <h1
                data-aos="fade-up"
                data-aos-duration="1500"
                className="text-headingColor font-[800]  text-[1.8rem] sm:text-[60px] leading-[35px] sm:leading-[36px] mt-5"
              >
                To Our Medico
              </h1>
              <div
                data-aos="fade-right"
                data-aos-duration="1800"
                data-aos-delay="200"
                className="flex items-center gap-6 mt-7"
              >
                {!loginAuth.Login ? "":( <button className="bg-primaryColor text-white font-[580] flex items-center gap-2 hover:bg-smallTextColor ease-in duration-300 py-2 px-4 rounded-[8px]"      onClick={() => navigate("/login")}>
                
                Login
                </button>)}

              
              </div>

              <p
                data-aos="fade-left"
                data-aos-duration="1500"
                className="flex gap-2 text-headingColor mt-12 font-[500] text-[15px] leading-7 sm:pl-14 sm:pr-10"
              >
                <span>
                  <i className="ri-apps-2-line"></i>
                </span>
                &quot;Medico&quot; provides a platform offering ambulance
                services, online medication ordering, and doctor consultations.
                Users can access these services easily through a panic button,
                online pharmacy partnerships, and doctor consultations. The
                admin dashboard provides oversight of all services.
              </p>

              <div className="flex items-center gap-9 mt-14">
                <span className="text-smallTextColor text-[15px] font-[600]">
                  Follow me
                </span>

                <span>
                  <a
                    href="https://www.instagram.com/deepesh_kumarr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="  text-[18px] font-[800] text-3xl"
                  >
                    <i className="ri-instagram-line"></i>
                  </a>
                </span>
                <span>
                  <a
                    href="https://github.com/DipeshKumarMandal/fullstack_medico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-smallTextColor text-3xl font-[600]"
                  >
                    <i className="ri-github-fill"></i>
                  </a>
                </span>
              </div>
            </div>
            {/*=================Hero Left End =========================== */}

            {/*=================Hero Img Start =========================== */}

            <div className="basis-1/3 mt-10 sm:mt-0 ">
              <figure className="flex items-center justify-center ">
                <img
                  src={profile}
                  alt="heroImg"
                  style={{ width: "1000px", height: "400px" }}
                />
              </figure>
            </div>
            {/*=================Hero Img End=========================== */}

            {/*=================Hero conntent Right Start=========================== */}
            <div className="w-full md:basis-1/5 flex  justify-end text-center mt-10 flex-wrap gap-3 md:mt-0  md:flex-col md:justify-end md:text-end ">
              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={1} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  Years of experience
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={100} duration={2} suffix="%" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  Success Rate
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={0} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  Happy Patient
                </h4>
              </div>

              <div className="mb-10">
                <h2 className="text-headingColor font-[700] text-[32px]">
                  <CountUp start={0} end={10} duration={2} suffix="+" />
                </h2>
                <h4 className="text-headingColor font-[600] text-[18px]">
                  Available in 10+ cities
                </h4>
              </div>
            </div>

            {/*=================Hero conntent Right end=========================== */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
