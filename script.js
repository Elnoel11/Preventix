function signupUser() {
  const name = document.getElementById("signup-name").value;
  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;

  if (name && email && password) {
    localStorage.setItem("preventixUser", JSON.stringify({ name, email, password }));
    alert("Signup successful! Please log in.");
  } else {
    alert("Please complete all fields.");
  }
}

function loginUser() {
  const name = document.getElementById("login-name").value;
  const password = document.getElementById("login-password").value;
  const stored = JSON.parse(localStorage.getItem("preventixUser"));

  if (stored && stored.name === name && stored.password === password) {
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials.");
  }
}

function showSection(section) {
  const main = document.getElementById("main-content");
  if (section === "story") {
    main.innerHTML = "<h2>Story Mode</h2><p>Here begins your Preventix story...</p>";
  } else if (section === "adventure") {
    main.innerHTML = "<h2>Adventure Mode</h2><p>Time for action and challenges!</p>";
  } else if (section === "rank") {
    main.innerHTML = "<h2>Rankings</h2><p>Check your position and achievements.</p>";
  } else if (section === "settings") {
    main.innerHTML = "<h2>Settings</h2><p>Update your preferences here.</p>";
  } else if (section === "profile") {
    const stored = JSON.parse(localStorage.getItem("preventixUser"));
    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
