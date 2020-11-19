import React from "react";

export default function Wizard({
    name,
    wand,
    power
}) {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, wand),
        React.createElement("h2", {}, power)
    ]);
};