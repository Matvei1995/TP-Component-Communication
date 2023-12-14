<template>
  <div class="text-center">
    <p>Nom : {{ nom }}</p>
    <p>Âge : {{ age }}</p>
    <p>email : {{ mail }}</p>
    
  </div>
</template>

<script>
export default {
  props: {
    
        nom:{
          type: String,
          required:true,
        },
        age:{
          type: String,
          required:true,
        },
        mail:{
          type: String,
          required:true,

        }
      
    
  },
};
</script>
