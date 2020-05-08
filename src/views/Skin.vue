<template src="../assets/messenger.html">
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: "Skin",
        /*data: function() {
            return {
                hoverColor : this.$store.getters.getSideBarColor
            };
        },
        computed: {
            getSideBarColor() {
                return this.$store.getters.getSideBarColor
            },
            getSideBarHoverColor() {
                return this.$store.getters.getSideBarHoverColor
            }
        }*/
        computed : mapGetters([
            'getSideBarColor',
            'getSideBarHoverColor'
        ])
    };
</script>
<style>
    @import '../assets/skin/css/go_messenger.css';
    @import '../assets/skin/css/go_messenger_d.css';
    div.msn.on {
        position : static;
    }
    div.wrapper {
        width : 1023px;
        height : 700px;
        border-right : 1px solid #999;
        border-bottom : 1px solid #999 !important;
    }
</style>
