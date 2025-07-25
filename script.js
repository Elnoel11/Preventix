// Show/Hide Registration Form
function toggleRegistration(show) {
  document.getElementById("registrationForm").classList.toggle("hidden", !show);
}

// Dummy register function
function registerUser() {
  const name = document.getElementById("regName").value;
  const password = document.getElementById("regPassword").value;

  if (!name || !password) {
    alert("Please fill in name and password.");
    return;
  }

  localStorage.setItem("preventixUser", JSON.stringify({ name, password }));
  alert("Account created! Please login.");
  toggleRegistration(false);
}

// Dummy login function
function loginUser() {
  const name = document.getElementById("loginName").value;
  const password = document.getElementById("loginPassword").value;
  const savedUser = JSON.parse(localStorage.getItem("preventixUser"));

  if (!savedUser || name !== savedUser.name || password !== savedUser.password) {
    alert("Invalid login!");
    return;
  }

  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("userName").textContent = savedUser.name;
}

// Show section
function showSection(section) {
  const main = document.getElementById("mainContent");
  main.innerHTML = "";

  if (section === "story") {
    main.innerHTML = "<h2>📘 Story Mode</h2><p>Content coming soon...</p>";
  } else if (section === "adventure") {
    main.innerHTML = "<h2>⚔️ Adventure</h2><p>You need to unlock Level 3 in Story Mode.</p>";
  } else if (section === "rank") {
    main.innerHTML = "<h2>🏆 Ranking</h2><p>Your position and achievements will show here.</p>";
  } else if (section === "settings") {
    main.innerHTML = `<h2>⚙️ Settings</h2>
      <label>Music Volume: <input type="range" min="0" max="100"></label><br>
      <label>Language:
        <select>
          <option>English</option>
          <option>Filipino</option>
        </select>
      </label>`;
  } else if (section === "profile") {
    const user = JSON.parse(localStorage.getItem("preventixUser"));
    main.innerHTML = `<h2>👤 Profile</h2>
      <p>Full Name: ${user.name}</p>
      <p>Email: ${user.email || 'Not provided'}</p>`;
  }
}



    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
