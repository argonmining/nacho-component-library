import React from 'react';
import { Helmet } from 'react-helmet-async';
const SEO = ({ title, description, keywords, canonicalUrl }) => {
    const fullTitle = `${title} | KatScan - KRC-20 Explorer for Kaspa`;
    return (React.createElement(Helmet, null,
        React.createElement("title", null, fullTitle),
        React.createElement("meta", { name: "description", content: description }),
        React.createElement("meta", { name: "keywords", content: keywords }),
        canonicalUrl && React.createElement("link", { rel: "canonical", href: canonicalUrl })));
};
export default SEO;
//# sourceMappingURL=SEO.js.map