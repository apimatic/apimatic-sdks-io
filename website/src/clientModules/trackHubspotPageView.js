import ExecutionEnvironment from '@docusaurus/ExecutionEnvironment';

// Hubspot's tracking code does not detect HTML5 history-based changes. This script hooks
// into Docusaurus's page lifecyle event and "tracks" the page when the page content
// is loaded. Also, it stores the cross-domain tracking params into a global variable
// so that it can be inserted into APIMatic-owned domains.

export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    if (location.pathname !== previousLocation?.pathname) {
        if (window._apimaticNotFirstRouteChange) {
            // Unfortunately, the onRouteDidUpdate is fired too early by Docusaurus, without
            // waiting for the document title to be updated. We delay the code run to
            // so that we can capture the right document title. A less hacky solution is welcome.
            setTimeout(function () {
                // Track page view using Hubspot tracking API.
                // Ref: https://developers.hubspot.com/docs/api/events/tracking-code#set-page-path
                const _hsq = window._hsq = window._hsq || [];
                _hsq.push(['setPath', location.pathname]);
                _hsq.push(['trackPageView']);
            }, 300);
        }

        // Avoid triggering the above code on first page load. Hubspot tracking code automatically
        // logs a page view when it is loaded. Doing it again will result in duplicate page view
        // event.
        window._apimaticNotFirstRouteChange = true;
    }
}

// Get the cross-domain query parameters and store them in a string,
// so that they can be appended to links as needed.
if (ExecutionEnvironment.canUseDOM) {
    window._hsq = window._hsq || [];
    _hsq.push(['addIdentityListener', function (hstc, hssc, hsfp) {
        // Add these query parameters to any links that point to a separate tracked domain
        window._apimaticCrossDomainTrackingParams = '__hstc=' + hstc + '&__hssc=' + hssc + '&__hsfp=' + hsfp;
    }]);
}
