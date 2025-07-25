function showRegistrationForm() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("registrationContainer").classList.remove("hidden");
}

function registerUser() {
  const fullName = document.getElementById("fullName").value;
  const birthDate = document.getElementById("birthDate").value;
  const gender = document.getElementById("gender").value;
  const grade = document.getElementById("gradeLevel").value;
  const section = document.getElementById("section").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!fullName || !birthDate || !gender || !grade || !section || !email || !password) {
    alert("Please fill all fields.");
    return;
  }

  localStorage.setItem("fullName", fullName);
  localStorage.setItem("birthDate", birthDate);
  localStorage.setItem("gender", gender);
  localStorage.setItem("gradeLevel", grade);
  localStorage.setItem("section", section);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);

  document.getElementById("registrationContainer").classList.add("hidden");
  document.getElementById("avatarContainer").classList.remove("hidden");
}

function saveAvatar() {
  const username = document.getElementById("username").value;
  const avatar = document.getElementById("avatarUpload").files[0];

  if (!username || !avatar) {
    alert("Please enter a username and select an avatar image.");
    return;
  }

  const reader = new FileReader();
  reader.onloadend = function () {
    localStorage.setItem("username", username);
    localStorage.setItem("avatar", reader.result);
    showDashboard();
  };
  reader.readAsDataURL(avatar);
}

function loginUser() {
  const loginName = document.getElementById("loginName").value;
  const loginPass = document.getElementById("loginPassword").value;

  const storedName = localStorage.getItem("fullName");
  const storedPass = localStorage.getItem("password");

  if (loginName === storedName && loginPass === storedPass) {
    showDashboard();
  } else {
    alert("Invalid credentials!");
  }
}

function showDashboard() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("registrationContainer").classList.add("hidden");
  document.getElementById("avatarContainer").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");

  document.getElementById("userDisplayName").textContent = localStorage.getItem("username") || "User";
  document.getElementById("avatarImage").src = localStorage.getItem("avatar");
}

function showSection(section) {
  const content = document.getElementById("mainContent");

  if (section === 'story') {
    content.innerHTML = "<h2>📘 Story Mode</h2><p>Coming soon!</p>";
  } else if (section === 'adventure') {
    content.innerHTML = `
      <h2>⚔️ Adventure Mode</h2>
      <button onclick="alert('Unlock Level 3 in Story Mode to access!')">Practice Mode</button>
      <button onclick="alert('Unlock Level 3 in Story Mode to access!')">Time Mode</button>
    `;
  } else if (section === 'rank') {
    content.innerHTML = `
      <h2>🏆 Rank & Stats</h2>
      <p>Your current rank: Bronze</p>
      <p>Points: 1200</p>
      <div style='height: 200px; background: rgba(255,255,255,0.2); margin-top: 10px;'>[Graph Placeholder]</div>
    `;
  } else if (section === 'settings') {
    content.innerHTML = `
      <h2>⚙️ Settings</h2>
      <label>Music Volume:</label><input type="range" min="0" max="100"><br><br>
      <label>Language:</label>
      <select>
        <option>English</option>
        <option>Filipino</option>
      </select>
    `;
  } else if (section === 'profile') {
    content.innerHTML = `
      <h2>👤 Profile</h2>
      <p>Full Name: ${localStorage.getItem("fullName")}</p>
      <p>Email: ${localStorage.getItem("email")}</p>
      <p>Username: ${localStorage.getItem("username")}</p>
      <img src="${localStorage.getItem("avatar")}" style="width:100px;border-radius:50%;">
    `;
  }
}


    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
