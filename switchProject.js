function loadProject(projectFile) {
    fetch(projectFile)
      .then(response => response.text())
      .then(data => {
        document.getElementById('project-details').innerHTML = data;
      })
      .catch(err => console.error('Error loading project:', err));
  }
  
  function goBack() {
    document.getElementById('project-details').innerHTML = '';
  }