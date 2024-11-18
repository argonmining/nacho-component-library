import React from 'react';
import { Helmet } from 'react-helmet-async';
const JsonLd = ({ data }) => (React.createElement(Helmet, null,
    React.createElement("script", { type: "application/ld+json" }, JSON.stringify(data))));
export default JsonLd;
//# sourceMappingURL=JsonLd.js.map