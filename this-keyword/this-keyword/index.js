// Creating Vue Instance
var vm = new Vue({

    // Assigning id of DOM in parameter
    el: '#home',
    // Assigning values of parameter
    data: {
        title : "Vue JS Framewwork",
        name : "Vue.js",
        topic : "this keyword"
    },

    // Creating methods
    methods : {

        // Creating function
        show: function(){
            return "Welcome to this tutorial on "
                + this.name + " - " + this.topic;
        }
    }
});