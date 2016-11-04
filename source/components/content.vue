<template>
  <div v-html="paragraph"></div>
</template>

<script>
  module.exports = {
    props:{
      paragraph:String
    }
  };
</script>