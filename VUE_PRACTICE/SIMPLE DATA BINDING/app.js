const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  methods:{
    updateName(event){
      this.name=event.target.value;
    },
    add(){
      this.counter++;
    },
    reduce(){
      this.counter--;
    },
    reset(){
      this.counter=0;
    }

  }
});

app.mount('#events');
