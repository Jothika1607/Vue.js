new Vue({
    el: "#app",
    data: {
      items: ["A", "B", "C"]
    },
    methods: {
      addItem() {
        // Vue.js will detect this change and update the UI
        this.items.push("D");
      },
      modifyItem() {
        // This change won't be detected by Vue.js automatically
        // So, Vue won't update the UI
        this.items[0] = "X";
  
        // Workaround: Use Vue.set() to make it reactive
        Vue.set(this.items, 0, "X");
      }
    }
  });
  
  //pop
  new Vue({
    el: "#app1",
    data: {
      items: ["A", "B", "C"]
    },
    methods: {
      removeItem() {
        // Vue.js will detect this change and update the UI
        this.items.pop();
      }
    }
  });


  //shift
  new Vue({
    el: "#app2",
    data: {
      items: ["A", "B", "C"]
    },
    methods: {
      removeFirstItem() {
        // Vue.js will detect this change and update the UI
        this.items.shift();
      }
    }
  });


  //unshift
  new Vue({
    el: "#app3",
    data: {
      items: ["B", "C"]
    },
    methods: {
      addFirstItem() {
        // Vue.js will detect this change and update the UI
        this.items.unshift("A");
      }
    }
  });


  //splice
  new Vue({
    el: "#app4",
    data: {
      items: ["A", "B", "C"]
    },
    methods: {
      spliceArray() {
        // Vue.js will detect this change and update the UI
        this.items.splice(1, 1, "X", "Y"); // Remove one item at index 1 and insert "X" and "Y"
      }
    }
  });

  //filter
  new Vue({
    el: "#app5",
    data: {
      people: [
        { name: "John", age: 30 },
        { name: "Alice", age: 25 },
        { name: "Bob", age: 35 },
        { name: "Eve", age: 28 }
      ],
      searchTerm: ""
    },
    computed: {
      filteredPeople() {
        // This will update automatically whenever searchTerm changes
        return this.people.filter(person => {
          // Case-insensitive search by name
          return person.name.toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      }
    }
  });
  
  
  
  
  