
const allParagraphs = document.getElementsByTagName("p");
console.log(allParagraphs);
console.log(allParagraphs[1]);

const classElements = document.getElementsByClassName("para");
console.log(classElements);

const singleElement = document.getElementById("head2");
console.log(singleElement);

const elementByQuery = document.querySelector("p")
const eleByQuery = document.querySelector(".para2")
const elementByQue = document.querySelector("#head2")
console.log(elementByQuery,eleByQuery,elementByQue);

const elementsByQuery = document.querySelectorAll(".para2")
console.log(elementsByQuery);


const container = document.getElementById("container");
console.log(container.innerText); // show only visiable content
console.log(container.textContent); // Hidden text will also show
console.log(container.innerHTML);
// container.innerText = "this is changed by <h1>JS</h1> "
// container.innerHTML = "this is changed by <h1>JS</h1>"

console.log(container.id,container.className);
container.className = "background"
container.setAttribute("id","containerByJs");
console.log(container.id);
// const container2 = document.getElementById("containerByJs");

elementByQuery.classList.add("cl5");
elementByQuery.classList.remove("cl3");
elementByQuery.classList.toggle("cl5"); // if class present then remove, if not then add
console.log(elementByQuery.classList);


console.log(container.children); // list of chils i.e -> [span, p, article]
console.log(container.children[1]); //para
console.log(container.children[1].parentElement); // para parent i.e "div"
console.log(container.children[1].nextElementSibling); // article
console.log(container.children[1].previousElementSibling); // span


container.children[1].nextElementSibling.innerText = "this is changed by JS"; // article
const val = "hello Paragraph";
const div = document.createElement("div");  // create element
div.className = "cl1 cl2";
div.id = "dynamic-contaier";

div.innerHTML = `<p>${val}</p> <p>${val} 2</p>`;

container.append(div);
container.prepend(div);

container.after(div);
container.before(div);
console.log(div);
