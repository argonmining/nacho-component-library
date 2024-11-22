import React from 'react';
import { Helmet } from 'react-helmet-async';
export var SEO = function (_a) {
    var title = _a.title, description = _a.description, keywords = _a.keywords, canonicalUrl = _a.canonicalUrl;
    var fullTitle = "".concat(title, " | KatScan - KRC-20 Explorer for Kaspa");
    return (React.createElement(Helmet, null,
        React.createElement("title", null, fullTitle),
        React.createElement("meta", { name: "description", content: description }),
        React.createElement("meta", { name: "keywords", content: keywords }),
        canonicalUrl && React.createElement("link", { rel: "canonical", href: canonicalUrl })));
};
