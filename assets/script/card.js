function createCards() {
  let article = document.createElement("article");
  article.innerHTML = `
    <form class="carte">
        <input type="text" id="title" class="title" placeholder="Enter your title"></input>
        <textarea id="text" name="message" class="textInput" placeholder="Enter your text"></textarea>
    </form>`;

  let section = document.getElementById("table");
  section.appendChild(article);
}

let test = document.getElementById("test");
test.addEventListener("click", createCards);