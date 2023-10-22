var WM = [
    ["Web-Groupe1", "Web-Groupe2", "Web-Groupe3", "Web-Groupe4"],
    ["Mobile-Groupe1", "Mobile-Groupe2", "Mobile-Groupe3", "Mobile-Groupe4"],
  ];
  
  var filiere = document.getElementById("filiere");
  var groupe = document.getElementById("groupe");
  
  filiere.addEventListener("change", function () {
    var selectedFiliere = filiere.value;
    groupe.innerHTML = "";
  
    if (selectedFiliere === "Web") {
      for (let i = 0; i < WM[0].length; i++) {
        const option = document.createElement("option");
        option.value = WM[0][i];
        option.textContent = WM[0][i];
        groupe.appendChild(option);
      }
    } else if (selectedFiliere === "Mobile") {
      for (let i = 0; i < WM[1].length; i++) {
        const option = document.createElement("option");
        option.value = WM[1][i];
        option.textContent = WM[1][i];
        groupe.appendChild(option);
      }
    }
  });
  
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var maxCheck = 2; 
  
  checkboxes.forEach((checkbox)=> {
    checkbox.addEventListener('change', function () {
      var Checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      
      if (Checkboxes.length > maxCheck) {
        this.checked = false;
      }
    });
  });
  
  var add = () => {
    var table = document.getElementById("inscris");
    var newRow = table.insertRow();
    var Nom = newRow.insertCell();
    var Prenom = newRow.insertCell();
    var Email = newRow.insertCell();
    var Genre = newRow.insertCell();
    var Filiere = newRow.insertCell();
    var Groupe = newRow.insertCell();
    var Clubs = newRow.insertCell();
  
    var getNom = document.getElementById("nom").value;
    var getPrenom = document.getElementById("prenom").value;
    var getEmail = document.getElementById("email").value;
    var getFiliere = document.getElementById("filiere").value;
    var getGroupe = document.getElementById("groupe").value;
    var radios = document.querySelector('input[name="genre"]:checked').value;
  
    var checkboxes = [];
    var selectedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    for (var i = 0; i < selectedCheckboxes.length; i++) {
      checkboxes.push(selectedCheckboxes[i].value);
    }
  
    Nom.innerHTML = getNom;
    Prenom.innerHTML = getPrenom;
    Email.innerHTML = getEmail;
    Genre.innerHTML = radios;
    Filiere.innerHTML = getFiliere;
    Groupe.innerHTML = getGroupe;
    Clubs.innerHTML = checkboxes.join(", ");
  
    clearAll();
  };
  
  var clearAll = () => {
    var myForm = document.querySelectorAll("input, select");
  
    for (var i = 0; i < myForm.length; i++) {
      if (myForm[i].type === "text") {
        myForm[i].value = "";
      } else if (myForm[i].type === "radio" || myForm[i].type === "checkbox") {
        myForm[i].checked = false;
      } else if (myForm[i].tagName === "select") {
        myForm[i].selectedIndex = 0;
      }
    }
  
    // Re-enable checkboxes
    checkboxes.forEach(function (checkbox) {
      checkbox.disabled = false;
    });
  };
  