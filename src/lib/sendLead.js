// gửi form-URLENCODED để không phát sinh preflight OPTIONS
export async function sendLead(payload = {}) {
  const url = import.meta.env.VITE_GS_URL;      // URL /exec mới nhất
  const secret = import.meta.env.VITE_GS_SECRET; // trùng Script property SECRET

  if (!url || !secret) {
    throw new Error("Thiếu VITE_GS_URL hoặc VITE_GS_SECRET trong .env");
  }

  // thêm userAgent, ip (ip để rỗng nếu không có server)
  const body = new URLSearchParams({
    ...payload,
    secret,
    ua: navigator.userAgent || "",
  });

  const res = await fetch(url, {
    method: "POST",
    body,             // KHÔNG tự set headers → đây là form-urlencoded mặc định
    redirect: "follow",
  });

  // cố gắng đọc JSON (nếu server trả text/plain vẫn ok)
  let data = null;
  try { data = await res.json(); } catch (_) { /* ignore */ }
  return data || { ok: res.ok };
}
