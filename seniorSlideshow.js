const mediaElements = document.querySelectorAll('.media');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const caption = document.getElementById('caption');

  const captions = [
    "One of the first images I drew in the photoshop program",
    "One of the first attempts at using color",
    "Shading practice by using gray scales to make shapes/volumes stand out",
    "More shading practice using gray scales",
    "banner I made for social media, whilst also praticing how color & values affectes shadows",
    "A futuristic spaceman with a robotic leg",
    "A seal with experimental lineart and shadow colors",
    "Original character, Mr. Ollie, a cat that dresses & is a succesful business man",
    "a character I drew another person asked me to do"
  ];

  let currentIndex = 0;

  function showMedia(index) {
    mediaElements.forEach((el, i) => {
      el.classList.toggle('active', i === index);
      if (el.tagName === 'VIDEO') el.pause();
    });
    caption.textContent = captions[index];
  }

  leftArrow.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + mediaElements.length) % mediaElements.length;
    showMedia(currentIndex);
  });

  rightArrow.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % mediaElements.length;
    showMedia(currentIndex);
  });

  // Initial caption
  showMedia(currentIndex);