const root = ReactDOM.createRoot(document.getElementById('root'));

const parent = React.createElement("child",{},[
    React.createElement("h1",{id: "hello1"},"Hello this is H1"),
    React.createElement("h1",{id: "hello2"},"Hello this is H2")
]);


root.render(parent);