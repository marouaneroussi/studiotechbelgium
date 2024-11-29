import Navbar from "./components/Navbard";
import Header from "./components/Header";
import AchievementsSection from "./components/AchievementsSection";
import StatsSection from "./components/StateSection";
import ReferencesSection from "./components/ReferencesSection";
import MapComponent from "./components/MapComponent";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

export default function Home() {
  const solutions = [
    {
      title: "Television Channel Solutions",
      description:
        "Complete broadcast infrastructure setup, including master control room, playout automation, and content management systems.",
      iconPath:
        "M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zm-10-7h9v6h-9z",
      link: "/solutions/television-channel",
    },
    {
      title: "Advanced Virtual Studio Solutions",
      description:
        "State-of-the-art virtual production facilities with real-time rendering, tracking systems, and green screen solutions.",
      iconPath:
        "M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z",
      link: "/solutions/virtualstudio",
    },
    {
      title: "Conference Room Systems",
      description:
        "Advanced audio and video conferencing solutions with integrated control systems and collaborative tools.",
      iconPath:
        "M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z",
      link: "/solutions/conference-room",
    },
  ];

  return (
    <>
      <Navbar />
      <Header />
      <div className="min-h-screen">
        <div className="hero py-12  dark:bg-gray-900">
          {/* Solutions Grid */}
          <div className="solutions-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-screen-xl mx-auto px-4 py-20">
            {solutions.map((solution, index) => (
              <div
                key={index}
                className="solution-card p-6 overflow-hidden text-center relative  rounded-lg shadow-lg transform hover:shadow-xl transition-transform duration-300"
              >
                <svg
                  className="solution-icon w-20 h-20 mb-8 text-center center mx-auto"
                  viewBox="0 0 24 24"
                >
                  <defs>
                    <linearGradient
                      id={`grad-${index}`}
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop offset="0%" style={{ stopColor: "#fecc00" }} />{" "}
                      {/* Yellow */}
                      <stop
                        offset="100%"
                        style={{ stopColor: "#ff9900" }}
                      />{" "}
                      {/* Orange */}
                    </linearGradient>
                  </defs>
                  <path
                    fill={`url(#grad-${index})`}
                    d={solution.iconPath}
                  ></path>
                </svg>
                <h2 className="text-[1.5rem] text-center font-semibold mb-8 text-[#fecc00] w-3/4 mx-auto">
                  {solution.title}
                </h2>
                <p className="text-gray-300 mb-8 opacity-80 leading-6 ">
                  {solution.description}
                </p>
                <a
                  href={solution.link}
                  className=" view-more-button  inline-flex items-center  px-8 py-3 bg-gradient-to-r bg-[#fecc00] text-gray-900 font-bold rounded-full transition-transform duration-300 hover:scale-105"
                >
                  Learn More
                </a>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="view-more-container text-center mt-8">
            <a
              href="/solutions"
              className="view-more-button inline-block px-8 py-3 my-20 bg-gradient-to-r from-[#fecc00] to-[#ff9900] text-gray-900 font-bold rounded-full transition-transform duration-300 hover:scale-105"
            >
              View All Solutions
            </a>
          </div>
        </div>
      </div>
      <AchievementsSection />
      <StatsSection />
      <ReferencesSection />

      <MapComponent />
      {/* Other contact page content here */}

      <ContactSection />
      <Footer />
    </>
  );
}
