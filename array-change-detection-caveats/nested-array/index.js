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
      // Adding a new row at the end
      this.nestedArray.push([10, 11, 12]);

      // Removing the first row
      this.nestedArray.shift();

      // Modifying an element in the second row
      this.nestedArray[1][0] = 99;

      // Adding a new element to the first row
      this.nestedArray[0].push(4);
    }
  }
});

