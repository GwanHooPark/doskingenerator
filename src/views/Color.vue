<template>
    <div class="color">
        <div>
            <window-titlebartext-picker :value="titleBarTextColor" @input="updateTitleBarTextColor" />
        </div>
        <div>
            <window-titlebar-picker :value="titleBarColor" @input="updateTitleBarColor" />
        </div>
        <div>
            <sidebar-picker :value="sideBarColor" @input="updatesideBarColor" />
        </div>
        <div>
            <sidebar-hover-picker :value="sideBarHoverColor" @input="updatesideBarHoverColor" />
        </div>
    </div>
</template>

<script>
    import { Chrome } from 'vue-color'
    export default {
        components: {
            'window-titlebartext-picker' : Chrome,
            'window-titlebar-picker' : Chrome,
            'sidebar-picker': Chrome,
            'sidebar-hover-picker': Chrome
        },
        data () {
            return {
                titleBarTextColor : this.$store.getters.getTitleBarTextColor,
                titleBarColor : this.$store.getters.getTitleBarColor,
                sideBarColor : this.$store.getters.getSideBarColor,
                sideBarHoverColor : this.$store.getters.getSideBarHoverColor
            }
        },
        methods : {
            updateTitleBarTextColor : function(value){
                this.$store.commit('updateTitleBarTextColor',value.hex);
            },
            updateTitleBarColor : function(value){
                this.$store.commit('updateTitleBarColor',value.hex);
            },
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
        height : 700px;
        overflow-y : auto;
    }
</style>