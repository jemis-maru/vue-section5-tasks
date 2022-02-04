const app = Vue.createApp({
  data() {
    return {
      // currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {
    // saveInput(event) {
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userInputText.value;
    },
  },
  beforeCreate(){
    console.log("Before create called!");
  },
  created(){
    console.log("Created called!");
  },
  beforeMount(){
    console.log("Before mount called!");
  },
  mounted(){
    console.log("Mounted called!");
  },
  beforeUpdate(){
    console.log("Before Update called!");
  },
  updated(){
    console.log("Updated called!");
  },
  beforeUnmount(){
    console.log("Before Unmount called!");
  },
  unmounted(){
    console.log("Unmounted called!");
  },
});

app.mount('#app');
// app.unmount();

const app2 = Vue.createApp({
  template: `<h2>{{ app2Message }}</h2>`,
  data() {
    return {
      app2Message: 'This is second app',
    };
  },
});

app2.mount('#app2');
