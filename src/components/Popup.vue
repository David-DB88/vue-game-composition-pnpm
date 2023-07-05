<template>
  <div class="popup-container" v-if="isVisible">
    <div class="popup">
      <h2 v-if="gameStatus === 'win'">Поздравляю, вы победили! 😃</h2>
      <template v-else>
        <h2>Вы проиграли. 😕</h2>
        <h3>...имя: {{ props.randomWord }}</h3>
      </template>

      <button @click="$emit('restart')">Сыграть еще раз</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import {GameStatus} from "@/Types/GameStatus";

interface Props {
  randomWord: string,
}

const props = defineProps<Props>()
const isVisible = ref(false)

const gameStatus = ref<GameStatus | null>(null)

const open = (status) => {
  isVisible.value = true
  gameStatus.value = status
}
const close = () => {
  isVisible.value = false
  gameStatus.value = null
}
defineExpose({
  open,
  close
})
defineEmits<{
  (e: 'restart'): void
}>()
</script>

<style scoped>

</style>