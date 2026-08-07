import React from "react";
import "../styles/stepper.css";
import work from "../data/Work";
import grad from "../data/Edu";
import {
  ExperienceWrapper,
  WorkWrapper,
  EdWrapper,
  EdContent,
  Stepper,
  StepperHead,
  StepperDesc,
} from "../styles/workStyle.js";
import Layout from "../components/layout";

const Experience = () => (
  <Layout>
    <ExperienceWrapper>
      <WorkWrapper>
        <h1>Work Experience</h1>
        <div className="experience-stepper">
          {work.map((item) => (
            <div key={item.id} className="step">
              <div>
                <div className="circle" />
                <div className="line" />
              </div>
              <Stepper>
                <StepperHead>
                  <div>
                    <h3>{item.designation}</h3>
                    <a href={item.companyLink} target="_blank" rel="noreferrer">
                      {item.name}
                    </a>
                    <p>{item.dated}</p>
                  </div>
                </StepperHead>
                <StepperDesc
                  dangerouslySetInnerHTML={{
                    __html: item.description,
                  }}
                />
              </Stepper>
            </div>
          ))}
        </div>
      </WorkWrapper>

      <EdWrapper>
        <h1>Education</h1>
        <EdContent>
          {grad.map((item) => (
            <div key={item.id}>
              <p>
                {item.degree} in {item.major}, {item.name}
              </p>
              <p>{item.dated}</p>
            </div>
          ))}
        </EdContent>
      </EdWrapper>
    </ExperienceWrapper>
  </Layout>
);

export default Experience;
