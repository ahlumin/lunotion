<template>
  <div class="use-absolute">
    <div>
        <img src="//avatars2.githubusercontent.com/u/11625554?v=3&u=07a232ea8026737acf50ad2515dd09c3da7702ae&s=400" />
    </div>
  </div>
</template>


<style>
.use-absolute{
    position: relative;
    width:100%;
    height:100%;
}
.use-absolute div{
    position: absolute;
    top:0;
    right:0;
    bottom:0;
    left:0;
    margin:auto;
    width:100px;
    height:50px;
}
</style>
