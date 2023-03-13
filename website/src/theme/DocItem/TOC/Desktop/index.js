import React from 'react';
import Desktop from '@theme-original/DocItem/TOC/Desktop';
import styles from './styles.module.css';

export default function DesktopWrapper(props) {
  return (
    <>
      <h5>Share this page</h5>
      <div style={{marginBottom: '2em'}}>
        <a className={styles.socialButton} href={getSocialLinkForCurrentPage('twitter')} target="_blank"><img src="https://static.addtoany.com/buttons/twitter.svg" /></a>
        <a className={styles.socialButton} href={getSocialLinkForCurrentPage('email')} target="_blank"><img src="https://static.addtoany.com/buttons/email.svg" /></a>
        <a className={styles.socialButton} href={getSocialLinkForCurrentPage('linkedin')} target="_blank"><img src="https://static.addtoany.com/buttons/linkedin.svg" /></a>
        <a className={styles.socialButton} href={getSocialLinkForCurrentPage('hacker_news')} target="_blank"><img src="https://static.addtoany.com/buttons/y18.svg" /></a>
        <a className={styles.socialButton} href={getShareLinkForCurrentPage()} target="_blank"><img src="https://static.addtoany.com/buttons/a2a.svg" /></a>
      </div>

      <h5>Table of Content</h5>
      <Desktop {...props} />
    </>
  );
}

function getSocialLinkForCurrentPage(site) {
  return `https://www.addtoany.com/add_to/${site}?linkurl=${encodeURIComponent(document.location.href)}&amp;linkname=${encodeURIComponent(document.title)}`;
}

function getShareLinkForCurrentPage() {
  return `https://www.addtoany.com/share#url=${encodeURIComponent(document.location.href)}&amp;linkname=${encodeURIComponent(document.title)}`;
}
