/* eslint-disable react/jsx-no-comment-textnodes */
import frontendImg from "../../assets/images/front-end.png";
import backendImg from "../../assets/images/backend.png";
import design from "../../assets/images/design.png";
import appImg from "../../assets/images/apps.png";
import { NavLink } from "react-router-dom";

const Service = () => {
  return (
    <>
      <section id="service">
        <div className="container lg:pt-5">
          <div className="text-center">
            <h2 className="text-headingColor font-[500] text-[2.4rem] mb-5">
           Our services
            </h2>

            <p className="lg: max-w-[600] lg:mx-auto text-headingColor  font-[500] text-[16px] leading-7">
            Our platform &quot;Medico &quot;srevolutionizes healthcare accessibility, offering online doctor consultations, ambulance services, and medication ordering. Easily accessible through our web app, we ensure prompt medical assistance, addressing emergencies and remote healthcare needs with convenience and efficiency.
            </p>
          </div>
          <div className="flex flex-col justify-center sm:py-12">
            <div className="w-full py-3 px-2 sm: max-w-xl sm:m-auto sm:px-0">
              <div
                className="relative text-gray-700 antialiased text-sm  font-semibold
              "
              >
                {/*===========Vertical Line Runnig through the middle==========*/}

                <div className="hidden absolute w-1 sm:block bg-indigo-300  h-full left-1/2  transform  -translate-x-1/2"></div>
                {/*==========Left Card==========*/}
                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    
                    <div className="flex justify-start w-full ms-auto  items-center" >
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Ambulance Service
                          </h3>
                          <NavLink to="/login">
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                          In our ambulance services, we provide rapid emergency response facilitated by a panic button in our web app. With GPS-enabled location tracking, 
                          we ensure swift dispatch and accurate arrival to the scene, guaranteeing timely medical aid during critical situations, enhancing safety and peace of mind.
                          </p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      // eslint-disable-next-line react/jsx-no-comment-textnodes
                      <figure>
                       // <img src={frontendImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/*==========Right Card==========*/}

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                            Medical Shopping
                          </h3>
                          <NavLink to="/shopping">
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                          For medication purchases, our platform facilitates seamless online ordering from nearby pharmacies. Users can conveniently browse and buy prescribed medications through our web app, ensuring timely delivery to their doorstep. With a user-friendly interface and extensive pharmacy partnerships, we prioritize accessibility and convenience in healthcare procurement.
                          </p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={backendImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-start w-full ms-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pr-8">
                        <div
                          data-aos="fade-right"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                        Consultating Doctor
                          </h3>
                          <NavLink to="/consultation">
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                          For doctor consultations, our platform offers comprehensive audio and video call services. Users can easily schedule and attend virtual appointments with qualified healthcare professionals through our web application. With seamless audio and video integration, we ensure efficient and effective remote medical consultations, promoting accessibility and personalized care.
                          </p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={design} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>

                {/*==========Right Card==========*/}

                <div className=" mt-6 sm:mt-0 sm:mb-12">
                  <div className="flex items-center flex-col sm:flex-row">
                    <div className="flex justify-end w-full mx-auto  items-center">
                      <div className="w-full sm:w-1/2 sm:pl-8">
                        <div
                          data-aos="fade-left"
                          data-aos-duration="1200"
                          className=" bg-white p-4 rounded   shadow group hover:bg-primaryColor cursor-pointer ease-in  duration-150"
                        >
                          <h3 className="text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[600] text-xl">
                         medical Information
                          </h3>
                          <NavLink to="/blog">
                          <p className=" text-primaryColor font-[700] mb-3 group-hover:text-white group-hover:font-[500] leading-7">
                          We&apos;re excited to introduce a dedicated blog section on our platform, providing users with comprehensive medical information. Our articles cover diverse health topics, treatments, and wellness advice, empowering users with valuable insights for their healthcare journey.
                          </p>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                    <div
                      className=" rounded-lg bg-primaryColor border-white border-4 w-10 h-20 absolute left-1/2 transform -translate-x-1/2  -translate-y-4
                     sm:translate-y-0 flex items-center justify-center"
                    >
                      <figure>
                        <img src={appImg} alt="frontendImg" />
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Service;
