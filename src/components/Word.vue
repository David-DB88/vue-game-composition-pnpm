<template>
  <div class="word">
    <span v-for="letter in props.randomWord" class="letter">
      {{props.letters.includes(letter)? letter: ''}}
    </span>
  </div>
</template>

<script setup lang="ts">
interface Props {
  randomWord: string
  letters: string[]
}
const props = defineProps<Props>()
</script>

<style scoped>

</style>