<template>
  <div class="home">
    <Appear :transition="[0, '-100px']">
      <!-- When the getQuery event is emmited from the top component, it then calls the fetchData function passing the query returned from the getQuery event into the fetchData function paramaters -->
      <Top v-on:getQuery="fetchData"/>
    </Appear>
    <Appear :delay="700" :transition="[0, '-100px']"> 
      <!-- Binds the list of recipies and the boolean of whether or not the 'search results will appear here' text will be displayed -->
      <RecipieLists v-bind:showText="showText" v-bind:recipies="recipies" />
    </Appear>
    <Appear :delay="800" :transition="['3em', 0]"> 
      <Footer />
    </Appear>
  </div>
</template>

<script>
import Top from '@/components/Top.vue'
import RecipieLists from '@/components/RecipieLists.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Top,
    RecipieLists,
    Footer
  },
  data () {
    return {
        // Url base is the base for getting data from ednam
        'url_base': 'https://api.edamam.com/search',
        //App id for gettting data
        'app_id': '0e1f9295',
        //App key for getting data
        'app_key': 'cbe519667a1441dcceea9f78daecde53',
        //Query that gets returned from the top component
        'query': '',
        //Bool for telling the cpu when to display the text in the middle of the recipelist component
        'showText': true,
        //Array of recipies returned from the ednam api 
        recipies:[
         
        ]
    }
  },
  methods: {
    async fetchData(query) {
      //Fetches data from ednam api using the data defined above and using the querey returned from the form in the top component
      this.query = query;
      await fetch(`${this.url_base}?q=${this.query}&app_id=${this.app_id}&app_key=${this.app_key}`)
      .then(res => res.json())
      .then(data => this.setData(data))
    },
    setData(results){
      this.recipies = [];
      //If there are no search results, then display text in the middle of the fullRecipe component, else display the returned recipes
      results.hits.length === 0 ? this.showText = true : this.showText = false;
      let {hits} = results;
      hits.forEach(hit => {
        let recipe = hit.recipe;
        //Adds the recipe into the recipes array using Array deconstruction
        this.recipies = [...this.recipies, recipe];
        
      });
    }
  }
}
</script>

<style lang="scss">


</style>
