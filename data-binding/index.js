//Data binding
var vm = new Vue({  
    el: '#databinding',  
    data: {  
       title : "Data Binding Simple Example",  
       hreflink : "http://www.javatpoint.com"  
    }  
 })  


 //Class binding
 var vm = new Vue({  
    el: '#classbinding',  
    data: {  
       title : "HTML class binding example",  
       isactive : true    //It can be true or false
    }  
 })  
 
 //Assign multiple classes to HTML tags using v-bind attribute
 var vm = new Vue({  
    el: '#classbinding1',  
    data: {  
       title : "HTML multiple class binding example",  
       isActive : true,  
       hasError : false  
    }  
 })  

 //Assign multiple classes using an array
 var vm = new Vue({  
    el: '#classbinding2',  
    data: {  
       title : "Multiple classes with array example",  
       infoclass : 'info',  
       errorclass : 'displayError'  
    }  
 }) 


 //Vue.js Inline Style Binding
 var vm = new Vue({  
    el: '#inlinebinding',  
    data: {  
       title : "Inline style Binding Example",  
       activeColor: 'red',  
       fontSize :'30'  
    }  
 })  

 var vm = new Vue({  
    el: '#inlinebinding1',  
    data: {  
       title : "Inline style Binding Example-2",  
       styleobj : {  
          color: 'red',  
          fontSize :'30px'  
       }  
    }  
 })  