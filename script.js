document.addEventListener('DOMContentLoaded', function() {
    // Get references to elements
    const menuButton = document.getElementById('menuButton');
    const componentsBlurer = document.getElementById('blurer');
    const menu = document.getElementById('menu');

    // Add click event listener to the menu button
    menuButton.addEventListener('click', function() {
      // Toggle the "show" class for both elements
      componentsBlurer.classList.toggle('show');
      menu.classList.toggle('show');
    });
  });