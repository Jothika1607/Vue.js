//v if directive
var app = new Vue({  
    el: '#app',  
    data: {  
      seen: true 
    }  
  })  


  //v if-else directive
var app1 = new Vue({  
    el: '#app1',  
    data: {  
      seen: false   
    }  
  })

//v for directive
  var app2 = new Vue({  
    el: '#app2',  
    data: {  
      todos: [  
        { text: 'HTML Tutorial' },  
        { text: 'CSS Tutorial' },  
        { text: 'JavaScript Tutorial' },  
        { text: 'AngularJS Tutorial' },  
        { text: 'Vue.js Tutorial' }  
      ]  
    }  
  }) 

//handling user inputs
//on directive
var app3 = new Vue({  
    el: '#app3',  
    data: {  
      message: 'This is  Vue.js Example!'  
    },  
    methods: {  
      reverseMessage() {  
        this.message = this.message.split('').reverse().join('') 
      }  
    }  
  })

  //v model directive
  var app4 = new Vue({  
    el: '#app4',  
    data: {  
      message: 'Two way data binding!'  
    }  
  })  

  //show directive
    //v if-else directive
var app5 = new Vue({  
  el: '#app5',  
  data: {  
    show: true
  }  
})

//show directive
var vm = new Vue({
  el: '#databinding',
  data: {
     items:[],
     styleobj: {
        width: "30%",
        padding: "12px 20px",
        margin: "8px 0",
        boxSizing: "border-box"
     }
  },
  methods : {
     showinputvalue : function(event) {
        this.items.push(event.target.value);
     }
  },
});