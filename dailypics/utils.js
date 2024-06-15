import app from "../initialise.js";

var login = async () => {
  let username = document.getElementById("un").value;
  let password = document.getElementById("pw").value;
  try {
    await app.auth.signInWithEmailAndPassword(username, password);
    app.localdb = {
      signedIn: true,
      username: username,
      password: password,
    };
    localStorage.setItem("loggedIn","true")
    localStorage.setItem("username",username)
    window.location.replace("./home.html");
  } catch (err) {
    if (err.code === "auth/invalid-email") {
      alert("Please enter a valid email.");
    } else {
      alert("Login failed. Please try again later.");
    }
  }
};

var signup = async () => {
  let username = document.getElementById("un").value;
  let password = document.getElementById("pw").value;
  try {
    await app.auth.createUserWithEmailAndPassword(username, password);
    app.localdb = {
      signedIn: true,
      username: username,
      password: password,
    };
    localStorage.setItem("loggedIn","true")
    localStorage.setItem("username",username)
    window.location.replace("./home.html");
  } catch (err) {
    console.log(err)
    if (err.code === "auth/invalid-email") {
      alert("Please enter a valid email.");
    } else {
      alert("Signup failed. Please try again later.");
    }
  }
};

var index = {
  login:login,
  signup:signup
}

export default index;
