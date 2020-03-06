/** This is bring in props */

// const Wizard = (props) => {
//     return React.createElement("div", {}, [
//         React.createElement("h1", {}, props.name),
//         React.createElement("h2", {}, props.wand),
//         React.createElement("h2", {}, props.power)
//     ])
// }

/**This is Destructuring of Props */

const Wizard = ({name, wand, power}) => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, name),
        React.createElement("h2", {}, wand),
        React.createElement("h2", {}, power)
    ])
}

const App = () => {
    return React.createElement("div", {id: 'attributes'},
        React.createElement("h2",{},"Welcome to Hogwards"),
        React.createElement(Wizard, {name: "HarryPotter", wand: "Phoneix feather", power: "Love"}),
        React.createElement(Wizard, {name: "Voldemort", wand: "Phoneix featther(Brother)", power: "Ambition"}),
        React.createElement(Wizard, {name: "Dumbeldore", wand: "Elder Wand", power: "Knowledge"})
   )
}

ReactDOM.render(React.createElement(App),document.getElementById("root"));