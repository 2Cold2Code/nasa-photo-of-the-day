export default function insertAxios() {
    const axScript = document.createElement("script");
    axScript.src = "https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js";
    axScript.setAttribute("defer", true);
    if (document.querySelector('head')) {
        const head = document.querySelector("head");
      head.appendChild(axScript);
    } else {
      const head = document.createElement('head');
      head.appendChild(axScript);
    }
  }