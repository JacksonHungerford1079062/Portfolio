const mediaElements = document.querySelectorAll('.media');
  const leftArrow = document.querySelector('.arrow.left');
  const rightArrow = document.querySelector('.arrow.right');
  const caption = document.getElementById('caption');

  const captions = [
   " GUI 1/4 - video & file of a color picker script <a href='ColorPicker.html' target='_blank' style='color:white;'>File Here</a>",
   " GUI 2/4 - video & file of a counter script <a href='Counter.html' target='_blank' style='color:white;'>File Here</a>",
   " GUI 3/4 - video & file of a script that explodes a cat <a href='CatExplode.html ' target='_blank' style='color:white;'>File Here</a>", 
  " GUI 4/4 - video & file of a mock-up website I made for a assigment <a href='Omnifood-master/index.html ' target='_blank' style='color:white;'>File Here</a>", 
   "Frontend 1/2 - a very stylized website I made, with almost all of the graphics & borders being entirely made by me with adobe apps",
   "Frontend 2/2 - exmample of me making one of the animated graphics, making the frames in photoshop, editing it in priemere, exporting it in photoshop, and adding it into my website",
   "Backend 1/2 - examples of my backend code of my website, with everything entirely being made from sctrach being made with multiple coding languages (HTML, CSS, and Javascript)",
   "Backend 2/2 - more examples of the backend code of my website (you can see everything by inspecting element)",
   "Microsoft 365 - some examples of query & excel work, I also have a certfication in execel (you can see in the certs page)",
   "Cat Project 1/3 - Examples of code from my LUA roblox project of a functioning roblox cat, with each screenshot being a screenshot from a different script that function together as one",
   "Cat Project 2/3 - Examples of code & the work space, with the workspace showcasing the cat model and the interactable toys",
   "Cat Project 3/3 - Exmaple video of the cat in game"
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

