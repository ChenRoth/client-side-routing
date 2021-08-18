main();

async function main() {
  console.log(
    "%cyou can edit your code in %cscript.js!",
    "color: lightblue; font-size: 18px; font-family: roboto",
    "color: red; font-size: 18px"
  );

  const welcomeMessage = await $.get("/api/");
  alert(welcomeMessage);
}
