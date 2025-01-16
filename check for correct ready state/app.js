const xhr = new XMLHttpRequest();

xhr.onreadystatechange = function() {
  if (xhr.readyState === 4 && xhr.status === 200) {
   
    console.log("Request was successful!");  
    const sidebar = document.getElementById('sidebar');    
    sidebar.innerHTML = xhr.responseText;
  } else if (xhr.readyState === 4 && xhr.status !== 200) {
    console.log("There was an error with the request: " + xhr.status);
  }
};

xhr.open('GET', 'index.html');
xhr.send();
