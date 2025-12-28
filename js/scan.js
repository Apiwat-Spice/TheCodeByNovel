const user = db.users.find(u => u.id == localStorage.getItem("userId"));

// ===== QR SCAN =====
const qr = new Html5Qrcode("reader");

qr.start(
  { facingMode: "environment" },
  { fps: 10, qrbox: 250 },
  (decodedText) => {
    code.value = decodedText;
    qr.stop();
  }
);

// ===== Redeem Code =====
function redeem() {
  const c = code.value.trim();
  const userId = localStorage.getItem("userId");

  const redeem = db.redeemCodes.find(r => r.code === c);
  if (!redeem) return alert("❌ โค้ดไม่ถูกต้อง");
  if (redeem.usedBy) return alert("❌ โค้ดนี้ถูกใช้แล้ว");

  // ดึง library จาก localStorage
  let library = JSON.parse(localStorage.getItem("library")) || [];

  if (library.includes(redeem.bookId)) {
    return alert("📚 นิยายเล่มนี้มีอยู่แล้ว");
  }

  library.push(redeem.bookId);

  // บันทึกถาวร
  localStorage.setItem("library", JSON.stringify(library));

  // mark code used (mock)
  redeem.usedBy = userId;

  alert("✅ เพิ่มนิยายเข้าคลังแล้ว");
  window.location.href = "library.html";
}
