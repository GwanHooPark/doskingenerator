<template src="../../public/messenger.html">
</template>
<script>
    //import { mapGetters } from 'vuex'
    export default {
        name: "Skin",
        data () {
            return {
                publicPath: process.env.BASE_URL
            }
        },
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
    @import '../../public/skin/css/go_messenger.css';
    @import '../../public/skin/css/go_messenger_d.css';
    @import '../../public/skin/css/custom.css';
    @import '../../public/skin/css/dynamic.css';
</style>