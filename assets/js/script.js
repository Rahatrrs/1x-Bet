const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');

  if (menu.classList.contains('active')) {
    menu.style.display = "block";
    
  } else {
    menu.style.display = "none";
    
  }
});


// dropdown
const dropdownLink = document.getElementById('dropdown-link');
const dropdown = document.querySelector('.dropdown');

dropdownLink.addEventListener('click', () => {
  dropdown.classList.toggle('active');
});


// carousel
$('.draggable-carousel').draggable({
  axis: 'x',
  cursor: 'grabbing',
  start: function() {
      $(this).addClass('dragging');
  },
  stop: function() {
      $(this).removeClass('dragging');
  }
});

// search box
const searchIcon = document.getElementById('search-icon');
const searchBox = document.getElementById('search-box');

searchIcon.addEventListener('click', () => {
  searchBox.style.display = "block";
});

document.addEventListener('click', (e) => {
  if (!searchBox.contains(e.target) && !searchIcon.contains(e.target)) {
    searchBox.style.display = "none";
  }
});

// card carousel





     