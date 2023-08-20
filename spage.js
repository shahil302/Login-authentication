function logout() {
    localStorage.removeItem('logged');
    window.location.href = "index.html"; // Redirect back to the login page
  }