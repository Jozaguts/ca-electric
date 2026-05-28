import React from "react";

export const Icon = ({ name, size = 28 }) => {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    width: size,
    height: size,
  };
  switch (name) {
    case "zap":      return (<svg {...common}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>);
    case "sun":      return (<svg {...common}><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>);
    case "wrench":   return (<svg {...common}><path d="M14.7 6.3a4 4 0 0 1-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 1 5.4-5.4l-2-2 1.4-1.4 2 2a4 4 0 0 1 0 5.7l-2-2"/></svg>);
    case "shield":   return (<svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></svg>);
    case "panel":    return (<svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/></svg>);
    case "file":     return (<svg {...common}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>);
    case "phone":    return (<svg {...common}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z"/></svg>);
    case "arrow":    return (<svg {...common}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>);
    case "check":    return (<svg {...common}><polyline points="20 6 9 17 4 12"/></svg>);
    case "alert":    return (<svg {...common}><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>);
    case "wa":       return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M17.5 14.4c-.3-.1-1.7-.8-2-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-.9 1.1-.2.2-.3.2-.6.1-1.7-.9-2.9-1.6-4-3.6-.3-.5.3-.5.8-1.6.1-.2 0-.4 0-.5-.1-.1-.7-1.5-.9-2.1-.2-.6-.4-.5-.6-.5h-.5c-.2 0-.5.1-.7.3-.9.9-1.4 2.1-1.4 3.5 0 .2 0 .4.1.6.4 1.3 1.2 2.4 2.4 3.6 1.6 1.6 3.6 2.7 4.5 2.7.3 0 .5 0 .7-.1.5-.1 1.7-.7 1.9-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.4M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.5 1.4 5L2 22l5.1-1.3c1.5.8 3.2 1.3 4.9 1.3 5.5 0 10-4.5 10-10S17.5 2 12 2"/></svg>);
    case "facebook": return (<svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size}><path d="M22 12c0-5.5-4.5-10-10-10S2 6.5 2 12c0 5 3.7 9.1 8.4 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.3v7c4.6-.8 8.4-4.9 8.4-9.9z"/></svg>);
    case "map":      return (<svg {...common}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>);
    case "mail":     return (<svg {...common}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>);
    case "ground":   return (<svg {...common}><path d="M12 3v6"/><path d="M5 9h14"/><path d="M7 13h10"/><path d="M9 17h6"/><path d="M11 21h2"/></svg>);
    case "flame":    return (<svg {...common}><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.4-.6-2.4-1.5-3.5C8.6 7.4 8 6.2 8 4.9c0-.5.2-1 .5-1.4C5.5 4.8 3 8.2 3 12a9 9 0 0 0 18 0c0-3.5-1.3-6.5-3.5-8.6.3.4.5.9.5 1.4 0 1.3-.6 2.5-1.5 3.6-.9 1.1-1.5 2.1-1.5 3.5a2.5 2.5 0 1 1-5 0c0-1 .3-2 .8-2.7"/></svg>);
    default: return null;
  }
};
