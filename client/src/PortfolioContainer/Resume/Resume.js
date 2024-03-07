import React, { useState, useEffect } from "react";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../utilities/ScrollService";
import Animations from "../../utilities/Animations";
import "./Resume.css";

const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(
    fadeInScreenHandler
  );

  /*-------------------REUSABLE COMPONENTS------------------------*/
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ""}</span>

          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + "-" + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>

        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ""}</span>
        </div>

        <div className="resume-heading-description">
          <span>{props.description ? props.description : ""}</span>
        </div>
      </div>
    );
  };

  /*----------------------RESUME SECTIONS ICON--------------------*/
  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  /*---------------------------PROGRAMMING SKILLS---------------------*/
  const programmingSkillsDetails = [
    { skillCategory: "FRONT-END LANGUAGE", name: "HTML, CSS, JAVASCRIPT" },
    { skillCategory: "CSS FRAMEWORK", name: "BOOTSTRAP, Semantic UI" },
    { skillCategory: "JAVASCRIPT FRAMEWORK AND LIBRARIES", name: "REACT JS, REACT NATIVE, NODE JS" },
    { skillCategory: "PACKAGE MANAGER", name: "NPM" },
    { skillCategory: "DATABASE MANAGEMENT", name: "SQL, MONGO DB" },
    { skillCategory: "VERSION CONTROL", name: "GIT" },
    { skillCategory: "OTHERS", name: "Nginx, Docker, AWS, CI/CD" },
  ];

  /*---------------------PROJECT DETAILS-----------------------------*/
  const projectsDetails = [
    {
      title: "Personal Portfolio Website",
      description:
        "A Personal Portfolio website to showcase all my details and projects at one place.",
      subHeading: "Technologies Used: React JS, Bootsrap, Node Js, Express Js",
    },
    {
      title: "Task Manager",
      description:
        "A react app where you can add, view, update and delete tasks and manage a task list",
      subHeading: "Technologies Used: React JS, React Hooks, React Props ",
    },
    {
      title: "Expense Tracker",
      description:
        "An expense tracker where you can add, update, delete and keep track of all your expenses.",
      subHeading: "Technologies Used: React Native, React Navigation, Axios, Context API ",
    },
    {
      title: "Meals App",
      description:
        "A react native app where you can see the meals according to categories and add them as your favourite.",
      subHeading: "Technologies Used: React Native, React Navigation, Context API ",
    },
  ];

  /*---------------------RESUME DETAILS-----------------------------*/
  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"MASTER OF INFORMATION TECHNOLOGY AND SYSTEMS-SOFTWARE ENGINEERING"}
        subHeading={"Victorian Institute of Technology, Australia"}
        fromDate={"2023"}
        toDate={"Present"}
      />

      <ResumeHeading
        heading={"BACHELOR OF ELECTRONICS & COMMUNICATION ENGINEERING"}
        subHeading={
          "Kathford Int'l College Of Engineering & Management, Tribhivan University"
        }
        fromDate={"2016"}
        toDate={"2022"}
      />

      <ResumeHeading
        heading={"HIGH SCHOOL"}
        subHeading={"Lord Buddha High School"}
        fromDate={"2014"}
        toDate={"2016"}
      />
    </div>,

    /*--------------------------WORK EXPERIENCE-----------------------------*/
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={"Dzango Tech Accelerator "}
          subHeading={"Software Developer"}
          fromDate={"Feb 2022"}
          toDate={"Aug 2022"}
        />

        <div className="experience-description">
          <span className="resume-description-text">
            <ul>
              <li> Worked with back-end developers to design APIs.</li>
              <li>
                Planned website development, converting mockups into usable web
                presence with HTML, JavaScript, AJAX, and JSON coding.
              </li>
              <li>
                Coded websites using HTML, CSS, JavaScript, and jQuery
                languages.
              </li>
              <li>Technologies Used: React JS, Node.js, Mysql, Postgresql, MongoDB, Nginx, Docker, AWS, CI/CD</li>
            </ul>
          </span>
        </div>

        <ResumeHeading
          heading={"Code Karkhana"}
          subHeading={"React JS Developer "}
          fromDate={"Jul 2021"}
          toDate={"Feb 2022"}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            <ul>
              <li>
                Developed user-friendly web forms with validation and error
                handling.
              </li>
              <li>
                Worked with senior developers and designers to implement
                sofwares using HTML, CSS and JavaScript.
              </li>
              <li>
                Collaborated with in-house web designers to create sleek and
                innovative UI design.
              </li>
              <li>
                Built front-end web Interface for engineers to control and
                monitor onboard system that visualized perceived surroundings
                and set routes of autonomous driving system.
              </li>
              <li>Technologies Used: React JS, Redux, HTML, CSS, Bootsrap</li>
            </ul>
          </span>
        </div>
      </div>
    </div>,

    /*----------------------PROGRAMMING SKILLS-----------------------*/
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <span>{skill.skillCategory}</span>
          <p>{skill.name}</p>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Travelling"
        description="I love to explore new destinations, try the local cuisine and learn about the life style of people from differnt culture and regions."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div
      className="resume-container screen-container fade-in"
      id={props.id || ""}
    >
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
