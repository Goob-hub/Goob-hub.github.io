<template>
  <div class="page">
    <Appear  :transition="[0, '200px']"> 
      <header>
        <main>
          <Appear :delay="200"  :transition="['-200px', '-200px']">
            <!-- Gets the label of the returned recipe from the function -->
            <h1>{{getRecipe().label}}</h1>
          </Appear>
          <Appear :delay="300"  :transition="['200px', '200px']">
            <p class="desc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores unde beatae, quaerat impedit vitae iusto mollitia consequuntur assumenda id saepe, non explicabo blanditiis eum magnam enim eaque, ad molestias facere.</p>
          </Appear>
          <footer>
            <Appear :delay="500"  :transition="['-200px', 0]">
              <Button v-bind:external="false" v-bind:route="'/'" v-bind:text="'Home'"/>
            </Appear>
            <Appear :delay="600"  :transition="['200px', 0]">
              <!-- link to source of returned recipe from function -->
              <Button v-bind:external="true" v-bind:href="getRecipe().url" v-bind:text="'Source'"/>
            </Appear>  
          </footer>
        </main>
      </header>
    </Appear>
    <Appear :delay="600"  :transition="[0, '-200px']">      
      <section>

        <article class="ingredients" >
          <Appear :delay="700"  :transition="['-200px', '-200px']">
             <h1>Ingredients:</h1>
          </Appear>
          <Appear :delay="700"  :transition="['200px', '200px']">
            <ul class="list" >
              <!-- loops through the ingredients of the returned recipe from the funtion displaying all of the text -->
                <li v-bind:key="ingredient.text + ingredient.image + ingredient.weight" v-for="ingredient in getRecipe().ingredients">{{ingredient.text}}</li>
            </ul>
          </Appear>
           
            <!-- Vue carousel of all ingredient images returned from the filtered ingredient funtcion -->
          <Appear :delay="800"  :transition="['200px', 0]">
            <carousel :paginationActiveColor="'#A8A853'" :paginationColor="'#626262'" 
              :autoplayTimeout="4000" 
              :autoplayHoverPause="true" 
              :autoplay="true"  
              :perPageCustom="[[768, 3], [1024, 3], [300, 1], [500, 2]]">
                <slide v-show="ingredient.image" v-bind:key="ingredient.image + ingredient.text + ingredient.weight" v-for="ingredient in filteredIngredients()">
                  <img class="ingredient-img" :src="ingredient.image"><img>
                </slide>
              </carousel>
          </Appear>
           
        
        </article>

        <article class="labels">
            <h1>Labels:</h1>
            <ul>
              <!-- Loops through all labels of the returned recipe from get recipe -->
              <li v-bind:key="caution" v-for="caution in getRecipe().cautions">{{caution}}</li>
          
              <li v-bind:key="diet" v-for="diet in getRecipe().dietLabels">{{diet}}</li>
            
              <li v-bind:key="health" v-for="health in getRecipe().healthLabels">{{health}}</li>
            </ul>
        </article>

        <article class="nutrients">
            <h1>Nutrients:</h1>
            <ul >
              <!-- Loops through nutrients of the returned recipe from the getrecipe function -->
                <li v-bind:key="nutrient.label" v-for="nutrient in getRecipe().totalNutrients">
                  {{nutrient.label}}: {{Math.floor(nutrient.quantity)}}{{nutrient.unit}}
                  </li>
            </ul>
        </article>
      </section>
    </Appear>
    <Appear :delay="800"  :transition="[0, '-200px']"> 
      <!-- Footer component -->
      <Footer class="half" />
    </Appear>
    <!-- Function that centers images in vue carousel if there is only one slide of them -->
    {{justify()}}
  </div>
</template>

<script>
// Imports components and vue carousel
import Footer from '@/components/Footer.vue'
import Button from '@/components/Button.vue'
import { Carousel, Slide } from 'vue-carousel';

export default {
    components: {
      Button,
      Footer,
      Carousel,
      Slide,
    },
    data(){
      return{
        'image': '<img  :src="ingredient.image"><img>',
        'recipe': this.getRecipe(),
      }
    },
    methods: {
        getRecipe(){
          // This function grabs the recipe stored in local storage and then waits for the html to load with settimeout then adding the recipe image as the backdrop to the header on the page. this function also returns the recipe from local storage
          let recipe = JSON.parse(localStorage.getItem('recipe'));
          setTimeout(() => {
          let h = document.querySelector("header");
            h.style.background = `linear-gradient(135deg, rgba(0, 0, 0, .7), rgba(0, 0, 0, .9)), center / cover no-repeat url(${recipe.image})`;
          }, .00001);
          
          return recipe;
        },
        filteredIngredients(){
          //This funciton loops through all ingredients in the recipe and checks to see if the image actually exsists, if it does then return it, else dont. this prevents bug with vue carousel
          let recipe = JSON.parse(localStorage.getItem('recipe'));
          let newImages = recipe.ingredients.filter(ingredient => {
              if(ingredient.image){
                return ingredient
              }
          });
          return newImages;
        },
        justify(){
          //Waits for html to load with settimeout  then checks to see if there is only one slide with vue carousel, if so this then centers the images to make it align with everything else on the page
          setTimeout(() => { 
            let dotContainer = document.querySelector(".VueCarousel-dot-container");
            if(dotContainer.childNodes > 0){
              let inner = document.querySelector(".VueCarousel-inner");
              inner.style = 'justify-content: center;'
            }
            
          });
        },
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
     list-style: none;
}

header{
     min-height: 50vh;
     display: flex;
     justify-content: center;

     main{
          justify-self: center;
          padding: 1.5em;
          min-height: 50vh;
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
     
          h1{
               margin-bottom: .5em;
               text-align: center;
               font-family: $ff-1;
               font-size: 2.5em;
          }
     }
}

section{
  background: $clr-5;
  

  
  article{
    color: $clr-1;

    h1{
      font-size: 2em;
      padding: .5em;
    }

    ul{
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      padding-bottom: 2em;

      li{
        margin: .5em;
      }

    }
  }
}

.VueCarousel {
    padding: 1em;
}

.VueCarousel-dot-container{
  margin-top: 0;
}

.ingredient-img{
  height: 100%;
  width: 80%;
}

@include ipadSmall(){
  header{
    min-height: 35vh;
    main{
      min-height: 35vh;
      p{
        font-size: 1.1em;
      }
    }

  }
}
@include ipadPro(){
  header{
    min-height: 35vh;
    main{
      min-height: 35vh;
      p{
        font-size: 1.1em;
      }
    }

  }
}

@media (min-width: $bp-large){
  header{
    width: 50vw;
    position: fixed;
    height: 100vh;
    right: 0%;
    main{
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }

  section{
    min-height: 90vh;
    width: 50vw;
    .nutrients{
      ul{
        padding: 1em;
      }
    }
  }

  .half{
    width: 50vw
  }
}

@media (min-width: $bp-xlarge){

  header{
    main{
      h1{
        font-size: 4em;
      }
      p{
        font-size: 2em;
      }
    }
  }

  section{
    article{
      h1{
        font-size: 3.2em;
      }
      ul{
        li{
         
          font-size: 1.8em;
          
        }
      }
    }
  }
}


</style>  


