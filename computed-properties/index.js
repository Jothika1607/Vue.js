//Using computed properties reversed the message
var vm = new Vue({  
    el: '#com_props',  
    data: {  
      message: 'This is a vue.js program'  
    },  
    computed: {  
      // a computed getter  
      reversedMessage: function () {  
        // `this` points to the vm instance  
        return this.message.split('').reverse().join('')  
      }  
    }  
  })  

  //Retrieve the names  using computed properties
  var vm = new Vue({  
    el: '#com_props1',  
    data: {  
       firstname :"",  
       lastname :"" 
    },  
    computed :{  
       getfullname : function(){  
          return this.firstname +" "+ this.lastname;  
       }  
    }  
 })  

//Difference between a method and a computed property
//random numbers returned from the computed property remain the same every time irrespective of the number of times it is called. 
//This means every time it is called; the last value is updated for all. 
//On the other hand, for a method, it is a function, so it returns a different value every time it is called.
 var vm = new Vue({  
  el: '#com_props2',  
  data: {  
     name : "helloworld"  
  },  
  methods: {  
     getrandomno1 : function() {  
        return Math.random();  
     }  
  },  
  computed :{  
     getrandomno : function(){  
        return Math.random();  
     }  
  }  
}) 


//get and set in computed properties
var vm = new Vue({  
  el: '#com_props3',  
  data: {  
     firstName : "Jothika",  
     lastName : "Sooludaiyar"  
  },  
  methods: {  
  },  
  computed :{  
     fullname : {  
        get : function() {  
           return this.firstName+" "+this.lastName;  
        } ,
        set : function(name) {  
          var fname = name.split(" ");  
          this.firstName = fname[0];  
          this.lastName = fname[1]  
       }  
     }  
  }  
})  