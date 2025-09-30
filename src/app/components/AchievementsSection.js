import React from "react";

const AchievementsSection = () => {
  const caseStudies = [
    {
      title: "UBS Arena",
      subtitle: "We Make Venues Come Alive",
      description:
        "The Latest In-Venue Technology Helps Production, Operations and Presentation Crews Provide Unique Entertainment Experiences",
      link: "/solutions/ob-vans",
      imageUrl: "/images/obvans.jpg",
    },
    {
      title: "Digital Signage",
      subtitle: "We Make the Workplace Work for You",
      description:
        "Mining Company understands value of investment with energy saving video wall",
      link: "/solutions/digital-signage",
      imageUrl: "/images/dg.jpg",
    },
    {
      title: "Georgia System Operations Corporation",
      subtitle: "We Empower Connections That Power Our World",
      description:
        "Expansive Video Wall for Mission Critical Visualization of Electricity Operations",
      link: "/solutions/conference-room",
      imageUrl: "/images/conference_room.jpg",
    },
  ];

  return (
    <section className="achievements-section">
      <div className="row-fluid mx-auto">
        <div
          className="span12 widget-span widget-type-cell"
          style={{ padding: 0 }}
        >
          <div className="row-fluid-wrapper">
            <div className="row-fluid">
              <div className="span12">
                <div className="hps-wrapper">
                  <div className="page-anchor-wrapper">
                    <a
                      id="our-work"
                      className="page-anchor"
                      style={{ transform: "translateY(-80px)" }}
                    ></a>
                  </div>

                  <div className="hps-title-wrapper">
                    <h3 className="hps-title text-[4rem]  font-bold text-center  text-[#fecc00] mt-[50px] mb-[70px]">
                      OUR WORK
                    </h3>
                  </div>

                  <div className="hps cs slick-initialized slick-slider">
                    <div className="slick-list">
                      <div className="slick-track">
                        {caseStudies.map((caseStudy, index) => (
                          <div
                            key={index}
                            className="hover-panel-outer case_studies slick-slide slick-active"
                          >
                            <div className="hover-panel">
                              <div
                                className="hover-panel-bg"
                                style={{
                                  backgroundImage: `url(${caseStudy.imageUrl})`,
                                }}
                              ></div>
                              <div className="hover-panel-content">
                                <h3>{caseStudy.title}</h3>
                                <h2>{caseStudy.subtitle}</h2>
                                <p>{caseStudy.description}</p>
                                <a
                                  href={caseStudy.link}
                                  className="hover-panel-link"
                                >
                                  Explore More{" "}
                                  <i className="fa-solid fa-angle-right"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="hps-bot">
                    <a
                      href="https://example.com/case-studies"
                      className="btn btn-basic btn-white-hover hps-btn"
                      style={{
                        background: "linear-gradient(45deg, #fecc00, #ff9900)",
                      }}
                    >
                      View All Case Studies
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
