let users = []; // Simulated database
let currentUser = null;

function showRegistrationForm() {
  document.getElementById('loginContainer').classList.add('hidden');
  document.getElementById('registrationContainer').classList.remove('hidden');
}

function registerUser() {
  const fullName = document.getElementById('fullName').value;
  const birthDate = document.getElementById('birthDate').value;
  const gender = document.getElementById('gender').value;
  const gradeLevel = document.getElementById('gradeLevel').value;
  const section = document.getElementById('section').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if (!fullName || !birthDate || !gender || !gradeLevel || !section || !email || !password) {
    alert('Please fill in all fields.');
    return;
  }

  users.push({ fullName, birthDate, gender, gradeLevel, section, email, password });
  localStorage.setItem('users', JSON.stringify(users));

  document.getElementById('registrationContainer').classList.add('hidden');
  document.getElementById('loginContainer').classList.remove('hidden');
  alert('Registration successful! Please log in.');
}

function loginUser() {
  const name = document.getElementById('loginName').value;
  const password = document.getElementById('loginPassword').value;
  const savedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const foundUser = savedUsers.find(user => user.fullName === name && user.password === password);

  if (!foundUser) {
    alert('Invalid name or password.');
    return;
  }

  currentUser = foundUser;
  document.getElementById('loginContainer').classList.add('hidden');
  document.getElementById('avatarContainer').classList.remove('hidden');
}

function saveAvatar() {
  const username = document.getElementById('username').value;
  const avatarFile = document.getElementById('avatarUpload').files[0];

  if (!username || !avatarFile) {
    alert('Please enter a username and select an avatar image.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function (e) {
    currentUser.username = username;
    currentUser.avatar = e.target.result;
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
    showDashboard();
  };
  reader.readAsDataURL(avatarFile);
}

function showDashboard() {
  document.getElementById('avatarContainer').classList.add('hidden');
  document.getElementById('dashboard').classList.remove('hidden');
  document.getElementById('avatarImage').src = currentUser.avatar;
  document.getElementById('userDisplayName').textContent = currentUser.username;
}

function showSection(section) {
  const main = document.getElementById('mainContent');
  if (section === 'story') {
    main.innerHTML = `<h2>📘 Story Mode</h2><p>Story Mode content goes here.</p>`;
  } else if (section === 'adventure') {
    main.innerHTML = `
      <h2>⚔️ Adventure</h2>
      <p>You need to unlock Level 3 in Story Mode to access this feature.</p>
    `;
  } else if (section === 'rank') {
    main.innerHTML = `
      <h2>🏆 Ranking</h2>
      <p>Your current rank and progress will appear here (graph/stats coming soon).</p>
    `;
  } else if (section === 'settings') {
    main.innerHTML = `
      <h2>⚙️ Settings</h2>
      <p>Language: <select><option>English</option><option>Pilipino</option></select></p>
      <p>Music Volume: <input type='range' min='0' max='100'></p>
    `;
  } else if (section === 'profile') {
    main.innerHTML = `
      <h2>👤 Profile</h2>
      <p>Name: ${currentUser.fullName}</p>
      <p>Email: ${currentUser.email}</p>
      <p>Username: ${currentUser.username}</p>
      <img src="${currentUser.avatar}" style="width:100px;height:100px;border-radius:50%;">
    `;
  }
}

    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
