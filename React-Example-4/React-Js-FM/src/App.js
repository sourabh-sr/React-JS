import React from "react";
import {
    render
} from "react-dom";
import Wizard from "./Wizard";

const App = () => {
    return React.createElement(
        "div", {},
        React.createElement("h2", {}, "Welcome to Hogwards"),
        React.createElement(Wizard, {
            name: "HarryPotter",
            wand: "Phoneix feather",
            power: "Love"
        }),
        React.createElement(Wizard, {
            name: "Voldemort",
            wand: "Phoneix featther(Brother)",
            power: "Ambition"
        }),
        React.createElement(Wizard, {
            name: "Dumbeldore",
            wand: "Elder Wand",
            power: "Knowledge"
        })
    );
};

render(React.createElement(App), document.getElementById("root"));