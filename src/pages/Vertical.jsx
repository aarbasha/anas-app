"use client";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FaUpwork, FaDartLang, FaFlutter } from "react-icons/fa6";
import {
  FaAws,
  FaCss3,
  FaHtml5,
  FaJs,
  FaLaravel,
  FaNodeJs,
  FaPhp,
  FaReact,
  FaStar,
  FaStripe,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { FadeLeft } from "@/animation/AnimationItems";
import { SiNextdotjs } from "react-icons/si";

const Vertical = () => {
  return (
    <VerticalTimeline
      lineColor="#ff9c00"
      className="vertical-timeline-custom-line "
      animate
      animationDuration={2000}
    >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #ff5900" }}
        date="2013 - 2014"
        iconStyle={{ background: "#000", color: "#ff5900" }}
        icon={<FaHtml5 />}
      >
        <h3 className="vertical-timeline-element-title">
          Html & Css & JS & BootStrap
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle"></h4>
        <p>
         
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #0076ff" }}
        date="2014 - 2020"
        iconStyle={{ background: "#000", color: "#0076ff" }}
        icon={<FaPhp />}
      >
        <h3 className="vertical-timeline-element-title">PHP & MySQL</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #ff2d20" }}
        date="2016 -2025"
        iconStyle={{ background: "#000", color: "#ff2d20" }}
        icon={<FaLaravel />}
      >
        <h3 className="vertical-timeline-element-title">Laravel & API</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2019 - 2025"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #00c6e9" }}
        iconStyle={{ background: "#000", color: "#00c6e9" }}
        icon={<FaReact />}
      >
        <h3 className="vertical-timeline-element-title">Reactjs</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>
          Creative Direction, User Experience, Visual Design, SEO, Online
          Marketing
        </p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2024 - 2025"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #08ff21" }}
        iconStyle={{ background: "#000", color: "#08ff21" }}
        icon={<FaNodeJs />}
      >
        <h3 className="vertical-timeline-element-title">NodeJS & Express </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2023 - 2025"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #000" }}
        iconStyle={{ background: "#000", color: "#fff" }}
        icon={<SiNextdotjs />}
      >
        <h3 className="vertical-timeline-element-title">
          NextJS ((All Versions)){" "}
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p> */}
      </VerticalTimelineElement>

      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="2018 - 2025"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #00b300" }}
        iconStyle={{ background: "#00b300", color: "#fff" }}
        icon={<FaUpwork />}
      >
        <h3 className="vertical-timeline-element-title">
          Full Stack Web Developer on Upwork
        </h3>
        {/* <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>User Experience, Visual Design</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2024"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #e91e63" }}
        iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
        icon={<FaAws />}
      >
        <h3 className="vertical-timeline-element-title">Amazon Web Services</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2023"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #626CD9" }}
        iconStyle={{ background: "#fff", color: "#626CD9" }}
        icon={<FaStripe />}
      >
        <h3 className="vertical-timeline-element-title">Stripe Platform</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>Creative Direction, User Experience, Visual Design</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2022 - 2024"
        contentStyle={{ background: "#00000080", color: "#fff" }}
        contentArrowStyle={{ borderRight: "20px solid  #02569B" }}
        iconStyle={{ background: "#fff", color: "#02569B" }}
        icon={<FaFlutter />}
      >
        <h3 className="vertical-timeline-element-title">Dart & Flutter</h3>
        {/* <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p> */}
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
        icon={<FaStar />}
      />
    </VerticalTimeline>
  );
};

export default Vertical;
