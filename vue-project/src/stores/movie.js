// import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { computed, ref, reactive, onMounted } from "vue";
import axios from 'axios';
import { useRouter } from 'vue-router';
export const useMovieStore = defineStore('movie', () => {

    const router = useRouter();
    const searchInput = ref("")
    const singleMovie = ref({})
    // const rev_Movie = ref([])

    const dbanime = ref([])
    const dbmovie = ref([])
    const dbseries = ref([])

    const testSearch = ref([])
    const toSearch = () => {
      router.push({ name: 'filterMovie', query: { search: searchInput.value } });
      test555()
      
    }
 
    const test555 = async() =>{
      const fetchingData = await axios.get('http://localhost:3000/search',
      {
        params: {
          searchInput: searchInput.value
        }
      }
      )
      // console.log(fetchingData.data);
      testSearch.value = fetchingData.data
    }



    const allTrending = ref([])
    const fetchTrending = async () => {
      const fetchingData = await axios.get('http://localhost:3000/trending')
      allTrending.value = fetchingData.data
    }

    const selectTrend = ref("All")
    const fetchSelectTrend = async () => {
      // console.log(selectTrend.value);
      if(selectTrend.value == "All"){
        fetchTrending()
      }
      else{
        const fetchingData = await axios.post('http://localhost:3000/trending',
        {
          type:selectTrend.value
        })
        allTrending.value = fetchingData.data
      }
    }


    function refresh(){
      text.value = ''
    }


    const fetchAnime = async () => {
        const fetchingData = await axios.get('http://localhost:3000/anime')
        dbanime.value = fetchingData.data;
        filAnime.value = fetchingData.data;
      }
    
      const fetchMovie = async () => {
        const fetchingData = await axios.get('http://localhost:3000/movie')
        dbmovie.value = fetchingData.data;
        filmovie.value = fetchingData.data;
      }

      const fetchSeries = async () => {
        const fetchingData = await axios.get('http://localhost:3000/series')
        dbseries.value = fetchingData.data;
        filseries.value = fetchingData.data;
      }


      const fetchSingleMovie = async (id) => {
        return (await axios.get(`http://localhost:3000/movie/${id}`)).data[0]
       }

       const fetchSingleActor = ref([])
      const fetchSingleMovieActor = async (id) => {
        return (await axios.get(`http://localhost:3000/movie/actor/${id}`)).data
       }

      // async function fetchSingleMovieData(id){
      //   singleMovie.value = await fetchSingleMovie(id)
      // }
      // const fetchReview = async (id) => {
      //   return (await axios.get(`http://localhost:3000/rev/${id}`)).data
      //  }
      const filAnime = ref([]) 
      let text = ref('')
      function filteranime(genId){
        if (genId != 'Genres') {
          filAnime.value = dbanime.value.filter((anime) => anime.gen_title == genId);
          console.log('filAnime.value.length', filAnime.value.length)
          if(filAnime.value.length == 0) {
             text.value = 'Not found anime in ' + genId
          }
          else {
            text.value = ''
          }
        }
        else {
          text.value = ''
          filAnime.value = dbanime.value
        }
      }

      
      const filmovie = ref([])
      function filtermovie(genId){
        if (genId != 'Genres') {
          filmovie.value = dbmovie.value.filter((movie) => movie.gen_title == genId);
          console.log('filmovie.value.length', filmovie.value.length)
          if(filmovie.value.length == 0) {
             text.value = 'Not found ' + genId +' movie'
          }
          else {
            text.value = ''
          }
        }
        else {
          text.value = ''
          filmovie.value = dbmovie.value
        }
      }

      
      const filseries = ref([])
      function filterseries(genId){
        if (genId != 'Genres') {
          filseries.value = dbseries.value.filter((series) => series.gen_title == genId);
          console.log('filseries.value.length', filseries.value.length)
          if(filseries.value.length == 0) {
             text.value = 'Not found ' + genId +' series'
          }
          else {
            text.value = ''
          }
        }
        else {
          text.value = ''
          filseries.value = dbseries.value
        }
      }
  return { 
    fetchMovie,
    fetchAnime,
    fetchSeries,
    dbseries,
    dbanime,
    dbmovie,
    // fetchSingleMovieData,
    fetchSingleMovie,
    singleMovie,
    fetchTrending,
    allTrending,
    selectTrend,
    fetchSelectTrend,
    filteranime,
    filAnime,
    text,
    filmovie,
    filseries,
    filtermovie,
    filterseries,
    refresh,
    fetchSingleMovieActor,
    fetchSingleActor,
    searchInput,
    toSearch,
    testSearch,
    test555

}
})