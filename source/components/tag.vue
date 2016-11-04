<template>
  <ul class="tags"><li v-for="one in taglist">{{one}}</li></ul>
</template>

<script>
  module.exports = {
    props:{
      taglist:Array
    }
  };
</script>