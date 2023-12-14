<template>
  <div class="border border-success bg-success">
    <h1 class="text-center">Modifier les données</h1>
    <form @submit.prevent="majData">
    
      <input type="text" v-model="nom" placeholder="Nom" class="form-control form-control-sm bg-warning text-white">
    <input type="number" v-model="age" placeholder="Âge" class="form-control form-control-sm bg-warning text-white">
    <input type="email" v-model="mail" placeholder="mail" class="form-control form-control-sm bg-warning text-white">
    <button class=" m-1 btn btn-outline-success text-white border border-warning" >MAJ des données</button>
    
    </form>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      nom: "",
      age: "",
      mail:"",
    };
  },
  emits:["majData"],
  methods: {
    majData() {
      console.log("test");
  
      this.$emit("majData", 
        this.nom,
        this.age,
        this.mail,
      );
    },
  },
};
</script>
