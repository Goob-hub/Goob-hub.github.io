<template>
  <div class="page">
    <Appear  :transition="[0, '-200px']"> 
      <header>
          <main>
            <Appear :delay="100"  :transition="['-200px',0]"> 
              <h1>About Goobs Kooking</h1>
            </Appear>
            <Appear :delay="300"  :transition="['200px',0]"> 
              <p>
              Goobs Kooking was created with vue.js and the ednam recipe database to get recipies!
              </p>
            </Appear>
            <Appear :delay="500"  :transition="['-200px',0]"> 
              <footer>
                <Button v-bind:external="false" v-bind:route="'/'" v-bind:text="'Home'"/>
              </footer>
            </Appear>
          </main>
      </header>
     </Appear>
     <Appear  :transition="[0, '200px']"> 
      <section>
        <Appear :delay="700"  :transition="['200px',0]"> 
          <article>

            <h1>Parts of Goob's Kooking and other info!</h1>
            <ul>
              <li><p>Used Vue Carousel.</p></li>
              <li><p>Used sass for styling.</p></li>
              <li><p>This is my first vue project!</p></li>
              <li><p>Total time to make: 5 days, around 1.5-3 hours a day.</p></li>
            </ul>

          </article>
        </Appear>
        <Appear :delay="900"  :transition="['-200px',0]">
          <div class="links">
            <h1>Links/Sources:</h1>
            <Button :external="true" :href="'https://developer.edamam.com/'" :text="'Ednam'"/>
            <Button :external="true" :href="'https://developer.edamam.com/'" :text="'Vue Carousel'"/>
          </div>
        </Appear>
      </section>
    </Appear>
    <Appear :delay="1100"  :transition="[0,'-200px']">
      <Footer class="f" />
    </Appear>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'About',
    components: {
        Button,
        Footer
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
$clr-5: #262626;
$clr-6: #3C2216;

$backdrop-gradient: linear-gradient(135deg, rgba(0, 0, 0, .61), rgba(0, 0, 0, .9)); 
$btn-gradient: linear-gradient(135deg, $clr-3, $clr-4); 

$transition: .3s linear;

//breakpoints
$bp-small: 48em; // 768px
$bp-medium: 64em; // 1024px
$bp-large: 85.375em; // 1366px
$bp-xlarge: 120em; // 1920px
$bp-xxlarge: 160em; // 2560pxs

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
     list-style: none;
}

header{
     min-height: 30vh;
     display: flex;
     justify-content: center;
     background: $backdrop-gradient, center / cover no-repeat url('../components/assets/Banner2.jpg');

     main{
          justify-self: center;
          padding: 1.5em;
          min-height: 30vh;
          width: max-content;
          color: $clr-1;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: center;

          footer{
               margin: 1em 1em 0 1em;
               width: 100%;
               display: flex;
               justify-content: center;
          }
          
          p{
            font-size: 1em;
            width: 60%;
          }

          h1{
               margin-bottom: .5em;
               text-align: center;
               font-family: $ff-1;
               font-size: 2.5em;
          }
     }
}

section{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: $clr-1;
  background: $clr-5;
  min-height: 40vh;
  padding: 1em;
 

  article{
    padding: 1em;
    h1{
      margin-bottom: 1.5em;
      font-size: 2em;
    }

    ul{
      li{ 
        p{
          font-size: 1.3em;
        }
        
        margin: 1em;
      }
    }
  }

  .links{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1em;
    h1{
      font-size: 2em;
      margin-bottom: 1.5em;
    }
  }
}

@include ipadSmall(){
  header{
    height: 40vh;
    main{
      justify-content: center;
      height: 40vh;
    }
  }
}
@include ipadPro(){
  header{
    height: 30vh;
    main{
      justify-content: center;
      height: 30vh;
      p{
        font-size: 1.3em;
      }
      h1{
        font-size: 3.5em;
      }
    }
  }

  section{
    article{
    ul{
      li{ 
        p{
          font-size: 1.5em;
        }
        
        margin: 1em;
      }
    }
    }
  }
}

@media(min-width: $bp-large){
  header{
    position: fixed;
    width: 50vw;
    height: 100vh;
    right: 0%;
    
    main{
      align-items: center;
      height: 100%;
      justify-content: center;
      p{
        font-size: 1.3em;
      }

      h1{
        font-size: 3em;
      }
    }
    
  }

  section{
    width: 50vw;
    height: 90vh;
  }

  .f{
    width: 50vw;
  }
}
@media(min-width: $bp-xlarge){
  header{
    position: fixed;
    width: 50vw;
    height: 100vh;
    right: 0%;
    
    main{
      height: 100%;
      width: 100%;
      justify-content: center;
      p{
        font-size: 2em;
      }

      h1{
        font-size: 5em;
      }
    }
    
  }

  section{
    width: 50vw;
    height: 90vh;
    article{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 50%;
      h1{
        font-size: 4em;
        margin-bottom: .5em;
      }
      ul{
      li{ 
        p{
          font-size: 2em;
        }
      }
      }
    }

    .links{
      h1{
        font-size: 4em;
      }
    }


  }

  .f{
    width: 50vw;
    font-size: .8em;
  }

}

</style>
