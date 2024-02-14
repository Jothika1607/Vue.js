var vm = new Vue({  
    el: '#databinding',  
    data: {  
       view: 'component1'  
    },  
    components: {  
       'component1': {  
          template: '<div><span style = "font-size:25;color:Blue;">This is a Dynamic Component Example</span></div>'  
       }  
    }  
 })