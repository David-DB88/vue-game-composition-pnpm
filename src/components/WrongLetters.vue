<template>
  <div class="wrong-letters-container">
    <div class="wrong-letters">
      <p>Ошибки</p>
      <span
          v-for="wrongLetter in props.wrongLetters"
          :key="wrongLetter"
      >{{wrongLetter + ', '}}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  wrongLetters: string[]
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>