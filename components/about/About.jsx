import { useState } from "react";
import Skills from "./Skills";
import Modal from "react-modal";
import ModalContent from "./modal/ModalContent";
import Image from "next/image";

Modal.setAppElement("#__next");

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  function toggleModalOne() {
    setIsOpen(!isOpen);
  }

  return (
    //    ABOUT
    <div className="edina_tm_about" id="about">
      <div className="container">
        <div className="about_title">
          <h3>About Us</h3>
        </div>
        <div className="content">
          <div
            className="leftpart"
            data-aos="fade-right"
            data-aos-duration="1200"
            data-aos-delay="100"
          >
            <div className="info">
              <h3>
                Hi, We&apos;re <span>Brandsmashers</span>
              </h3>
              <p>
                With a team of highly skilled professionals boasting over 6 years of collective experience in the field. Specializing in front-end development with React.js, we pride ourselves on delivering exceptional solutions tailored to meet our client&apos;s unique needs.
              </p>
            </div>
            <div className="my_skills">
              <h3 className="title">What are the technologies we&apos;re working on?</h3>
              <p className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                ipsum sit nibh amet egestas tellus.
              </p>
              <div className="wrapper">
                <div className="dodo_progress">
                  <Skills />
                </div>
              </div>
              <div className="edina_tm_button">
                <button
                  type="submit"
                  className="color"
                  onClick={toggleModalOne}
                >
                  See More
                </button>
              </div>
            </div>
          </div>
          {/* End leftpart */}

          <div className="rightpart">
            <div className="image">
              <Image
                width={445}
                height={599}
                src="/img/thumbs/image1.jpg"
                alt="thumb"
              />

              <div
                className="main"
                style={{
                  backgroundImage: "url(img/about/2.jpg)",
                }}
                data-aos="fade-left"
                data-aos-duration="1200"
                data-aos-delay="200"
              ></div>

              <div
                className="experience"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="300"
              >
                <div className="info">
                  <h3>6+ Years</h3>
                  <span>Of Experiance</span>
                </div>
              </div>
            </div>
          </div>
          {/* End righttpart */}
        </div>
      </div>

      {/* Start About Details Modal */}
      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModalOne}
        contentLabel="My dialog"
        className="custom-modal about-popup-wrapper"
        overlayClassName="custom-overlay "
        closeTimeoutMS={500}
      >
        <div className="edina_tm_modalbox">
          <button className="close-modal" onClick={toggleModalOne}>
            <Image
              width={45}
              height={45}
              src="/img/svg/cancel.svg"
              alt="close icon"
            />
          </button>
          {/* End close icon */}

          <div className="box_inner">
            <div className="description_wrap scrollable">
              <ModalContent />
            </div>
          </div>
          {/* End box inner */}
        </div>
        {/* End modal box news */}
      </Modal>
      {/* End  About Details Modal */}
    </div>
    // /ABOUT
  );
};

export default About;