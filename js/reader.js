const params = new URLSearchParams(window.location.search);
const bookId = params.get("book");

const book = db.books.find(b => b.id === bookId);

document.getElementById("title").innerText = book.title;
const content = document.getElementById("content");

// สำคัญมาก: ใช้ innerText เพื่อรักษาขึ้นบรรทัด
content.innerText = book.content;

const myBooks = JSON.parse(localStorage.getItem("library")) || [];

if (!myBooks.includes(bookId)) {
  alert("⛔ คุณยังไม่ได้รับสิทธิ์อ่านนิยายเล่มนี้");
  window.location.href = "library.html";
}

document.getElementById("title").innerText = book.title;
document.getElementById("content").innerText = book.content;

let size = 18;
function fontPlus() {
  size += 2;
  content.style.fontSize = size + "px";
}
function fontMinus() {
  size -= 2;
  content.style.fontSize = size + "px";
}

function toggleTheme() {
  document.body.classList.toggle("bg-dark");
  document.body.classList.toggle("text-light");
}
