let registeredUser = {};

function showRegistrationForm() {
  document.getElementById("registrationForm").classList.remove("hidden");
}

function submitRegistration() {
  registeredUser = {
    fullName: document.getElementById("fullName").value,
    password: document.getElementById("password").value,
    username: "",
    avatar: ""
  };
  document.getElementById("registrationForm").classList.add("hidden");
  document.getElementById("avatarSetup").classList.remove("hidden");
}

function completeAvatar() {
  registeredUser.username = document.getElementById("username").value;
  const fileInput = document.getElementById("avatarUpload");
  if (fileInput.files.length > 0) {
    const reader = new FileReader();
    reader.onload = function (e) {
      registeredUser.avatar = e.target.result;
      document.getElementById("avatarSetup").classList.add("hidden");
      showDashboard();
    };
    reader.readAsDataURL(fileInput.files[0]);
  } else {
    alert("Please upload a photo.");
  }
}

function loginUser() {
  const loginName = document.getElementById("loginName").value;
  const loginPass = document.getElementById("loginPassword").value;
  if (loginName === registeredUser.fullName && loginPass === registeredUser.password) {
    showDashboard();
  } else {
    alert("Invalid login credentials.");
  }
}

function showDashboard() {
  document.getElementById("loginContainer").classList.add("hidden");
  document.getElementById("dashboard").classList.remove("hidden");
  document.getElementById("avatarImage").src = registeredUser.avatar;
  document.getElementById("displayName").textContent = registeredUser.username;
}

function showSection(sectionName) {
  const content = document.getElementById("mainContent");
  content.innerHTML = `<h2>${sectionName.charAt(0).toUpperCase() + sectionName.slice(1)} Section</h2><p>Content for ${sectionName}</p>`;
}




    main.innerHTML = `<h2>Profile</h2><p>Name: ${stored?.name || "Unknown"}</p><p>Email: ${stored?.email || "Unknown"}</p>`;
  }
}
