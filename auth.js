/* Cutset single-user auth (static Pages dogfood).
 * Password never stored in plaintext. Session is sessionStorage only.
 * This is a gate for a private console, not production multi-user auth.
 */
(function (global) {
  const USER = "jon";
  // sha256("bUUj_Mo8kCZMUQ") — rotate by regenerating hash + telling Jon the new password
  const PASS_SHA256 =
    "74fb0b6c791fd0b35b498ae66a34d7f64a923a7dccae6461a0474e1ac2c89817";
  const SESSION_KEY = "cutset.session.v1";

  async function sha256Hex(text) {
    const buf = await crypto.subtle.digest(
      "SHA-256",
      new TextEncoder().encode(text)
    );
    return Array.from(new Uint8Array(buf))
      .map((b) => b.toString(16).padStart(2, "0"))
      .join("");
  }

  function readSession() {
    try {
      const raw = sessionStorage.getItem(SESSION_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) {
      return null;
    }
  }

  function writeSession(user) {
    sessionStorage.setItem(
      SESSION_KEY,
      JSON.stringify({ user, at: Date.now(), campaign: "RH" })
    );
  }

  function clearSession() {
    sessionStorage.removeItem(SESSION_KEY);
  }

  function isAuthed() {
    const s = readSession();
    return !!(s && s.user === USER);
  }

  async function login(username, password) {
    const u = (username || "").trim().toLowerCase();
    if (u !== USER) return { ok: false, error: "Unknown user." };
    const h = await sha256Hex(password || "");
    if (h !== PASS_SHA256) return { ok: false, error: "Wrong password." };
    writeSession(USER);
    return { ok: true };
  }

  function requireAuth(redirectTo) {
    if (!isAuthed()) {
      const next = encodeURIComponent(redirectTo || location.pathname);
      location.replace("login.html?next=" + next);
      return false;
    }
    return true;
  }

  function logout() {
    clearSession();
    location.replace("login.html");
  }

  global.CutsetAuth = {
    USER,
    login,
    logout,
    isAuthed,
    requireAuth,
    readSession,
  };
})(window);
