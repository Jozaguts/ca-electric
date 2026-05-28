export function trackEvent(eventName, params = {}) {
  if (typeof window === "undefined") return;

  const eventParams = {
    page_path: window.location.pathname,
    transport_type: "beacon",
    ...params,
  };

  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, eventParams);
    return;
  }

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: eventName,
    ...eventParams,
  });
}
