import React from 'react';
import { Helmet } from 'react-helmet-async';
export const JsonLd = ({ data }) => (React.createElement(Helmet, null,
    React.createElement("script", { type: "application/ld+json" }, JSON.stringify(data))));
//# sourceMappingURL=JsonLd.js.map