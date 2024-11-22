import React from 'react';
import { Helmet } from 'react-helmet-async';
export var JsonLd = function (_a) {
    var data = _a.data;
    return (React.createElement(Helmet, null,
        React.createElement("script", { type: "application/ld+json" }, JSON.stringify(data))));
};
