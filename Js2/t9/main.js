const App = {
    data() {
      return {
        counter: 0,
        title: 'Test title',
        show: false,
        showTest: true,
        balance: 0,
        showButton: true,
        courses: [
            {title: '2015 year', value: " 15"},
            {title: '2018 year', value: " 15"},
            {title: '2022 year', value: " 15"}
        ]
      }
    },
    mounted() {
        setInterval(() => {
          this.counter++;
          this.showButton = true;
          if(this.counter >= 3){
            this.show = true;
          }
        }, 1000)
        this.title = "Сторінка завантаження"
    },
    methods: {
        getBitcoin(){
            alert(
                `
                Виведено ${this.counter} біткоіни!
                На рахунку ${this.balance} біткоінів!
                `
                );
            this.balance = this.balance + this.counter;
            this.counter = 0;
        }
    }
}
Vue.createApp(App).mount('#app');
