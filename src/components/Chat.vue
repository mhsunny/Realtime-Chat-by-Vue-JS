<template>
  <div class="chat container">
    <h2 class="center teal-text">Realtime Chat </h2>
     

    <div class="card">
      <div class="card-content">
        <ul class="messages" v-chat-scroll>
          <li v-for="message in messages" :key="message.id">
            <span class="teal-text">{{message.name}}</span>
            <span class="grey-text text-darken-3">{{message.content}}</span>
            <span class="grey-text time">{{message.timestamp}}</span>
          </li>
        </ul>
      </div>
       <div class="card-content input-text-content">
        <NewMessage :name="name"/>
       </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase/init'
import moment from 'moment'
import NewMessage from '@/components/NewMessage'

// var mixin = {
//   data: function () {
//     return {
//       message: 'hello',
//       foo: 'abc'
//     }
//   }
// }

// var mixin = {
//   created: function () {
//     console.log('mixin hook called')
//   }
// }

export default {
//  mixins: [mixin],
  name: 'Chat',
  props: ['name'],
  components:{
    NewMessage
  },
  data () {
    return {
      messages: []
    }
  }
  ,
  created(){
    let ref = db.collection('messages').orderBy('timestamp')
    ref.onSnapshot(snapshot =>{
     //console.log( snapshot.docChanges())

     snapshot.docChanges().forEach(change => {
       if(change.type == 'added'){
        
        let doc = change.doc
        this.messages.push({
          id: doc.id,
          name: doc.data().name,
          content: doc.data().content,
          timestamp: moment(doc.data().timestamp).format('lll')
        })

       }
     });

    })
  }
}
</script>


 <style>  
.chat{
max-width: 400px;
margin: 0 auto;
padding: 20px;
}
.chat h2{
  font-size: 2.6rem;
}
.chat span{
  font-size: 1rem;
}
.chat .time{
  display: block;
  font-size: .8rem;
}
.input-text-content{
  padding: 0px 20px 20px 20px !important;
}
.messages{
  max-height: 300px;
  overflow: auto;
}
.messages::-webkit-scrollbar {
  width: 3px;
}
 
.messages::-webkit-scrollbar-track {
  background: #ddd;
}
 
.messages::-webkit-scrollbar-thumb {
  background: #aaa; 
}
</style>
