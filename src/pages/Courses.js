import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// Images
import react from "../img/react.png";
import javascript from "../img/js.png";
import soon from "../img/soon.png";

const Courses = () => {
  return (
    <StyledCourses>
      <Course>
        <h2>Interaktiv React va Redux</h2>
        <div className="line"></div>
        <Link>
          <img src={react} alt="react-redux" />
        </Link>
      </Course>
      <Course>
        <h2>Tez kunda 😯</h2>
        <div className="line"></div>
        <Link>
          <img src={soon} alt="tez kunda" />
        </Link>
      </Course>
      <Course>
        <h2>Interaktiv JavaScript</h2>
        <div className="line"></div>
        <Link>
          <img src={javascript} alt="javascript" />
        </Link>
      </Course>
    </StyledCourses>
  );
};

const StyledCourses = styled.div`
  min-height: 100vh;
  padding: 5rem 10rem;
  h2 {
    padding: 1rem 0rem;
  }
`;

const Course = styled.div`
  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;

export default Courses;
