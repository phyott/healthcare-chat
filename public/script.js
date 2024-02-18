var navLinks = document.querySelectorAll('.nav-link');

// Add click event listeners to each nav link
navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    // Remove 'active' class from all nav links
    navLinks.forEach(function(link) {
      link.classList.remove('active');
    });

    // Add 'active' class to the clicked nav link
    this.classList.add('active');
  });
});


document.getElementById('linkButton').addEventListener('click', function() {
    window.location.href = 'index1.html';
  });

  function sendMessage() {
    document.getElementById("sendMessage").value = "";
}