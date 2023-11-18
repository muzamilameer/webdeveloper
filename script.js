// JavaScript code to auto-type text
window.addEventListener('load', function () {
  // Element jinme text type karna hai
  var h1Element = document.getElementById('h1-element');
  var pElement = document.getElementById('p-element');

  // Text jo type karna hai
  var h1Text = 'Hi, I am front end web developer';
  var pText = 'My name is Muzammil Ameer and i have been a front end webdevelopment fro four years.';

  // Speed of typing (milliseconds per character)
  var typingSpeed = 50;

  // Function to type text
  function typeText(element, text, speed) {
    var index = 0;
    function type() {
      if (index < text.length) {
        element.innerHTML += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
    type();
  }

  // Start typing for h1 and p elements
  typeText(h1Element, h1Text, typingSpeed);
  setTimeout(function () {
    typeText(pElement, pText, typingSpeed);
  }, h1Text.length * typingSpeed);
});

// -----------images-full screnn-code------------------------
function showFullscreen(imageSrc) {
  document.getElementById('fullscreen-image').src = imageSrc;
  document.getElementById('fullscreen').style.display = 'flex';
}

function hideFullscreen() {
  document.getElementById('fullscreen').style.display = 'none';
}

// -----------diget-number---
// Intersection Observer for Digit Number Section
const digitNumberSection = document.getElementById('digitNumberSection');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Start counting animation when the section is visible
      startCountingAnimation();
      // Stop observing once it's triggered
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

observer.observe(digitNumberSection);

// Function to start the counting animation
function startCountingAnimation() {
  const counters = document.querySelectorAll(".count");
  const speed = 80;

  counters.forEach((counter) => {
    const updateCount = () => {
      const target = parseInt(+counter.getAttribute("data-target"));
      const count = parseInt(+counter.innerText);
      const increment = Math.trunc(target / speed);

      if (count < target) {
        counter.innerText = count + increment;
        setTimeout(updateCount, 1);
      } else {
        count.innerText = target;
      }
    };
    updateCount();
  });
}
// --------------------animation show text----
// ----------------------
let sections = document.querySelectorAll('section');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
            sec.classList.add('show-animate');
        
        }
        
        else {
            sec.classList.remove('show-animate');

        }
    })
}

// -------left-sideanimation---

  //  document.addEventListener('DOMContentLoaded', function () {
  //     window.addEventListener('scroll', function () {
  //       var elements1 = document.querySelectorAll('.some-element');
  //       elements1.forEach(function (element) {
  //         if (isElementInViewport(element)) {
  //           element.classList.add('animate__fadeInUp');
  //         }
  //       });

  //       var elements2 = document.querySelectorAll('.animate__animated-2');
  //       elements2.forEach(function (element) {
  //         if (isElementInViewport(element)) {
  //           element.classList.add('animate__fadeInUp');
  //         }
  //       });
  //     });

  //     function isElementInViewport(el) {
  //       var rect = el.getBoundingClientRect();
  //       return (
  //         rect.top >= 0 &&
  //         rect.left >= 0 &&
  //         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //       );
  //     }
  //   });

  document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
      var elements1 = document.querySelectorAll('.some-element');
      elements1.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('animate__fadeInUp');
        }
      });
  
      var elements2 = document.querySelectorAll('.animate__animated-2');
      elements2.forEach(function (element) {
        if (isElementInViewport(element)) {
          element.classList.add('animate__fadeInUp');
        }
      });
    });
  
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
  });
  
  // Add media query for smaller screens
  window.addEventListener('resize', function () {
    if (window.innerWidth <= 1240) {
      // Code to handle smaller screens
      // For example, you can modify the behavior or styles for smaller screens
    }
  });
  

  // document.addEventListener('DOMContentLoaded', function () {
  //   var animationFlag = false;
  
  //   window.addEventListener('scroll', function () {
  //     if (!animationFlag) {
  //       var elements1 = document.querySelectorAll('.some-element');
  //       elements1.forEach(function (element) {
  //         if (isElementInViewport(element)) {
  //           element.classList.add('animate__fadeInUp');
  //         }
  //       });
  
  //       var elements2 = document.querySelectorAll('.animate__animated-2');
  //       elements2.forEach(function (element) {
  //         if (isElementInViewport(element)) {
  //           element.classList.add('animate__fadeInUp');
  //         }
  //       });
  
  //       animationFlag = true; // Set the flag to true after the animation is triggered
  //     }
  //   });
  
  //   function isElementInViewport(el) {
  //     var rect = el.getBoundingClientRect();
  //     return (
  //       rect.top >= 0 &&
  //       rect.left >= 0 &&
  //       rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
  //       rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  //     );
  //   }
  // });
  