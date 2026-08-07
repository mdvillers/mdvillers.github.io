import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { siteMeta } from "../data/Seo";
import Helmet from "react-helmet";
import favicon from "../assets/images/mdv-favicon.png";

// import Header from '../components/Header/Header'
// import Footer from '../components/Footer/Footer'

import "../layouts/index.css";
import Header from "./Header/header";
import Footer from "./Footer/footer";

const Wrapper = styled.div`
  width: 100%;
  min-height: 100vh;
  padding: 3rem 8%;
  position: relative;
  background: var(--bg-color);
  color: var(--text-color);
  transition: background-color 0.2s ease, color 0.2s ease;
  --bg-color: #f3f4f6;
  --surface-color: #ffffff;
  --text-color: #111827;
  --muted-text-color: #4b5563;
  --border-color: #d1d5db;
  --accent-color: #0ea5e9;
  --accent-contrast-color: #0a192f;
  --shadow-color: rgba(15, 23, 42, 0.08);
  &[data-theme="dark"] {
    --bg-color: #0f172a;
    --surface-color: #111827;
    --text-color: #e5e7eb;
    --muted-text-color: #cbd5e1;
    --border-color: #334155;
    --accent-color: #38bdf8;
    --accent-contrast-color: #0f172a;
    --shadow-color: rgba(0, 0, 0, 0.3);
  }
  @media (max-width: 700px) {
    padding: 2rem 5%;
  }
`;

const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;

const ThemeButton = styled.button`
  border: 1px solid var(--border-color);
  border-radius: 8px;
  background: var(--surface-color);
  color: var(--text-color);
  padding: 8px 12px;
  cursor: pointer;
`;

const Layout = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedTheme = window.localStorage.getItem("theme");
    if (storedTheme === "dark" || storedTheme === "light") {
      setTheme(storedTheme);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("theme", nextTheme);
    }
  };

  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              title
            }
          }
        }
      `}
      render={(data) => (
        <>
          <Helmet
            title={data.site.siteMetadata.title}
            meta={[
              { name: "description", content: siteMeta.description },
              { name: "keywords", content: siteMeta.keywords.join(", ") },
              { name: "author", content: siteMeta.author },
              { name: "copyright", content: siteMeta.copyright },
            ]}
            link={[
              { rel: "shortcut icon", type: "image/png", href: `${favicon}` },
            ]}
          />
          <Wrapper data-theme={theme}>
            <TopBar>
              <Header />
              <ThemeButton onClick={toggleTheme} type="button">
                {theme === "light" ? "Dark mode" : "Light mode"}
              </ThemeButton>
            </TopBar>
            {children}
            <Footer />
          </Wrapper>
        </>
      )}
    />
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
