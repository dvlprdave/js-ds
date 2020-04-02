// import {gsap} from 'gsap';
import { gsap } from "gsap/dist/gsap"

const gsapAnimations = () =>  {
    const tl = gsap.timeline()
    
    tl.from('.line', 1.6, {
      opacity: 0,
      y: 100,
      ease: 'power4.out',
      delay: 1,
      stagger: { amount: 0.3 }
    })
    .from('img', 1.4, {
      opacity: 0,
      x: 300,
    })
}

export default gsapAnimations