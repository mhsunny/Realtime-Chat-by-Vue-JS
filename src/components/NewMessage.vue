<template>
  <div class="new-message">
     
      <form @submit.prevent="addMessage">
          <label for="name">New Message (Enter to add)</label>
            <input type="text" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="red-text">{{feedback}}</p>
         </form>
  </div>
</template>

 
<script>
import db from '@/firebase/init'
 export default {
   name: 'NewMessage',
   props: ['name'],
  data () {
    return {
      newMessage: null,
      feedback : null,
    }
  } ,
  methods:{
    addMessage(){
     // console.log(this.newMessage, this.name, Date.now());
     if(this.newMessage){
       db.collection('messages').add({
         content: this.newMessage,
         name: this.name,
         timestamp: Date.now()
       }).catch(err =>{
         console.log(error);
       })
       this.newMessage = null
       this.feedback - null

     }else{
       this.feedback = "You must enter a message to send"
     }
    }
  }
}
</script>

<style>

</style>