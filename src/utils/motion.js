import gsap from 'gsap';

export const fadeIn = (place,length,scroll,position) => {

  let tl = gsap.timeline({ paused: true })
  //定义timeline
  
  tl.fromTo(place, {
  y:150,
  opacity: 0,
  duration: 3,
  },{
    y:0,
    opacity:1,
    stagger: {
    each: 0.3,
    ease: "none",
  }
  })
  // 渐入动画
  
  const box = document.querySelector(place);
  const trigger = document.querySelector(position)
  if(scroll==true){
    window.addEventListener('scroll',function(){
      const n = document.documentElement.scrollTop
      const indicator = true
      if(n >= (box.offsetTop-length)){
        tl.play()
      }
      })
  }else{
        tl.play()
    }
};
//渐入动画传参


export const fadeInMultiple = (place,length,opa) => {

  let tl = gsap.timeline({ paused: true })
  //定义timeline
  
  tl.fromTo(place, {
  y:150,
  opacity: 0,
  duration: 1,
},{
    y:0,
    opacity:opa,
    stagger: {
    each: 0.1,
    ease: "none",
  }
  })
  // 渐入动画
  
  const box = document.querySelector(place);
  window.addEventListener('scroll',function(){
  const n = document.documentElement.scrollTop
  const indicator = true
  if(n >= (box.offsetTop-length)){
    tl.play()
  }else{

  }
})

};

//渐入动画传参 (多个)

