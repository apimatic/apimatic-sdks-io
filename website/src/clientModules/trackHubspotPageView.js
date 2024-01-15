// Hubspot's tracking code does not detect HTML5 history-based changes. This script hooks
// into Docusaurus's page lifecyle event and "tracks" the page when the page content
// is loaded.

export function onRouteDidUpdate({ location, previousLocation }) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    if (location.pathname !== previousLocation?.pathname) {
        if (window._apimaticNotFirstRouteChange) {
            // Track page view using Hubspot tracking API.
            // Ref: https://developers.hubspot.com/docs/api/events/tracking-code#set-page-path
            const _hsq = window._hsq = window._hsq || [];
            _hsq.push(['setPath', location.pathname]);
            _hsq.push(['trackPageView']);
        }

        // Avoid triggering the above code on first page load. Hubspot tracking code automatically
        // logs a page view when it is loaded. Doing it again will result in duplicate page view
        // event.
        window._apimaticNotFirstRouteChange = true;
    }
}