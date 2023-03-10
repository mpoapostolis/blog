import "./style.css";
// import { marked } from "marked";

fetch("/index.md").then((res) => {
  res.text().then((text) => {
    // const x = marked(text);
    // const blog = document.querySelector("#blog");
    // if (blog) blog.innerHTML = x;
    console.log(text);
  });
});
