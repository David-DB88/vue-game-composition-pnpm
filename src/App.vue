<template>
  <h1>{{randomWord}}</h1>
  <div id="app">
    <Header/>
    <div class="game-container">
      <Figure :wrongLettersLength="wrongLetters.length"/>
      <WrongLetters :wrongLetters="wrongLetters"/>
      <Word :randomWord="randomWord" :letters="correctLetters"/>
    </div>
    <Popup :wrongLetters="wrongLetters" :randomWord="randomWord"  @restart="restart" ref="popup"/>
    <Notification ref="notification"/>
  </div>
</template>

<script setup lang="ts">
import Header from "@/components/Header.vue";
import Figure from "@/components/Figure.vue";
import WrongLetters from "@/components/WrongLetters.vue";
import Word from "@/components/Word.vue";
import Notification from "@/components/Notification.vue";
import {computed, ref, watch, watchEffect} from "vue";
import Popup from "@/components/Popup.vue";
import {useData} from "@/Data/useData";
import {useComputed} from "@/hooks/useComputed";
//State
const {randomWord, fetching} = useData()


const letters = ref<string[]>([])
//Computed
const { correctLetters, wrongLetters, isWin, isLose}= useComputed(randomWord, letters)
const notification = ref<InstanceType<typeof Notification>  | null>(null)
const popup = ref<InstanceType<typeof Popup>  | null>(null)
//Watcher

watch(wrongLetters, ()=>{

 if(isLose.value){
   popup.value.open('lose')
 }
})
watch(correctLetters, ()=>{
 if(isWin.value){
   popup.value.open('win')
 }
})

// Methods
const restart = async ()=>{
  await fetching()
  letters.value = []
  popup.value.close()
}
window.addEventListener('keydown', ({key})=>{
  if(isWin.value || isLose.value){
    return;
  }
  if(letters.value.includes(key)){
    notification.value?.open()
   setTimeout(()=>{
      notification.value?.close()
    }, 1000)
    return
  }
  if(/^[a-z]+$/i.test(key)){
    letters.value.push(key.toLowerCase())
  }

})

</script>

<style>

</style>
