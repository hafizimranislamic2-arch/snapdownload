
const form = document.getElementById("download-form");
const input = document.getElementById("media-url");
const status = document.getElementById("status");

if (form && input && status) {
  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const link = input.value.trim();

    try {
      const url = new URL(link);

      if (!["http:", "https:"].includes(url.protocol)) {
        throw new Error("Invalid URL");
      }

      status.textContent = "Opening your media link...";

      const response = await fetch(url.href, { method: "HEAD" });

      if (!response.ok) {
        throw new Error("Download unavailable");
      }

      const type = response.headers.get("content-type") || "";

      if (!type.startsWith("video/") && !type.startsWith("image/")) {
        throw new Error("This is not a direct media file");
      }

      const a = document.createElement("a");
      a.href = url.href;
      a.download = "";
      a.target = "_blank";
      a.rel = "noopener";
      a.click();

      status.textContent = "Download request sent. Check your browser.";

    } catch (error) {
      status.textContent =
        "Direct download unavailable. Check the link or source permissions.";
    }
  });
}

const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();
