<template>
  <div class="use-absolute">
        <img src="https://avatars1.githubusercontent.com/u/11625554?v=3&s=460" />
  </div>
</template>

<script>
    export default {
        created(){
            console.log('created');
        }
    }
</script>


<style>
.use-absolute{
    position: relative;
    width:100%;
    height:100%;
}
.use-absolute img{
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin-left:-102px;
    margin-top:-102px;
    margin:auto;
}
</style>
