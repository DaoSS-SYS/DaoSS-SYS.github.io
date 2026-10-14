(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme');
  var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

  function current() {
    return root.dataset.theme || (darkQuery.matches ? 'dark' : 'light');
  }

  if (btn) {
    btn.addEventListener('click', function () {
      var next = current() === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  var year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
