import React from "react";
import Desktop from "@theme-original/DocItem/TOC/Desktop";
import styles from "./styles.module.css";
import {useLocation} from '@docusaurus/router';


export default function DesktopWrapper(props) {
  const location = useLocation();

  return (
    <>
      <h5 className={styles.tocHeading}>Share This Page</h5>
      <div style={{ marginBottom: "2em" }}>
        <a
          className={styles.socialButton}
          href="javascript:;"
          onClick={() => getSocialLinkForCurrentPage("twitter")}
        >
          <img src="https://static.addtoany.com/buttons/twitter.svg" />
        </a>
        <a
          className={styles.socialButton}
          href="javascript:;"
          onClick={() => getSocialLinkForCurrentPage("email")}
        >
          <img src="https://static.addtoany.com/buttons/email.svg" />
        </a>
        <a
          className={styles.socialButton}
          href="javascript:;"
          onClick={() => getSocialLinkForCurrentPage("linkedin")}
        >
          <img src="https://static.addtoany.com/buttons/linkedin.svg" />
        </a>
        <a
          className={styles.socialButton}
          href="javascript:;"
          onClick={() => getSocialLinkForCurrentPage("hacker_news")}
        >
          <img src="https://static.addtoany.com/buttons/y18.svg" />
        </a>
        <a
          className={styles.socialButton}
          href="javascript:;"
          onClick={() => getShareLinkForCurrentPage()}
        >
          <img src="https://static.addtoany.com/buttons/a2a.svg" />
        </a>
      </div>

      <h5 className={styles.tocHeading}>Table of Content</h5>
      <Desktop {...props} />
    </>
  );
}

function getSocialLinkForCurrentPage(site) {
  window.open(
    `https://www.addtoany.com/add_to/${site}?linkurl=${encodeURIComponent(
      document.location.href
    )}&linkname=${encodeURIComponent(document.title)}`,
    "_blank"
  );
}

function getShareLinkForCurrentPage() {
  window.open(
    `https://www.addtoany.com/share#url=${encodeURIComponent(
      document.location.href
    )}&linkname=${encodeURIComponent(document.title)}`,
    "_blank"
  );
}
