import Clients from "@/components/Logoipsum/Clients";
import Features from "@/components/Logoipsum/Features";
import Hero from "@/components/Logoipsum/Hero";
import NavBar from "@/components/Logoipsum/NavBar";
import Posts from "@/components/Logoipsum/Posts";
import Team from "@/components/Logoipsum/Team";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import { defineComponent, onMounted, ref } from "vue";

gsap.registerPlugin(ScrollTrigger);

export default defineComponent({
  setup() {
    const container = ref<HTMLElement | null>(null);
    onMounted(() => {
      if (container.value) {
        const scrolling = new LocomotiveScroll({
          el: container.value,
          smooth: true,
        });

        scrolling.on("scroll", ScrollTrigger.update);

        ScrollTrigger.scrollerProxy(container.value, {
          scrollTop(value) {
            return arguments.length ? scrolling.scrollTo(value, 0, 0) : scrolling.scroll.instance.scroll.y;
          },
          getBoundingClientRect() {
            return {
              left: 0,
              top: 0,
              width: window.innerWidth,
              height: window.innerHeight,
            };
          },
        });

        ScrollTrigger.create({
          scroller: container.value,
          start: "top+=5% 10%",
          end: "bottom-=30% 40%",
          scrub: 1,
          // markers: true,
        });
        ScrollTrigger.addEventListener("refresh", () => scrolling.update());

        ScrollTrigger.refresh();
      }
    });
    return () => (
      <div ref={container}>
        <NavBar />
        <Hero />
        <Features />
        <Clients />
        <Team />
        <Posts />
      </div>
    );
  },
});
