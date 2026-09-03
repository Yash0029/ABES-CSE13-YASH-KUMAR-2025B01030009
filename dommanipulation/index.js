const root = document.getElementById("root");
const button = document.getElementById("btn");

// console.log(button);
// console.log(root);

const h2 = document.createElement("h2");
const h1 = document.createElement("h1");
const img = document.createElement("img");
const dic = document.createElement("div");

function getData() {
    try {
        img.src = '../car.jpg';
        img.setAttribute('height', 200);
        img.setAttribute("width", 200);

        h2.innerHTML = "ABES ENGINEERING CLG";
        h2.style.color = "red";
        h2.style.background = "black";

        h1.innerHTML = `<h2 style="color:green">Welcome to Haryana</h2>`;

        dic.appendChild(img);
        dic.appendChild(h2);
        dic.appendChild(h1);

        root.appendChild(dic);
    }
    catch (e) {
        console.log(e);
    }
    finally {
        button.remove();
    }
}

button.addEventListener('click', getData);