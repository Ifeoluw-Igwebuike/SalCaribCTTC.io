// Close dropdown when clicking outside
document.addEventListener('click', function(event) {
    const dropdowns = document.querySelectorAll('.dropdown-content-1');
    dropdowns.forEach(function(dropdown) {
      if (!dropdown.previousElementSibling.contains(event.target) && !dropdown.contains(event.target)) {
        dropdown.style.display = 'none';
      }
    });
  });
 // JavaScript to toggle dropdown content
 function toggleDropdown(element) {
  const content = element.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

// JavaScript to handle dropdown in sidebar
function myFunction(event) {
  event.preventDefault();
  const dropdown = event.target.nextElementSibling;
  if (dropdown.style.display === "block") {
    dropdown.style.display = "none";
  } else {
    dropdown.style.display = "block";
  }
}

// JavaScript to toggle dropdown content
function toggleDropdown(element) {
  const content = element.nextElementSibling;
  if (content.style.display === "block") {
    content.style.display = "none";
  } else {
    content.style.display = "block";
  }
}

