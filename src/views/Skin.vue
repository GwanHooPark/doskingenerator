<template src="../assets/messenger.html">
</template>
<script>
    //import { mapGetters } from 'vuex'
    export default {
        name: "Skin",
        computed: {
            cssProps() {
              return {
                    '--sidebar-hover-color' : this.$store.getters.getSideBarHoverColor
              }
            },
            getTitleBarTextColor() {
                return this.$store.getters.getTitleBarTextColor;
            },
            getTitleBarColor() {
                return this.$store.getters.getTitleBarColor;
            },
            getSideBarColor() {
                return this.$store.getters.getSideBarColor;
            },
            getSideBarHoverColor() {
                return this.$store.getters.getSideBarHoverColor;
            }
        }
        /*computed : mapGetters([
            'getSideBarColor',
            'getSideBarHoverColor'
        ])*/
    };
</script>
<style>
    @import '../assets/skin/css/go_messenger.css';
    @import '../assets/skin/css/go_messenger_d.css';
    @import '../assets/skin/css/custom.css';
    @import '../assets/skin/css/dynamic.css';
</style>
