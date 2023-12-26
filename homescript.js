// homescript.js
document.addEventListener('DOMContentLoaded', function () {
    fetchData(); // Fetch data as soon as the page loads
  });
  
  function fetchData() {
    // Using Dog API to fetch random dog images
    fetch('https://dog.ceo/api/breeds/image/random/10')
      .then(response => response.json())
      .then(data => displayImages(data))
      .catch(error => console.error('Error fetching data:', error));
  }
  
  function displayImages(images) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';
  
    images.message.forEach(imageUrl => {
      const imgElement = document.createElement('img');
      imgElement.src = imageUrl;
      imgElement.alt = 'Dog';
  
      const figure = document.createElement('figure');
      figure.appendChild(imgElement);
  
      gallery.appendChild(figure);
    });
  }
  