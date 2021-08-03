// Variables

// ======
// Files
// ======
// e.g.
import "./images/rabbit.png";
import "./images/chick.jpg";
// Favicon
import favicon from "./favicon.ico";
// Webmanifest file
import "./manifest.webmanifest";

// =======
// Scripts
// =======
// e.g.
import "./styles.scss";
import { greet } from "./scripts/greetings";

// ==========
// HEADER TAG
// ==========
// - link element
// Append 'favicon' to head link tag
const faviconElement = document.querySelector("link[href='favicon.ico']");
faviconElement.href = favicon;
