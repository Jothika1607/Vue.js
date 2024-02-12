//We have created a common component to use with both the view instances.
Vue.component('testcomponent',{  
    template : '<div><h1>This is a component example</h1></div>'  
 });  

 //In the Index .js file, we have created two Vue.js instances with the respective div ids.
 var vm = new Vue({  
    el: '#component_test1'  
 });  
 var vm1 = new Vue({  
    el: '#component_test2'  
 });  

 //We can directly make the components a part of vue.js instance by using the following code in Index.js file. 
 //This method is called local registration. 
 var vm = new Vue({  
   el: '#component_test3',  
   components:{  
      'testcomponent': {  
        template : '<div><h1>This is a local registration for components</h1></div>'   
      }  
   }  
});  


//component with option
//In spite of having data as a function in components, we can use its properties the same way as we use with direct Vue instance. 
//Also, there are two methods added, changename and originalname. 
//In changename, we are changing the name property, and in originalname we are resetting it back to the original name.
//We have also added two events on the div, mouseover and mouseout. The details of the events will be discussed in the Events chapter. 
//So for now, mouseover calls changename method and mouseout calls originalname method.
Vue.component('testcomponent',{
   template : '<div v-on:mouseover = "changename()" v-on:mouseout = "originalname();"><h1>Custom Component created by <span id = "name">{{name}}</span></h1></div>',
   data: function() {
      return {
         name : "Jo"
      }
   },
   methods:{
      changename : function() {
         this.name = "Jothika Sooludaiyar";
      },
      originalname: function() {
         this.name = "Jothika";
      }
   }
});
var vm = new Vue({
   el: '#component_test4'
});