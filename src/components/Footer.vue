<template>
  <div>
       <footer>
            <div class="copyright">
                 Goob's Kooking <fa-icon :icon="['fas', 'copyright']" size="1x" />
                 {{currentYear()}}
            </div>
            
          <Button v-bind:external="true" v-bind:href="'https://github.com/Goob-hub'" v-bind:text="'My GitHub'"/>
            
       </footer>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
     components: {
          Button,
     },
     methods: {
          currentYear(){
               let date = new Date();
               let year = date.getFullYear();
               return year;
          }
     }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito|Quicksand');
$ff-1: 'Quicksand', sans-serif;
$ff-2: 'Nunito', sans-serif;

$clr-1: #E2E2E2;
$clr-2: #F3F3F3;
$clr-3: #A8A853;
$clr-4: #5A5A0F;
$clr-5: #3C2216;

$btn-gradient: linear-gradient(135deg, $clr-3, $clr-4); 

//breakpoints
$bp-small: 48em; // 768px
$bp-medium: 64em; // 1024px
$bp-large: 85.375em; // 1366px
$bp-xlarge: 120em; // 1920px
$bp-xxlarge: 160em; // 2560px


@mixin ipadSmall{
     @media (min-width: $bp-small) and (max-height: $bp-medium) and (min-height: $bp-small){
          @content;
     }
}

@mixin ipadPro{
     @media (min-width: $bp-medium) and (min-height: $bp-medium){
          @content;
     }
}



*{
     font-family: $ff-2;
     text-align: center;
}

footer{
     display: flex;
     justify-content: space-around;
     align-items: center;
     min-height: 10vh;
     background: $clr-5;
     color: $clr-1;
     font-size: .9em;

     .copyright{
          font-size: 1.2em;
     }

     @include ipadSmall(){
          font-size: 1.2em;  
          
     }
    
     @include ipadPro(){
          font-size: 1.2em;  
          
     }

     @media (min-width: $bp-large){
          .copyright{
              font-size: 1.5em; 
          }
          
     }
     @media (min-width: $bp-xlarge){
          .copyright{
              font-size: 2.5em; 
          }
          
     }
     @media (min-width: $bp-xxlarge){
          .copyright{
              font-size: 3em; 
          }
          
     }
    

}
</style>