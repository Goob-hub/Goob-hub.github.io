<template>
  <div>
       <!-- If the boolean variable 'external' is true, then hide the router link and display a normal link to an external website, else display the router link to one of the local pages of this website -->
     <router-link :class="external === true ? 'hide': ''"  class="btn a" :to="route !== undefined ? route : ''">{{text}}</router-link>
         
     <a :class="external === true ? '': 'hide'" target="#" class="btn a" :href="href !== undefined ? href : ''">{{text}}</a>        
  </div>
</template>

<script>
export default {
     name: 'Button',
     props: ["route", "text", "external", "href"]
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
$clr-5: #262626;
$clr-6: #3C2216;

$backdrop-gradient: linear-gradient(135deg, rgba(0, 0, 0, .51), rgba(0, 0, 0, .85)); 
$btn-gradient: linear-gradient(135deg, $clr-3, $clr-4); 

$transition: .3s linear;

//breakpoints
$bp-small: 48em; // 768px
$bp-medium: 64em; // 1024px
$bp-large: 85.375em; // 1366px
$bp-xlarge: 120em; // 1920px
$bp-xxlarge: 160em; // 2560px

@mixin ipadPro{
     @media (min-width: $bp-medium) and (min-height: $bp-medium){
          @content;
     }
}

*{
     font-family: $ff-2;
     text-align: center;
}

.btn{
     transition: $transition;
     cursor: pointer;
     border: none;
     background: none;
     &:focus{
          outline: none;
     }

     
}


.a{
     color: $clr-1;
     font-size: 1.2em;
     text-decoration: none;
     margin: .5em;
     font-size: 1.5em;
     padding: .25em .5em .25em .5em;
     background: $btn-gradient;
     transition: $transition;
     width: max-content;
     display: flex;
     position: relative;
     overflow: hidden;
          &::before{
               content: '';
               position: absolute;
               background: linear-gradient(90deg, transparent, #fff, transparent);
               height: 100%;
               width: 100%;
               right: 100%;
               top: 0%;
               transition: $transition;
          }

          &:hover, :focus{
               color: white;
               text-shadow: 0px 0px 5px rgba(white, .4);
          }

          &:hover::before, :focus::before{
               right: -100%;
          }

          @include ipadPro(){
               font-size: 2.3em;
          }

          @media (min-width: 100em){
               font-size: 3.5em;
          }

          @media (min-width: $bp-large){
               font-size: 2em;
          }
          @media (min-width: $bp-xlarge){
               font-size: 3.5em;
          }
}

.hide{
     display: none;
}

</style>