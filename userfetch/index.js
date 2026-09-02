const conatainer = document.getElementById("container");

console.log(conatainer);

const button = document.getElementById("btn");
console.log(button);

const h2 = document.getElementById("data");
const loader = document.getElementById("loader");

async function fetchData() {
    try {
        loader.innerHTML = "fetching data..";

        const serverData = await fetch("https://fakestoreapi.com/products");
        const JSONData = await serverData.json();

        // console.log(JSONData[0].title)
        // h2.innerHTML = (JSONData[1].title);

        let table = `<table border=2px>
        ${
            JSONData.map((ele) => (`
                <tr>
                    <td>
                        <img src="${ele.image}" height="200px" width="200px">
                    </td>
                    <td>${ele.title}</td>
                    <td>${ele.price}</td>
                    <td>${ele.description}</td>
                </tr>
            `))
        }
        </table>`;

        conatainer.innerHTML = table;

    } catch (e) {
        console.log("Error is:" + e);
        loader.innerHTML = "Error is" + e;
    }
    finally {
        loader.innerHTML = "";
    }
}

button.addEventListener("click", fetchData);