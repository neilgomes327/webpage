const text = `I'm Neil, a Computer Science Major at the University of Maryland College Park.
I spend most of my time writing web applications and figuring out how things work under the hood.

I'm building this site to document my projects as I work through hands-on work this semester. 
Looking for new grad software engineering roles starting late 2026 / early 2027.`;

const speed = 30; // typing speed (ms)
let index = 0;

function typeWriter() {
    if (index < text.length) {
      document.getElementById("typewriter").innerHTML +=
        text.charAt(index) === "\n" ? "" : text.charAt(index);
      index++;
      setTimeout(typeWriter, speed);
    }
  }
  
  typeWriter();

