(function(){
  var ids = ["growing-up","academics","competitions","now","beyond","projects","work"];
  var links = Array.prototype.slice.call(document.querySelectorAll('nav a, .rail a'));
  var rail = document.querySelector('.rail');

  function setActive(id){
    links.forEach(function(a){
      a.classList.toggle('on', a.getAttribute('href') === '#' + id);
    });
  }

  var observer = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting) setActive(e.target.id);
    });
  }, {rootMargin: '-45% 0px -50% 0px', threshold: 0});

  ids.forEach(function(id){
    var el = document.getElementById(id);
    if(el) observer.observe(el);
  });

  // Rail ink adapts to the section behind it
  var tone = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting && rail){
        rail.style.color = e.target.classList.contains('dark') || e.target.id === 'top'
          ? '#F4EDDD' : '#12233C';
      }
    });
  }, {rootMargin: '-50% 0px -50% 0px', threshold: 0});
  document.querySelectorAll('section').forEach(function(s){ tone.observe(s); });
})();
