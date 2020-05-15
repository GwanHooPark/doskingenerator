<template>
        <div class="close-picker">
            {{title}} <button class="fg-color-sample" v-on:click="toggle" v-bind:style="{ background: getColor }"></button>
            <color-picker :value="getColor" @input="updateColor" />
        </div>
</template>

<script>
    import { Chrome } from 'vue-color'
    export default {
        components: {
            'color-picker' : Chrome,
        },
        props: {
            title: String,
            getFunc : String,
            setFunc : String
        },
        computed: {
            getColor : function(){
                console.log(this.type);
                return this.$store.getters[this.getFunc];
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
            updateColor : function(value){
                this.$store.commit(this.setFunc,value.hex);
            },
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
            },
            toggle: function(event) {
                event.target.parentElement.classList.toggle('close-picker');
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