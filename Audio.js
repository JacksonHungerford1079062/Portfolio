const mediaElements = document.querySelectorAll('.media');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const caption = document.getElementById('caption');

  const captions = [
    "Raster Graphics Editing 1/2 - Exmaple of some photoshop editing I did with a photo from my teacher",
    "Raster Graphics Editing 2/2 - Antother example of photoshop editing, this one is a heavily stylized edit of a school cafeteria ",
    "Digital Painting/Illustration - Screenshots of digital painting & illustration i've done over the years",
    "3D Modeling/rigging 1/2 - a 3D model I rigged and animated (later in the slideshow) I did for a LUA coding project",
    "3D Modeling/rigging 2/2 - a screenshot of a 3D tutorial blender donut",
    "Animation 1/2 - Animation I did in roblox for a cat using a animation extension called moon animatior",
    "Animation 2/2 - example of the animation used in game",
    "Video Editing & Motion Graphics - Example video of Video editing & motion graphics using a cat "
  ];

  let currentIndex = 0;

  function showMedia(index) {
    mediaElements.forEach((el, i) => {
      el.classList.toggle('active', i === index);
      if (el.tagName === 'VIDEO') el.pause();
    });
    caption.innerHTML = captions[index];
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

