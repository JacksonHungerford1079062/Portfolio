const mediaElements = document.querySelectorAll('.media');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const caption = document.getElementById('caption');

  const captions = [
   "Phyiscal Hardware - Example of my experience with physical hardware <br> this example is my home computer, I originaly had a pre-built. But after a freak accident that caused multiple parts to be coroded in bleach, I had to test every part to see if it still functions, and then rebuild the pc from scratch with old parts & newely bought ones",
   "OS Management - making  basic windows 10 boot drive to use for the future",
   "Server Administration 1/2 - making a physical domain server that clients can connect to directly",
   "Server Administration 2/2 - example of phyiscal domain file sharing", 
   "Virtualization 1/2 - Using a aplication called Virtual Box to make virtual machines of multiple operating systems", 
   "Virtualization 2/2 - example video of a tutorial I did",
   "Legacy Systems/Projects 1/2 - screenshot of a legacy software called Kid Pix working on my computer",
   "Legacy Systems/Projects 2/2 - example of Kid Pix Working",
   "It Support - Picture of my classmates & I going to a senior center to help out seniors with their devices"
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

