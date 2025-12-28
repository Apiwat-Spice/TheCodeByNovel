function login() {
  const u = username.value;
  const p = password.value;

  const user = db.users.find(x => x.username === u && x.password === p);
  if (!user) return alert("Login failed");

  localStorage.setItem("userId", user.id);
  window.location.href = "library.html";
}
