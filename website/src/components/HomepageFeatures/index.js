import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <a href = "/docs/best-practices/overview"> Best Practices </a>,
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Our best practices include key decisions to make before you start building SDKs, features 
        to include that boost developer productivity and the documentation and 
        support channels for engaging developers using your SDKs.
      </>
    ),
  },
  {
    title: <a href= "/docs/ways-to-build-sdks"> Ways to Build SDKs</a>,
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        In ways to build sdks, we do a deep dive on code generators, explore the reasons you may 
        choose to build SDKs from scratch and the right and wrong ways to engage community led 
        libraries.
      </>
    ),
  },
  {
    title: <a href= "/docs/industry-research/"> Industry Research </a> ,
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        We looked at 50+ companies with developer programs to examine trends around SDKs. How are 
        they building them, what languages are they building for and other insights.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
