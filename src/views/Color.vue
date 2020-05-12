<template>
    <div class="color">
        <div>
            <input id="fg-color" v-on:focus="isOpen = false" type="text" maxlength="7"  v-model="getTestColor"/>
            <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTestColor }"></button>
            <winodw-chrome-picker v-show="isOpen" :value="testColor" @input="updateTestColor" />
        </div>
        <br>
       <div>
            <window-titlebartext-picker :value="titleBarTextColor" @input="updateTitleBarTextColor" />
        </div>
        <br>
        <div>
            <window-titlebar-picker :value="titleBarColor" @input="updateTitleBarColor" />
        </div>
        <br>
        <div>
            <sidebar-picker :value="sideBarColor" @input="updatesideBarColor" />
        </div>
        <br>
        <div>
            <sidebar-hover-picker :value="sideBarHoverColor" @input="updatesideBarHoverColor" />
        </div>
    </div>
</template>

<script>
    import { Chrome } from 'vue-color'
    export default {
        components: {
            'winodw-chrome-picker' : Chrome,
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
            getTestColor : function(){
                return this.$store.getters.getTestColor;
            }
        },
        methods : {
            updateTestColor : function(value) {
                console.log(value.hex);
                this.$store.commit('updateTestColor',value.hex);
            },
            updateTitleBarTextColor : function(value){
                console.log(value.hex);
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
            toggle: function() {
                console.log("toggle");
                this.isOpen = !this.isOpen
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
    input.color-input {
        font-size: 11px;
        color: #333;
        width: 100%;
        border-radius: 2px;
        border: none;
        box-shadow: inset 0 0 0 1px #dadada;
        height: 21px;
        text-align: center;
    }

    div.vc-chrome-fields-wrap {
        display:none;
    }
    div.vc-chrome-color-wrap {
        display:none
    }
    div.vc-chrome-alpha-wrap {
        display:none;
    }
    .fg-color-sample {
        display: inline-block;
        width: 23px;
        height:23px;
        border: none;
    }
</style>