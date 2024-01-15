import React from 'react';
import Link from '@docusaurus/Link';


export default function MDXA(props) {
  props = { ...props };
  updatePropsForApimaticLinks(props);

  return <Link {...props} />;
}

// In case of APIMatic links, we add the Hubspot cross-domain tracking params and remove
// the "noopener noreferrer" rel attribute. The cross-domain tracking params are provided
// by the src/clientModules/trackHubspotPageView.js script.
function updatePropsForApimaticLinks(props) {
  const { href } = props;
  if (href === '' || href === null || href === undefined || !href.startsWith('https://')) return;

  const parsed = new URL(href);

  const areHubspotTrackingParamsAvailable = !!window._apimaticCrossDomainTrackingParams;
  const isKnownApimaticDomain = isApimaticDomain(parsed);
  const hasHubspotTrackingParams = parsed.searchParams.has('__hstc');

  if (areHubspotTrackingParamsAvailable && isKnownApimaticDomain && !hasHubspotTrackingParams) {
    parsed.search += (parsed.search ? '&' : '?') + window._apimaticCrossDomainTrackingParams;
    props.href = parsed.toString();
    props.rel = undefined;
  }
}

const apimaticDomains = ['apimatic.io', 'apimatic.dev'];

function isApimaticDomain(parsed) {
  return apimaticDomains.some(domain => parsed.hostname === domain || parsed.hostname.endsWith("." + domain));
}
