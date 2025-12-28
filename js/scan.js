let video = document.getElementById("video");
let currentStream = null;
let usingFrontCamera = false;
let flashOn = false;
let currentTrack = null;

// ▶️ เปิดกล้อง
async function startCamera() {
  if (currentStream) {
    currentStream.getTracks().forEach(track => track.stop());
  }

  const constraints = {
    video: {
      facingMode: usingFrontCamera ? "user" : "environment"
    }
  };

  currentStream = await navigator.mediaDevices.getUserMedia(constraints);
  video.srcObject = currentStream;

  currentTrack = currentStream.getVideoTracks()[0];
}

// 🔄 สลับกล้องหน้า / หลัง
document.getElementById("switchCamera").onclick = () => {
  usingFrontCamera = !usingFrontCamera;
  startCamera();
};

// 🔦 เปิด / ปิดแฟลช
document.getElementById("toggleFlash").onclick = async () => {
  if (!currentTrack) return;

  const capabilities = currentTrack.getCapabilities();
  if (!capabilities.torch) {
    alert("อุปกรณ์นี้ไม่รองรับแฟลช");
    return;
  }

  flashOn = !flashOn;
  await currentTrack.applyConstraints({
    advanced: [{ torch: flashOn }]
  });
};

// 🖼 อัปโหลดรูป QR แทนการสแกน
document.getElementById("uploadImage").addEventListener("change", (e) => {
  const file = e.target.files[0];
  if (!file) return;

  // mockup: สมมุติอ่าน QR ได้
  document.getElementById("redeemCode").value = "ABC-123-XYZ";
  alert("อ่าน QR จากรูปเรียบร้อย");
});

// 🎫 ใช้โค้ด
function redeemByCode() {
  const code = document.getElementById("redeemCode").value.trim();
  if (!code) return alert("กรุณาใส่โค้ด");

  alert("โค้ดถูกใช้แล้ว หนังสือถูกเพิ่มเข้าคลัง");
  // ตรงนี้คุณจะเอาไปเชื่อม db.redeemCodes + library
}

startCamera();
