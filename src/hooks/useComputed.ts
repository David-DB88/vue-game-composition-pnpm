import {computed, Ref} from "vue";


export const useComputed = (randomWord: Ref<string>, letters: Ref<string[]>)=>{

    const correctLetters = computed(()=> letters.value.filter(l=>randomWord.value?.includes(l)))
    const wrongLetters = computed(()=> letters.value.filter(l=>!randomWord.value?.includes(l)))
    const isWin = computed(()=> randomWord.value && [...randomWord.value].every(l=>correctLetters.value.includes(l)))
    const isLose = computed(()=>  wrongLetters.value.length === 6)

    return {
        correctLetters,
        wrongLetters,
        isWin,
        isLose
    }
}