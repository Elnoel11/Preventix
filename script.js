// DOM Elements
const loginContainer = document.getElementById('loginContainer');
const registrationContainer = document.getElementById('registrationContainer');
const avatarContainer = document.getElementById('avatarContainer');
const dashboard = document.getElementById('dashboard');
const mainContent = document.getElementById('mainContent');

const loginName = document.getElementById('loginName');
const loginPassword = document.getElementById('loginPassword');

// Show registration form popup
function showRegistrationForm() {
  registrationContainer.classList.remove('hidden');
  loginContainer.classList.add('hidden');
}

// Register user
function registerUser() {
  const user = {
    fullName: document.getElementById('fullName').value,
    birthDate: document.getElementById('birthDate').value,
    gender: document.getElementById('gender').value,
    gradeLevel: document.getElementById('gradeLevel').value,
    section: document.getElementById('section').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value,
  };

  if (
    user.fullName && user.birthDate && user.gender &&
    user.gradeLevel && user.section &&
    user.email && user.password
  ) {
    localStorage.setItem('preventixUser', JSON.stringify(user));
    alert("Registered successfully!");
    registrationContainer.classList.add('hidden');
    avatarContainer.classList.remove('hidden');
  } else {
    alert("Please fill in all fields!");
  }
}

// Save avatar info
function saveAvatar() {
  const username = document.getElementById('username').value;
  const avatarFile = document.getElementById('avatarUpload').files[0];

  if (!username || !avatarFile) {
    alert("Please enter a username and upload an avatar.");
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    const avatarData = {
      username: username,
      avatarUrl: e.target.result
    };

    localStorage.setItem('preventixAvatar', JSON.stringify(avatarData));
    avatarContainer.classList.add('hidden');
    window.location.href = "dashboard.html";
  };
  reader.readAsDataURL(avatarFile);
}

// Corrected Login user logic
function loginUser() {
  const inputName = loginName.value;
  const inputPass = loginPassword.value;

  const storedUser = JSON.parse(localStorage.getItem("preventixUser"));
  if (!storedUser) {
    alert("No user registered yet.");
    return;
  }

  const storedName = storedUser.fullName;
  const storedPass = storedUser.password;

  if (inputName === storedName && inputPass === storedPass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("loggedInName", storedName);
    window.location.href = "dashboard.html";
  } else {
    alert("Incorrect credentials.");
  }
}

// Dashboard logic (only works if called in dashboard.html)
function showDashboard() {
  const storedUser = JSON.parse(localStorage.getItem('preventixUser'));
  const storedAvatar = JSON.parse(localStorage.getItem('preventixAvatar'));

  if (!storedUser || !storedAvatar) return;

  document.getElementById('userName').textContent = storedAvatar.username;
  document.querySelector('.user-info img').src = storedAvatar.avatarUrl;
}

// Section switching in dashboard
function navigate(section) {
  const storedUser = JSON.parse(localStorage.getItem('preventixUser'));
  const storedAvatar = JSON.parse(localStorage.getItem('preventixAvatar'));

  switch (section) {
    case 'story':
      mainContent.innerHTML = `
        <h2>📘 Story Mode</h2>
        <p>Coming soon! Unlock levels by progressing in the game.</p>
      `;
      break;
    case 'adventure':
      mainContent.innerHTML = `
        <h2>⚔️ Adventure Mode</h2>
        <p>You need to unlock Level 3 in Story Mode to play.</p>
        <button disabled style="padding: 10px; margin-top: 10px;">Practice Mode</button>
        <button disabled style="padding: 10px; margin-left: 10px;">Time Mode</button>
      `;
      break;
    case 'rank':
      mainContent.innerHTML = `
        <h2>🏆 Rank</h2>
        <p>Your progress will appear here. Track your stats and achievements!</p>
      `;
      break;
    case 'settings':
      mainContent.innerHTML = `
        <h2>⚙️ Settings</h2>
        <p>
          <label>🎵 Music Volume</label><br>
          <input type="range" min="0" max="100" value="50">
        </p>
        <p>
          <label>🌐 Language</label><br>
          <select>
            <option value="en">English</option>
            <option value="ph">Filipino</option>
          </select>
        </p>
      `;
      break;
    case 'profile':
      mainContent.innerHTML = `
        <h2>👤 Profile</h2>
        <img src="${storedAvatar.avatarUrl}" alt="Avatar" style="width:100px;border-radius:50%;">
        <p><strong>Full Name:</strong> ${storedUser.fullName}</p>
        <p><strong>Email:</strong> ${storedUser.email}</p>
        <p><strong>Username:</strong> ${storedAvatar.username}</p>
        <p><strong>Gender:</strong> ${storedUser.gender}</p>
        <p><strong>Grade & Section:</strong> ${storedUser.gradeLevel} - ${storedUser.section}</p>
      `;
      break;
  }
}
