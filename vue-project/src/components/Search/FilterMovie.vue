<template>
  <h1 class="is-size-2 has-text-weight-bold has-text-centered m-5">
    Search "{{ movieStore.searchInput }}"
  </h1>

  <MessText message="TITLE"></MessText>
  <div v-if="movieStore.testSearch.movie.length == 0" class="column has-text-centered pt-4 is-size-5">
    <b>
      <p class="is-size-4">Not Found</p>
    </b>
  </div>
  <div v-else class="task-container columns is-multiline px-6 py-6">
    <MovieCard v-for="item in movieStore.testSearch.movie" :item="item"></MovieCard>
  </div>

  <MessText message="ACTOR"></MessText>
  <div v-if="movieStore.testSearch.actor.length == 0" class="column has-text-centered pt-4 is-size-5">
    <b>
      <p class="is-size-4">Not Found</p>
    </b>
  </div>
  <div v-else class="task-container is-multiline px-6 py-6">
    <ActorSearch v-for="item in movieStore.testSearch.actor" :item="item"></ActorSearch>
  </div>

  <MessText message="DIRETOR"></MessText>
  <div v-if="movieStore.testSearch.dir.length == 0" class="column has-text-centered pt-4 is-size-5">
    <b>
      <p class="is-size-4">Not Found</p>
    </b>
  </div>
  <div v-else class="task-container is-multiline px-6 py-6">
    <DirectorSearch v-for="item in movieStore.testSearch.dir" :item="item"></DirectorSearch>
  </div>

  <!-- <h1>{{ movieStore.testSearch }}</h1> -->
</template>

<script setup>
import { useMovieStore } from "@/stores/movie";
import { computed, ref, reactive, onMounted } from "vue";
import MessText from "@/components/MessText.vue";
import MovieCard from "@/components/MovieCard.vue";
import ActorSearch from "@/components/Search/ActorSearch.vue";
import DirectorSearch from "@/components/Search/DirectorSearch.vue";
const movieStore = useMovieStore();

// onMounted(movieStore.test555)
</script>

<style></style>