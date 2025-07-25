let users = [];

function toggleRegistration(show) {
  document.getElementById('registrationContainer').classList.toggle('hidden', !show);
}

function registerUser() {
  const user = {
    fullName: document.getElementById('fullName').value,
    birthDate: document.getElementById('birthDate').value,
    gender: document.getElementById('gender').value,
    gradeLevel: document.getElementById('gradeLevel').value,
    section: document.getElementById('section').value,
    email: document.getElementById('email').value,
    password: document.getElementById('password').value
  };
  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  toggleRegistration(false);
  document.getElementById('loginContainer').classList.remove('hidden');
}

function loginUser() {
  const name = document.getElementById('loginName').value;
  const pass = document.getElementById('loginPassword').value;
  const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

  const user = storedUsers.find(u => u.fullName === name && u.password === pass);
  if (user) {
    localStorage.setItem('loggedInUser', JSON.stringify(user));
    document.getElementById('loginContainer').classList.add('hidden');
    document.getElementById('avatarContainer').classList.remove('hidden');
  } else {
    alert('Invalid login credentials');
  }
}

function saveAvatar() {
  const username = document.getElementById('username').value;
  const avatar = document.getElementById('avatarUpload').files[0];

  const reader = new FileReader();
  reader.onload = function () {
    document.getElementById('avatarImage').src = reader.result;
    document.getElementById('userDisplayName').innerText = username;
    localStorage.setItem('avatar', reader.result);
    localStorage.setItem('username', username);
    document.getElementById('avatarContainer').classList.add('hidden');
    document.getElementById('dashboard').classList.remove('hidden');
  };
  if (avatar) reader.readAsDataURL(avatar);
}

function showSection(section) {
  const main = document.getElementById('mainContent');
  if (section === 'story') {
    main.innerHTML = '<h2>📘 Story Mode</h2><p>Content coming soon...</p>';
  } else if (section === 'adventure') {
    main.innerHTML = '<h2>⚔️ Adventure</h2><p>Unlock level 3 in story mode first.</p>';
  } else if (section === 'rank') {
    main.innerHTML = '<h2>🏆 Rankings</h2><p>Your stats and achievements go here.</p>';
  } else if (section === 'settings') {
    main.innerHTML = `
      <h2>⚙️ Settings</h2>
      <p>Adjust volume and language.</p>
      <select>
        <option>English</option>
        <option>Filipino</option>
      </select>
    `;
  } else if (section === 'profile') {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    const username = localStorage.getItem('username');
    main.innerHTML = `
      <h2>👤 Profile</h2>
      <p>Full Name: ${user.fullName}</p>
      <p>Email: ${user.email}</p>
      <p>Username: ${username}</p>
      <img src="${localStorage.getItem('avatar')}" width="100" height="100" />
    `;
  }
}


    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
