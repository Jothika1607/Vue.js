//Click Event
var vm = new Vue({  
    el: "#app",  
    data: {  
       num1: 50,  
       num2 : 100,  
       total : ''  
    },  
    methods : {  
       displaynumbers : function(event) {  
          console.log(event);  
          return this.total =  this.num1+ this.num2;  
       }  
    },  
 })  

 //Mouseover and Mouseout Event
 var vm = new Vue({  
    el: '#databinding',  
    data: {  
       num1: 100,  
       num2 : 200,  
       total : '',  
       styleobj : {  
          width:"100px",  
          height:"100px",  
          backgroundColor:"red"  
       }  
    },  
    methods : {  
       changebgcolor : function() {  
          this.styleobj.backgroundColor = "blue";  
       },  
       originalcolor : function() {  
          this.styleobj.backgroundColor = "brown";  
       }  
    },  
 })  

 //.once Event Modifier

 var vm = new Vue({  
    el: '#eg_2',  
    data: {  
       clicknum : 0,  
       clicknum1 :0,  
       styleobj: {  
          backgroundColor: '#2196F3!important',  
          cursor: 'pointer',  
          padding: '8px 16px',  
          verticalAlign: 'middle',  
       }  
    },  
    methods : {  
       buttonclickedonce : function() {  
          this.clicknum++;  
       },  
       buttonclicked : function() {  
          this.clicknum1++;  
       }  
    }  
 })  

 //.prevent Event Modifier
 var vm = new Vue({  
    el: '#eg_3',  
    data: {  
       clicknum : 0,  
       clicknum1 :0,  
       styleobj: {  
          color: '#4CAF50',  
          marginLeft: '20px',  
          fontSize: '30px'  
       }  
    },  
    methods : {  
       clickme : function() {  
          alert("Anchor tag is clicked");  
       }  
    }  
 })  

//Vue.js Event Key Modifiers
 var vm = new Vue({  
   el: '#key_1',  
   data: {  
      name:'',  
      styleobj: {  
         width: "100%",  
         padding: "12px 20px",  
         margin: "8px 0",  
         boxSizing: "border-box"  
      }  
   },  
   methods : {  
      showinputvalue : function(event) {  
         this.name=event.target.value;  
      }  
   }  
}) 

//Vue.js Custom Events
Vue.component('button-counter', {
   template: '<button v-on:click="displayLanguage(item)"><span style="font-size:25px;">{{ item }}</span></button>',
   props: ['item'],
   methods: {
     displayLanguage: function (lng) {
       console.log(lng);
       this.$emit('showlanguage', lng);
     }
   }
 });

 var vm = new Vue({
   el: '#eg_4',
   data: {
     languageclicked: "",
     languages: ["Java", "C", "C++", "Python", "Javascript", "Angular", "Data Structure", "jQuery"]
   },
   methods: {
     languagedisp: function (a) {
       this.languageclicked = a;
     }
   }
 });