<template>
  <div class="home">
    <div><Skin/></div>
    <div><Color/></div>

  </div>
</template>

<script>
import Skin from "@/views/Skin.vue";
import Color from "@/views/Color.vue";
export default {
  name: "Home",
  components: {
    Skin,
    Color
  }
};
</script>
<style>
  div.home {
    min-width : 1300px;
    overflow : scroll;
  }
</style>
