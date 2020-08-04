<template>
  <div class="Header">
     <main>
          {{prevent()}}
          <section>
               <Appear :delay="100" :transition="['-200px', 0]">
                    <h1>Cook like the pro's with Goob's Kooking</h1>
               </Appear>
               <sub>
                    <Appear :delay="300" :transition="['200px', 0]">
                         <p>Create, Share, And Experience Amazing Recipe's</p>
                    </Appear>
               </sub>
          </section>
          <section>
               <Appear :delay="400" :transition="['200px', '200px']">
                    <form >
                    <input 
                         v-model="query" 
                         type="text" 
                         placeholder="Search..." 
                         autocomplete="off">
                         <button class="btn search" @click="$emit('getQuery', query)"><fa-icon :icon="['fas', 'search']" size="1x" /></button>
                    </form>
               </Appear>

               <footer>
                    <Appear :delay="600" :transition="['-200px', '-200px']">
                         <Button v-bind:external="false" v-bind:route="'/About'" v-bind:text="'About'"/>
                    </Appear>
               </footer>
          </section>
     </main>
  </div>
</template>

<script defer>
import Button from '@/components/Button.vue';


export default {
     name: 'Header',
     components: {
          Button,
     },
     data () {
          return {
               'query': '',
          }
     }, 
     methods: {
          prevent(){
               setTimeout(() => {
                    document.querySelector(".search").addEventListener('click', e => {
                         e.preventDefault()
                    })
                    
               });
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

$backdrop-gradient: linear-gradient(135deg, rgba(0, 0, 0, .51), rgba(0, 0, 0, .85)); 
$btn-gradient: linear-gradient(135deg, $clr-3, $clr-4); 

$transition: .3s linear;

//breakpoints
$bp-small: 48em; // 768px
$bp-medium: 64em; // 1024px
$bp-large: 85.375em; // 1366px
$bp-xlarge: 120em; // 1920px
$bp-xxlarge: 160em; // 2560px

@mixin mobileSide{
     @media (min-width: 568px) and (max-width: 823px) and (max-height: 500px){
          @content;
     }
}

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

@mixin bothIpads{
     @media (min-width: $bp-small) and (min-height: $bp-medium) and(max-width: 1366px) and (max-height: $bp-large){
          @content;
     }
}

*{
     font-family: $ff-2;
}

.Header{
     min-height: 50vh;
     background: $backdrop-gradient, center / cover no-repeat url("./assets/Banner.jpg");
     display: flex;
     justify-content: center;

     main{
          justify-self: center;
          padding: 2em;
          min-height: 50vh;
          max-width: 411px;
          width: max-content;
          color: $clr-1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          section{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
          }

          footer{
               margin: 1em 1em 0 1em;
               width: 100%;
               display: flex;
               justify-content: center;
          }
     
          h1{
               margin-bottom: .5em;
               text-align: center;
               font-family: $ff-1;
               font-size: 2.2em;
          }

          sub{
               margin: 1em;
               text-align: center;
               width: 80%;
               p{
                    font-size: 1.2em;
               }
          }


          form{
               margin: 1em;
               width: 100%;
               border: none;
               input{
                    height: 100%;
                    width: 90%;
                    transition: $transition;
                    padding: .5em;
                    outline: none;
                    border: none;
                    background: $clr-1;
                    border-radius: .5em 0 0 0;
                    &:focus{
                         background: darken($clr-1, 6%);
                    }
               }

               button{
                    width: 10%;
                    height: 100%;
                    padding: .5em;
                    border-radius: 0 0 .5em 0;
                    background: $clr-2;
                    color: black;
                    border: none;
                    cursor: pointer;
                    transition: .3s linear;
                    &:focus{
                         outline: none;
                    }
                    &:hover{
                         background: darken($clr-2, 6%);
                    }
               }
          }
     }

     @include bothIpads(){
          main{
               max-width: 31.25em;
               h1{
                    font-size: 2.7em;
                    margin-bottom: 1em;
               }

               section{
                    width: 100%;
                    height: 50%;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
               }
          
               sub{
                    p{
                         font-size: 1.7em;
                    }
               }
          
               form{
                    height: 3em;
                    width: 80%;
                    
                    input{
                         font-size: 1.2em;
                    }
                    button{
                         font-size: 1.2em;
                    }
               }
          }
     }
     @include ipadPro(){
          min-height: 40vh;
          main{
               min-height: 40vh;
          }
     }

    

     @media (min-width: $bp-large){
          min-height: 60vh;
          main{
               min-height: 60vh;
               max-width: 100vw;
               flex-direction: row;
               justify-content: space-around;

                 section{
                         width: 50%;
                         height: 100%;
                         display: flex;
                         justify-content: center;
                         align-items: center;
                         flex-direction: column;
                    }
               
               h1{
                    font-size: 3em;
                    margin-bottom: 1em;
               }
          
               sub{
                    
                    p{
                         font-size: 2em;
                         margin-bottom: 1em;
                    }
               }
          
               form{
                    margin-bottom: 1em;
                    height: 3em;
                    input{
                         font-size: 1.3em;
                    }
                    button{
                         font-size: 1.3em;
                    }
               }
          }
     }
     @media (min-width: $bp-xlarge){

          main{
               section{
                    margin: 3em;
               }
               
               h1{
                    font-size: 5em;
                    margin-bottom: 1em;
               }
          
               sub{
                    
                    p{
                         font-size: 3em;
                         margin-bottom: 1em;
                    }
               }
          
               form{
                    margin-bottom: 1.5em;
                    height: 5em;
                    input{
                         font-size: 2em;
                    }
                    button{
                         font-size: 2em;
                    }
               }
          }
     }
}


</style>  