import React from "react";
import codeIcon from "../assets/images/code.svg";
import programmerIcon from "../assets/images/programmer.svg";
import AboutBox from "../components/About/AboutBox";
import about from "../data/About";
import {
  UserWrapper,
  UserTitle,
  UserDescription,
  DownloadButton,
  UserTopic,
} from "../styles/indexStyle.js";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <Layout>
      <UserWrapper>
        <UserTitle>
          Madhav <span>Aryal</span>
        </UserTitle>
        <UserDescription>
          <div>
            <p>
              Hello there, welcome to my portfolio. I am a full stack web
              developer and machine learning enthusiast currently studying in
              Pulchowk Campus.
            </p>
            {/*<DownloadButton
              href="https://github.com/mdvillers/mywebsite-react-gatsby/blob/master/Mdv-Resume.pdf"
              download
              title="Resume"
            >
              Download Resume
           </DownloadButton>*/}
          </div>
          <img src={codeIcon} alt="mdv self" width={200} />
          <br />
          <img src={programmerIcon} alt="mdv self" />
        </UserDescription>
        <UserTopic>
          {about.map((item) => (
            <AboutBox key={item.id} info={item} />
          ))}
        </UserTopic>
      </UserWrapper>
    </Layout>
  );
};

export default IndexPage;
