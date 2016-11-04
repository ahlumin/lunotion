<template>
  <div class="artical">
      <span class="tl">{{artical.title}}</span> <!--標題-->
      <span class="date">{{artical.date}}</span> <!--時間-->
      <img v-bind:src="artical.cover"/> <!--cover-->
      <p v-html="artical.summary"></p><!--描述-->
      <tags-btn v-bind:taglist="artical.tags"></tags-btn>
      <readmore-btn></readmore-btn>
      <div class="content">
          <content-template v-bind:paragraph="artical.content"></content-template>
          <collapse-btn></collapse-btn>
      </div>
  </div>
</template>

<script>
  module.exports = {
    components: {
      'readmore-btn': require('readmore'),
      'collapse-btn': require('collapse'),
      'tags-btn': require('tag'),
      'content-template': require('content')
    },
    props: {
      artical: Object
    }
  };
</script>