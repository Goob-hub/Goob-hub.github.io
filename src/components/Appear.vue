<template>
<!-- Wraps any element inside of this component in a transition -->
  <transition appear :css="false" @before-enter="beforeEnter" @enter="enter">
       <slot/>
  </transition>
</template>

<script>
export default {
     props: {
          //Duration of the transition
          duration:{
               type: Number,
               default: 500,
          },
          //Delay for when the transition starts
          delay:{
               type: Number,
               default: 100
          },
          //coordinates for the transition i.e its translate 
          transition: Array,

     },
     methods: {
          //This function defines The start of how the element is styled, with no opacity
          beforeEnter(e){
               
               e.style.opacity = 0; 
               //If the transition is defined then set the elements style equal to the data in the transition array joining them with a ,
               if(this.transition){
                   e.style.transform = `translate(${this.transition.join(',')})`; 
               }  
               
          },
          //This function is The endpoint of how the element will end up being styled
          enter(e){
               //defines the transition for the elements style with the default values defined in the object
               let transitions = `opacity ${this.duration}ms ease-in-out ${this.delay}ms`;

               //If the transition is defined then set it equal to those values
               (this.transition) ? transitions += `, transform ${this.duration}ms ease-in-out ${this.delay}ms` : ''
                    
               
               //set the elements style to the transiition
               e.style.transition = transitions;

               //Gets computed style of element to render it properly and prevent any bugs from happening, probably not required though
               getComputedStyle(e);
               
               setTimeout(() => {
                    e.style.opacity = 1;
                    if(this.transition){
                         e.style.transform = 'initial';
                    }
                    
               });
               
          }
     }
}
</script>
