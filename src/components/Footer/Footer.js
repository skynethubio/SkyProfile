import { Email, GitHub } from "@material-ui/icons";
import React from "react";
import { useSelector } from "react-redux";
import { ReactComponent as TwitterIcon } from "../../assets/img/icons/013-twitter.svg";
import Dis from "../../svg/Discord";

// import {  as filledStar } from "@fortawesome/free-solid-svg-icons"
const Footer = () => {
  const userSession = useSelector((state) => state.userSession);

  return (
    <>
      {!userSession && (
        <footer className="footer">
          <ul>
            <li>Help</li>
            <li>
              <a
                href="/SkySpaces-Privacy.Notice.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="/SkySpaces-Terms.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms & Conditions
              </a>
            </li>
          </ul>
          <ul className="md-links">
            {/* <li>
    <a href="#0">
        <FacebookIcon />
    </a>
</li>
<li>
    <a href="#0">
        <WhatsappIcon />
    </a>
</li>
<li>
    <a href="#0">
        <YoutubeIcon />
    </a>
</li>
<li>
    <a href="#0">
        <LinkedInIcon />
    </a>
</li> */}
            {/* <li>
    <a href="#0">
        <InstaIcon />
    </a>
</li> */}
            <li>
              <a
                href="https://twitter.com/skynethub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
            </li>
            {/* <li>
    <a href="#0">
        <RedditIcon />
    </a>
</li> */}
            <li>
              <a
                href="https://discord.com/invite/zuwNT4YsWD"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Dis />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/skynethubio/skapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHub />
              </a>
            </li>

            <li>
              <a
                href="mailto:hello@skapp.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Email />
              </a>
            </li>
          </ul>
        </footer>
      )}
    </>
  );
};

export default Footer;
