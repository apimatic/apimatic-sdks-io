import React from 'react';
import Link from '@docusaurus/Link';
import useIsBrowser from '@docusaurus/useIsBrowser';

export default function MDXA(props) {
  const isBrowser = useIsBrowser();

  props = { ...props };
  updatePropsForApimaticLinks(props, isBrowser);

  return <Link {...props} />;
}

// In case of APIMatic links, we add the Hubspot cross-domain tracking params and remove
// the "noopener noreferrer" rel attribute. The cross-domain tracking params are provided
// by the src/clientModules/trackHubspotPageView.js script.
function updatePropsForApimaticLinks(props, isBrowser) {
  const { href } = props;
  if (href === '' || href === null || href === undefined || !href.startsWith('https://')) return;

  const parsed = new URL(href);

  const areHubspotTrackingParamsAvailable = isBrowser && !!window._apimaticCrossDomainTrackingParams;
  const isKnownApimaticDomain = isApimaticDomain(parsed);
  const hasHubspotTrackingParams = parsed.searchParams.has('__hstc');

  if (isKnownApimaticDomain) {
    props.rel = undefined;

    if (areHubspotTrackingParamsAvailable && !hasHubspotTrackingParams) {
      parsed.search += (parsed.search ? '&' : '?') + window._apimaticCrossDomainTrackingParams;
      props.href = parsed.toString();
    }  
  }
}

const apimaticDomains = ['apimatic.io', 'apimatic.dev'];

function isApimaticDomain(parsed) {
  return apimaticDomains.some(domain => parsed.hostname === domain || parsed.hostname.endsWith("." + domain));
}
