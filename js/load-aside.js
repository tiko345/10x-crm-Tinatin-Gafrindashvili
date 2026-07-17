document.addEventListener('DOMContentLoaded', () => {
  // fetch the aside html file
  fetch('aside.html')
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to load navigation: ' + response.statusText);
      }
      return response.text();
    })
    .then(html => {
      // replace the placeholder <aside> with the fetched content
      const placeholder = document.getElementById('aside-placeholder');
      if (placeholder) {
        placeholder.outerHTML = html;
      } else {
        console.error('Placeholder <aside id="aside-placeholder"> not found.');
      }
    })
    .catch(error => {
      console.error('Error loading navigation:', error);
    });
});