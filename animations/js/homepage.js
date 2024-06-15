function openPage(page) {
  if (page == "spinners") {
    window.location.replace("pages/spinners.html");
  } else if (page == "effects") {
    window.location.replace("pages/effects.html");
  } else if (page == "index") {
    window.location.replace("../index.html");
  } else {
    console.log("error: unknown page");
  }
}
