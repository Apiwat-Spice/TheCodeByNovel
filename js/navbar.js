function logout() {
  localStorage.removeItem("userId");
  localStorage.removeItem("library");
  window.location.href = "index.html";
}
document.querySelectorAll(".nav-link").forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});
