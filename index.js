var vm = new Vue({  
    el: '#directive',  
   data: {  
       name : ""  
    },  
    filters : {  
       countletters : function(value) {  
          return value.length;  
       }  
    }  
 })  