import react from "react";
import {
  render
} from "react-dom";

const Wizard = ({
  name,
  wand,
  power
}) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, wand),
    React.createElement("h2", {}, power)
  ]);
};

const App = () => {
  return React.createElement(
    "div", {
      id: "attributes"
    },
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

ReactDOM.render(React.createElement(App), document.getElementById("root"));