//v-for with a Range
new Vue({
    el: "#app",
    data: {}
  });

//v-for on a Template
new Vue({
    el: "#app1",
    data: {}
  });

//v-for with v-if
new Vue({
    el: "#app2",
    data: {
      numbers: [1, 2, 3, 4, 5]
    }
  });


//use a computed property
new Vue({
  el: "#app3",
  data: {
    numbers: [1, 2, 3, 4, 5]
  },
  computed: {
    not3() {
      return this.numbers.filter(p => p !== 3);
    }
  }
});

//v-for with a Component
Vue.component("num", {
    props: ["num"],
    template: "<span>{{num}}</span>"
  });
  new Vue({
    el: "#app4",
    data: {
      numbers: [1, 2, 3, 4, 5]
    }
  });

