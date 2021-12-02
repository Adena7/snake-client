const net = require("net");
const { stdin } = require("process");
let IP = '165.227.47.243';
const PORT = 50541;
// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");
  conn.on("connect", () => {
    console.log("Successfully connected to game server");
    conn.write("Name: AAA")
    // setTimeout(() => {
    //     conn.write("Move: up"); 
    // }, 1000);
    // setTimeout(() => {
    //     conn.write("Move: left"); 
    // }, 2000);
})
// interpret incoming data as text
conn.on("data", (data) => {
    console.log(data)
})
  return conn;
};

module.exports = { connect };