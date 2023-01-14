import gsap from "gsap";

export default {
    mounted() {
        const x = window.matchMedia("(max-width: 414px)")
        if (!x.matches) {
            const tl = new TimelineMax({ onUpdate: updatePercentage });
            const tl2 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});
            const controller = new ScrollMagic.Controller();

            tl2.to('.jumbotron__copy--line', {
                stagger: .3,
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                opacity: 1,  
                duration: 1
            });

            tl.from('.jumbotron__scolltext', 2, { x: 1000 });
            const scene = new ScrollMagic.Scene({
                triggerElement: ".jumbotron",
                triggerHook: "onLeave", //onEnter, onCenter
                duration: "150%"
            })
            .setTween(tl)
            .addTo(controller);

            function updatePercentage() {
                tl.progress();
            } 
        } else {
            const tl = new TimelineMax({ onUpdate: updatePercentage });
            const tl2 = gsap.timeline({ defaults: { ease: "power4.inOut", duration: 2  }});

            const controller = new ScrollMagic.Controller();

            tl.to('.jumbotron__scolltext', 2, { x: -100 });
            const scene = new ScrollMagic.Scene({
                triggerElement: ".jumbotron",
                triggerHook: "onLeave", //onEnter, onCenter
                duration: "150%"
            })
            .setTween(tl)
            .addTo(controller);

            tl2.to('.jumbotron__copy--line', {
                stagger: .3,
                'clip-path': 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)', 
                opacity: 1,  
                duration: 1
            });

            function updatePercentage() {
                tl.progress();
            }
        }
    }
}