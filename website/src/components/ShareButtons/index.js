import React from 'react';
import styles from "./styles.module.css";

export default function ShareButtons() {
    return (
      <div className={styles.shareRow}>
        <span className={styles.shareHeading}>Share this page:</span>
        <span>
          <a
            className={styles.socialButton}
            href="javascript:;"
            onClick={() => getSocialLinkForCurrentPage("twitter")}
            title="Share on Twitter"
          >
            <img src="https://static.addtoany.com/buttons/twitter.svg" />
          </a>
          <a
            className={styles.socialButton}
            href="javascript:;"
            onClick={() => getSocialLinkForCurrentPage("email")}
            title="Share via Email"
          >
            <img src="https://static.addtoany.com/buttons/email.svg" />
          </a>
          <a
            className={styles.socialButton}
            href="javascript:;"
            onClick={() => getSocialLinkForCurrentPage("linkedin")}
            title="Share on LinkedIn"
          >
            <img src="https://static.addtoany.com/buttons/linkedin.svg" />
          </a>
          <a
            className={styles.socialButton}
            href="javascript:;"
            onClick={() => getSocialLinkForCurrentPage("hacker_news")}
            title="Share on Hacker News"
          >
            <img src="https://static.addtoany.com/buttons/y18.svg" />
          </a>
          <a
            className={styles.socialButton}
            href="javascript:;"
            onClick={() => getShareLinkForCurrentPage()}
            title="Share on other networks"
          >
            <img src="https://static.addtoany.com/buttons/a2a.svg" />
          </a>
        </span>
      </div>
    )
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
  