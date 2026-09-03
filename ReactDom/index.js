const container = document.getElementById("root");
console.log(container);

const root = ReactDOM.createRoot(container);

const h2 = React.createElement(
    'h2',
    { style: { color: 'red', background: 'black' } },
    "Welcome to React"
);

const h1 = React.createElement(
    'h1',
    { style: { color: "green" } },
    "helo"
);

const img = React.createElement(
    'img',
    {
        src: './car.jpg',
        style: {
            height: '200px',
            width: '200px',
            borderRadius: '20px'
        }
    }
);

const div = React.createElement(
    'div',
    { style: { border: "2px solid red" } },
    h1,
    h2,
    img
);

// JSX
const div1 = (
    <div>
        <h2>Welcome TO JSX</h2>
    </div>
);

root.render(div1);