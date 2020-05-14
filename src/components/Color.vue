<template>
    <div data-type="titleBarTextColor" class="color">
       <div class="close-picker">
           타이틀 <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTitleBarTextColor }"></button>
           <window-titlebartext-picker :value="getTitleBarTextColor" @input="updateTitleBarTextColor" />
        </div>
        <br>
        <div class="close-picker">
            타이틀 헤더 <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTitleBarColor }"></button>
            <window-titlebar-picker :value="titleBarColor" @input="updateTitleBarColor" />
        </div>
        <br>
        <div class="close-picker">
            사이드 바 <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getSideBarColor }"></button>
            <sidebar-picker :value="sideBarColor" @input="updatesideBarColor" />
        </div>
        <br>
        <div class="close-picker">
            사이드바 호버 <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getSideBarHoverColor }"></button>
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
                testColor : this.$store.getters.getTestColor,
                titleBarTextColor : this.$store.getters.getTitleBarTextColor,
                titleBarColor : this.$store.getters.getTitleBarColor,
                sideBarColor : this.$store.getters.getSideBarColor,
                sideBarHoverColor : this.$store.getters.getSideBarHoverColor,
                isOpen : false
            }
        },
        computed: {
            getTestColor() {
                return (type) => {
                    console.log(type);
                    return this.$store.getters.getType(type);
                };
            },
            getTitleBarTextColor : function() {
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
        },
        methods : {
            updateTestColor : function(value) {
                this.$store.commit('updateTestColor',value.hex);
            },
            updateTitleBarTextColor : function(value){
                console.log("updateTitleBarTextColor")
                console.log(value);
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
            },
            toggle: function(event) {
                event.target.parentElement.classList.toggle('close-picker');
            },
            closePicker : function(event) {
                event.target.parentElement.classList.add('close-picker');
            }
        }
    }
</script>
<style>
    div.color {
        position : absolute;
        right : 0;
        top : 0;
        height : 1700px;
        overflow-y : auto;
    }
    div.vc-chrome {
        border : 1px solid #8C8989;
    }
    div.vc-chrome-color-wrap {
        display:none
    }
    div.vc-chrome-alpha-wrap {
        display:none;
    }
    span.vc-input__label {
        display:none !important;
    }
    div.vc-chrome-toggle-btn {
        display: none;
    }
    div.vc-chrome-fields-wrap {
        padding:0;
    }
    div.vc-chrome-body {
        padding:5px 15px 5px;
    }
    .fg-color-sample {
        display: inline-block;
        width: 45px;
        height:45px;
        border: 1px solid #a9a9a9;
    }
    .close-picker div.vc-chrome{
        display : none;
    }
</style>