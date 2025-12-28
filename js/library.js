const library = document.getElementById("library");

// ดึงข้อมูลจาก localStorage
const myBooks = JSON.parse(localStorage.getItem("library")) || [];

if (myBooks.length === 0) {
  library.innerHTML = `
    <p class="text-muted">
      📭 ยังไม่มีนิยายในคลัง กรุณาสแกน QR เพื่อเพิ่มนิยาย
    </p>
  `;
}

myBooks.forEach(bookId => {
  const book = db.books.find(b => b.id === bookId);

  const col = document.createElement("div");
  col.className = "col-6 col-md-3 col-lg-2";

  col.innerHTML = `
    <div class="card h-100 shadow-sm book-card">
      <img src="${book.cover}" class="card-img-top book-cover">
      <div class="card-body p-2">
        <h6 class="card-title text-center">${book.title}</h6>
      </div>
      <a href="reader.html?book=${book.id}" class="stretched-link"></a>
    </div>
  `;

  library.appendChild(col);
});
