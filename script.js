
    function showsidebar() {
    event.preventDefault(); 
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "flex";
}

function hidesidebar() {
    event.preventDefault();
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = "none";
}
function checkWidth() {
    if (window.innerWidth > 1084) {
      hidesidebar();
    }
  }
  
  // Add event listener for window resize
  window.addEventListener('resize', checkWidth);
  
  // Initial check in case the page loads with a width greater than 1084px
  checkWidth();

