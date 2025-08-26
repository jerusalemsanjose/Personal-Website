

gsap.registerPlugin(ScrollTrigger);

    document.querySelectorAll("section").forEach(section => {
      let overlay = section.querySelector(".overlay");
      let text = section.querySelectorAll("h1, p");

      gsap.to(overlay, {
        xPercent: 100,
        duration: 1.8,
        ease: "power3.out",

        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });

      gsap.to(text, {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0.2,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    });


window.addEventListener("load", () => {
    const bar = document.getElementById("loading-bar");
        const percentText = document.getElementById("loading-percent");
            let percent = 0;

    const interval = setInterval(() => {
        percent++;
            bar.style.width = percent + "%";
                percentText.textContent = percent + "%";

        if (percent >= 100) {
            clearInterval(interval);

        setTimeout(() => {
            const screen = document.getElementById("loading-screen");
                screen.style.transition = "opacity 1s ease";
                    screen.style.opacity = "0";

            document.querySelector('.pixel-cat').style.display = 'block';

                        setTimeout(() => {
                            screen.style.display = "none";
                        }, 1000);
                }, 500);
            }
    }, 30);
});

