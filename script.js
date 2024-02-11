// const title = document.querySelector("#heading");

// title.style.color = "red";

// const listItems = document.querySelectorAll("li");

// console.log(listItems);

// for (let li of listItems) {
//   li.style.fontSize = "1.25rem";
// }

const ul = document.querySelector("ul");

// const li = document.createElement("li");

// ul.append(li);

// const firstLi = document.querySelector("li");

// console.log(firstLi.innerText) // use this
// console.log(firstLi.textContent)
// console.log(firstLi.innerHTML) // this way has security issues

// li.innerText = "X-men";

// li.setAttribute("class", "js-added");

// console.log(document.querySelector(".js-added").innerText);

// li.removeAttribute("class");

// console.log(document.querySelector("li:last-child"));

// const title2 = document.querySelector("#heading");
// console.log(title2.classList.add('shit'));
// title2.classList.remove("shit");
// console.log(title2.classList);

// const html = document.documentElement;
// console.log(html.parentElement);
// console.log(html.parentNode);

const li = document.createElement("li");

const text = "Batman";

li.append(text);

ul.append(li);

for (let child of ul.children) {
  child.setAttribute("class", "franchise");
}

for (let franchise of document.querySelectorAll(".franchise")) {
  franchise.style.backgroundColor = "greenyellow";
  franchise.style.color = "blueviolet";
  franchise.style.fontWeight = "800";
  franchise.style.fontFamily = "arial";
  franchise.style.border = ".35rem solid blueviolet";
}

// document.querySelectorAll(".franchise")[2].remove();

// ul.children[3].removeAttribute("class");
// ul.children[2].setAttribute('class', 'test');
ul.children[2].classList.add("shit");
console.log(ul.children[2].classList);

const button = document.getElementsByTagName("button")[0];

console.log(button);

const addFranchise = (Event) => {
  const value = Event.target.parentElement.querySelector("input").value;

  if (value) {
    const li = document.createElement("li");

    li.append(value);

    li.style.backgroundColor = "greenyellow";
    li.style.color = "blueviolet";
    li.style.fontWeight = "800";
    li.style.fontFamily = "arial";
    li.style.border = ".35rem solid blueviolet";
    li.style.textTransform = "capitalize";

    ul.append(li);
  }

  Event.target.parentElement.querySelector("input").value = "";
};

button.addEventListener("click", addFranchise);

const deleteForm = document.getElementsByClassName("delete")[0];

deleteForm.getElementsByTagName("button")[0].onclick = (Event) => {
  const value = Event.target.parentElement.querySelector("input");

  for (let li of ul.children) {
    if (li.textContent.toLowerCase() === value.value.toLowerCase()) {
      // console.log(li.textContent);
      ul.removeChild(li);
    }
  }

  Event.target.parentElement.querySelector("input").value = "";
};
