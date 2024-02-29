const loginForm = document.querySelector("#login-form");
const loginApiUrl = "http://localhost:5678/api/users/login";

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const formLogs = new FormData(loginForm);
    const loginData = Object.fromEntries(formLogs);
  
    fetch(loginApiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(loginData),
    })

      .then((response) => response.json())
    
      .then((data) => {
        if (data.token != null) {
          // Save token into local storage
          localStorage.setItem("token", data.token);
          // Redirect to index.html
          window.location.href = "index.html";
        } else {
          // Create an error message if logins infos are incorrects
          const loginError = document.querySelector(".login-error");
          loginError.innerText = "Identifiants introuvables. Veuillez réessayer.";
          // console.log("Identifiants introuvables. Veuillez réessayer.");
        }
      })
  });