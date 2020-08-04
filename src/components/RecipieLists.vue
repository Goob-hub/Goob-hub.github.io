<template>
<div>
     <main>
          <div class="container" >
               <!-- If the showText boolean is true, then display the text -->
               <h1 v-show="showText === true">Search results will apear here!</h1>
               <!-- Adds ID's to the recipes -->
               {{addID()}}
               <div class="card" v-bind:key=recipe.id v-for="recipe in recipies">
                    <!-- Loops through all reicpes and displays them in a card format aswell as giving them transitions with a delay based on the order they are in the array -->
                    <Appear :delay="200 * (recipies.indexOf(recipe) + 1)" :transition="['-200px', 0]"> 
                         <!-- if the mouse enters the card then call the storeRecipe function -->
                    <div class="img-box" @mouseenter="$emit('getRecipe', storeRecipe(recipe))"> 
                         <!-- Adds events to the cards so that they can have the book opening animation when hovered over -->
                         {{addEvents()}}
                         <h1>Hover over me!</h1>
                         <img :src="recipe.image" alt="">
                    </div>
                    </Appear>
                    <!-- transition Delay based on the index of the current recipe -->
                    <Appear :delay="200 * (recipies.indexOf(recipe) + 1)" :transition="['-200px', 0]"> 
                         <!-- Details of the current recipe will be displayed here -->
                    <div class="details">
                         <h3>{{recipe.label}}</h3>
                         <router-link class="btn btn-recipe" to="/FullRecipe">View recipe</router-link>
                         <p class="calories"> <strong>Calories:</strong> {{Math.floor(recipe.calories)}}<p>
                         <h3>Health Labels:</h3>
                         <div>
                              <!-- Loops through all labels on the current recipe and displays them -->
                              <p v-bind:key=label v-for="label in recipe.healthLabels">{{label}}</p>
                         </div>
                         
                    </div>
                    </Appear>
                   
               </div> 
               
          </div>
     </main>  


</div>
</template>

<script>

export default {
     name: 'RecipieLists',
     props: ["recipies", "showText"],
     data () {
          return{
               // The stored reicpe will be whats stored in local storage so that it can be used in the fullRecipe page
               'storedRecipe': {},
          }
     }, 
     methods: {
          addID(){
               // Loops through all recipes and gives them a specific id to prevent duplicate id's
               this.recipies.forEach(recipe => {    
                    let id =  Math.random();
                    recipe = {...recipe, id};
                    console.log(recipe);
               });
          },
         storeRecipe(r){
               //Stores recipe selected in local storage
              this.storedRecipe = r;
              localStorage.setItem('recipe', JSON.stringify(this.storedRecipe));
         },
         addEvents(){
              //Waits for html to load and then adds mouse enter and mouse leave events to each recipe card
              setTimeout(() => {
                   let cards = document.querySelectorAll(".card");  
                    cards.forEach(card => {
                    card.addEventListener('mouseenter', e => {
                         //Rotates image on the y-axis giving the effect of an opening book
                        let imgBox = e.currentTarget.childNodes[0];
                        imgBox.style.transform = 'rotateY(-135deg)';
                        imgBox.style.transition = '.7s linear'
                    });
                    card.addEventListener('mouseleave', e => {
                         //Sets the image back to 0 rotation on the y axis giving the effect of a book closing
                        let imgBox = e.currentTarget.childNodes[0];
                         imgBox.style.transform = 'rotateY(0deg)';
                    });
               }) 
              });
              
          },
     }
}
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Nunito|Quicksand');
$ff-1: 'Quicksand', sans-serif;
$ff-2: 'Nunito', sans-serif;

$clr-1: #262626;
$clr-2: #3C2216;
$clr-5: #E2E2E2;
$clr-6: #F3F3F3;
$clr-3: #A8A853;
$clr-4: #5A5A0F;

$backdrop-gradient: linear-gradient(135deg, rgba(0, 0, 0, .51), rgba(0, 0, 0, .65)); 
$btn-gradient: linear-gradient(135deg, $clr-3, $clr-4); 

$transition: .7s linear;
$shadow: 5px 5px 6px rgba(0, 0, 0, .23);

//breakpoints
$bp-small: 48em; // 768px
$bp-medium: 64em; // 1024px
$bp-large: 85.375em; // 1366px
$bp-xlarge: 120em; // 1920px
$bp-xxlarge: 160em; // 2560px

*{
     font-family: $ff-2;
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

.btn-recipe{
     color: $clr-5;
     text-decoration: none;
     margin-top: .5em;
     font-size: 1.5em;
     padding: .25em .5em .25em .5em;
     background: darkgreen;
     border-radius: 1em;
     transition: $transition;
     position: relative;

     &:hover, :focus{
          color: white;
          text-shadow: 0px 0px 5px rgba(white, .4);
          background: green;
     }

          
}


main{
     background: $clr-1;
     display: flex;
     justify-content: center;
     align-items: center;
     flex-wrap: wrap;
     min-height: 50vh;
     h1{
          color: $clr-5;
          opacity: .3;
          font-size: 2.5em;
          text-align: center;
     }

     @media (min-width: $bp-xlarge){
          font-size: 2em;
     }
}

.container{
     max-width: 100%;
     margin: 50px auto;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     @media (min-width: $bp-large){
          max-width: 80%;
     }
     @media (min-width: $bp-xlarge){

     }
}

.card{
     position: relative;
     margin: 2em 1em 2em 1em;
     width: 250px;
     height: 380px;
     transform-style: preserve-3d;
     transform: perspective(2000px);
     transition: $transition;
     box-shadow: inset 300px 0 50px rgba(0, 0, 0, .5);
     box-shadow: $shadow;

     &:hover{
          transform: perspective(2000px) rotate(-10deg);
     }
          

     .img-box{
          position: relative;
          width: 100%;
          height: 100%;
          box-sizing: border-box;
          transform-origin: left;
          z-index: 1;
          transition: $transition;

          h1{
               position: absolute;
               bottom: 0%;
               left: 0%;
               width: 100%;
               font-size: 2em;
               z-index: 2;
               color: white;
               text-align: center;
               opacity: 1;
               background: $backdrop-gradient;

          }

          img{
               position: absolute;
               top: 0;
               left: 0;
               height: 100%;
               width: 100%;
               object-fit: cover;
          }
     }

     .details{
          text-align: center;
          color: $clr-5;
          position: absolute;
          top: 0;
          left: 0;
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 100%;
          width: 100%;
          background: $clr-2;

          h2, .btn, .calories{
               margin-bottom: .7em;
          }

          h3{
               font-size: 1.5em;
          }

          div{
               width: 100%;
               display: flex;
               flex-wrap: wrap;
               justify-content: center;
               align-items: center;
               p{
                    margin: 5px;
               }
          }
     }


     @media (min-width: $bp-large){
          width: 300px;
          height: 450px;
          .img-box{
               h1{
                    font-size: 2.5em;
               }
          }

          .details{
               font-size: 1.2em;

               h3{
                    font-size: 1.4em;
               }
          }
    
     }
     @media (min-width: $bp-xlarge){
          margin: 3em 2em 3em 2em;
          width: 500px;
          height: 700px;
          
          .img-box{
               h1{
                    font-size: 1.5em;
               }
          }

          .details{
               padding: .5em;
               h3{
                    font-size: 1.2em;
               }

               .btn{
                    font-size: 1em;
               }

               div{
                    p{
                         font-size: .8em;
                    }
               }
          }
    
     }

}



.hide{
     display: none;
}

</style>