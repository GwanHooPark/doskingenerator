<template>
    <div class="color">
        <chrome-picker :value="sideBarcolors" @input="updatesideBarColor" />
        <chrome-picker2 :value="sideBarHovercolors" @input="updatesideBarHoverColor" />
    </div>
</template>

<script>
    import { Chrome } from 'vue-color'
    export default {
        components: {
            'chrome-picker': Chrome,
            'chrome-picker2': Chrome
        },
        data () {
            return {
                sideBarcolors : this.$store.getters.getSideBarColor,
                sideBarHovercolors : this.$store.getters.getSideBarHoverColor
            }
        },
        methods : {
            updatesideBarColor : function(value){
                this.$store.commit('updateSideBarColor',value.hex);
            },
            updatesideBarHoverColor : function(value){
                this.$store.commit('updateSideBarHoverColor',value.hex);
            }
        }
    }
</script>

<style>
    div.color {
        position : absolute;
        right : 0;
        top : 0;
    }
</style>
