export function trackEvent(eventCategory, eventAction, eventLabel, parameters = {}) {
    const eventProperties = {
        event_category: eventCategory,
        event_label: eventLabel,
        ...parameters,
    };
    if (typeof window.gtag === 'function') {
        window.gtag('event', eventAction, eventProperties);
    }
}
