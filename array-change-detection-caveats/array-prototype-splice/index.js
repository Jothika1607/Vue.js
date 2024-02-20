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
        // Removing the second element of the second row
        this.nestedArray[1].splice(1, 1);
  
        // Adding a new element (99) after the second element of the first row
        this.nestedArray[0].splice(2, 0, 99);
  
        // Replacing the entire second row with a new array
        this.nestedArray.splice(1, 1, [10, 11, 12]);
      }
    }
  });
  