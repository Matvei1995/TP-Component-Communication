<template>
    <ul class="list-group">
      <active-user :nom="nom" :age="age" :mail="mail"/>
      <user-data @majData="exportData"/>
       
    </ul>
</template>

<script>
export default{
  data(){
    return{
      nom: 'marcelino',
      age: '0675343234',
      mail:'marcelino@mar.mar'
    }
  },
  methods:{
    exportData(nom,age,mail){
        
           this.nom = nom;
           this.age = age;
           this.mail= mail;
        
         
      

    
  }
}}
</script>