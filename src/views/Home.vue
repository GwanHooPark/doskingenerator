<template>
  <div class="home">
    <Skin/>
    <Color/>
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
