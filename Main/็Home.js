window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      const scrollBtn = document.getElementById("scrollBtn");
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
      } else {
        scrollBtn.style.display = "none";
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }





















document.addEventListener('mousemove', function(event) {
    const fire = document.getElementById('fire');
    const x = event.clientX - (fire.offsetWidth / 2);
    const y = event.clientY - (fire.offsetHeight / 2);
  
    fire.style.left = x + 'px';
    fire.style.top = y + 'px';
  });

  