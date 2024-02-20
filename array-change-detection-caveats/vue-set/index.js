new Vue({
    el: "#app",
    data: {
      nestedArray: [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ]
    },
    methods: {
      manipulateArray() {
        // Modify the value of an existing element
        this.nestedArray[0][1] = 20;
  
        // Add a new element to an existing row using Vue.set()
        Vue.set(this.nestedArray[1], 3, 30);
  
        // Add a new row at the end of the nested array using Vue.set()
        Vue.set(this.nestedArray, this.nestedArray.length, [10, 11, 12]);
  
        // Remove the last element of the first row using Vue.set()
        Vue.set(this.nestedArray[0], 2, undefined);
      }
    }
  });
  