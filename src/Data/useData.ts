import {onMounted, ref} from "vue";
import axios from "axios";


export const useData =()=>{
    const randomWord = ref('')
    const fetching = async ()=>{
        try{
            const res =  await axios.get('https://randomuser.me/api?inc=gender,name')
            randomWord.value = res.data.results[0].name.first.toLowerCase()
        }catch (e){
            console.log(e)
        }

    }

onMounted(fetching)
return{
    randomWord,
    fetching
}
}