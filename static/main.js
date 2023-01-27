let counter = 0;
let y_value = 0;
let scroll_val = 0;

const updateCounter = () => {
  counter+=5;

  const loading_page_counter = document.getElementById('page-loading-counter');

  loading_page_counter.innerHTML = '';
  loading_page_counter.innerHTML = counter;

  if (counter < 100) {
    updateCounter();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  
  updateCounter();

  $(document).ready(function() {
    const loading_page = document.getElementById('page-loading');
    const loading_page_counter = document.getElementById('page-loading-counter');

    counter = 100;
    loading_page_counter.innerHTML = '';
    loading_page_counter.innerHTML = counter;

    loading_page.style.transform = 'translateY(-140%)';
  });

  const tl = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

  tl.to('.jumbotron__copy--line', {
    stagger: .3,
    'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
    opacity: 1,  
    duration: 1
  });

  //gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.jumbotron__scolltext--area').forEach((el, index) => { 
    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top top",
        toggleActions: "play none none reverse",
         markers: true
      }
    });

    tl
  .set(el, {transformOrigin: 'center center'})
  .fromTo(el, { x: 'translateX(0)'}, {x: 'translateX(-100px)'})
})


  /*window.addEventListener('scroll', updateScroll);

  let tracker;
  let translator = 100;

  function updateScroll() {
    const { x, y } = document.querySelector('.jumbotron__weareecho').getBoundingClientRect();
    const scrollTextPar = document.getElementById('jumbotron__scolltext');

    console.log(document.querySelector('.jumbotron__weareecho').getBoundingClientRect())



    //console.log(x, y, window.innerWidth, window.innerHeight);

    if (y <= -120) {
      return;
    } else {
      if (y < window.innerHeight-50) {
        console.log(y, window.innerHeight);
  
  
        tracker = y;
  
  
        scrollTextPar.style.transform = `translateX(${Math.round(-translator)}px)`;
        translator+=10;
  
      }
    }

    

    /*if (y < window.innerHeight) {
      console.log('begin animation', (y*0.1), y);
        //scrollTextPar.style.transform = `translateX(${Math.round(y*0.1)}px)`;
      let value = `translateX(${Math.round(y*0.8)}px)`;
      console.log(value);

      //scrollTextPar.style.transform = value;

      console.log(scrollTextPar.style.transform);
    }
  }*/
})