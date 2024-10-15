//apiconfig.js

let basrUrl;
let socketUrl;
if (import.meta.env.VITE_NODE_ENV === "production") {
baseUrl = "your-deployed-URL";
socketUrl = "wss://your-deployed-url";
} else {
baseUrl = "http://localhost:4000";
socketUrl = "ws://localhost:4000";
}
export { baseUrl, socketUrl };
