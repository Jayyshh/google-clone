// Submit event for the search form
document.getElementById('searchForm').addEventListener('submit', function (e) {
  e.preventDefault(); // prevent form from reloading the page

  const query = document.getElementById('searchInput').value.trim();

  if (query) {
    // Redirect to Google search results
    window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  }
});

// "I'm Feeling Lucky" button (opens first result)
function feelingLucky() {
  const query = document.getElementById('searchInput').value.trim();

  if (query) {
    window.location.href = `https://www.google.com/search?btnI=I&q=${encodeURIComponent(query)}`;
  }
}
