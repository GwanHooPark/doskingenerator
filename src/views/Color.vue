<template>
    <div data-type="titleBarTextColor" class="color">
        <div class="close-picker">
            <input v-on:focus="closePicker" type="text" maxlength="7"  :value="getTestColor('titleBarTextColor')" @keyup="keyPressTestColor($event,'titleBarTextColor')"/>
            <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTestColor('titleBarTextColor') }"></button>
            <winodw-chrome-picker :value="getTestColor('titleBarTextColor')" @input="updateType" />
        </div>
        <br>
       <div class="close-picker">
           <input v-on:focus="closePicker" type="text" maxlength="7"  :value="getTitleBarTextColor" @keyup="keyPressTitleBarTextColor"/>
           <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTitleBarTextColor }"></button>
           <window-titlebartext-picker :value="getTitleBarTextColor" @input="updateTitleBarTextColor" />
        </div>
        <br>
        <div class="close-picker">
            <input type="text" maxlength="7"  v-model="getTitleBarColor"/>
            <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getTitleBarColor }"></button>
            <window-titlebar-picker :value="titleBarColor" @input="updateTitleBarColor" />
        </div>
        <br>
        <div class="close-picker">
            <input type="text" maxlength="7"  v-model="getSideBarColor"/>
            <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getSideBarColor }"></button>
            <sidebar-picker :value="sideBarColor" @input="updatesideBarColor" />
        </div>
        <br>
        <div class="close-picker">
            <input type="text" maxlength="7"  v-model="getSideBarHoverColor"/>
            <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getSideBarHoverColor }"></button>
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
            updateType : function(value){
                console.log("updateType");
                console.log(value);
                this.$store.commit('updateTitleBarTextColor',value.hex);
            },
            keyPressTestColor : function(event,type) {
                console.log(type);
                var value = {
                    hex : ''
                };
                value.hex = event.currentTarget.value;
                this.updateTestColor(value);
            },
            updateTestColor : function(value) {
                this.$store.commit('updateTestColor',value.hex);
            },
            keyPressTitleBarTextColor : function(event) {
                var value = {
                    hex : ''
                };
                value.hex = event.currentTarget.value;
                this.updateTitleBarTextColor(value);
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

    /*div.vc-chrome-fields-wrap {
        display:none;
    }
    div.vc-chrome-color-wrap {
        display:none
    }
    div.vc-chrome-alpha-wrap {
        display:none;
    }*/
    .fg-color-sample {
        display: inline-block;
        width: 23px;
        height:23px;
        border: 1px solid #a9a9a9;
        border-left: none;
    }
    .close-picker div.vc-chrome{
        display : none
    }
    button {
        border :
    }
</style>