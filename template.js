const mediaElements = document.querySelectorAll('.media');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const caption = document.getElementById('caption');

  const captions = [
   
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