<template lang="pug">
    v-flex(xs12 sm6).d-inline-flex
        v-text-field(type="number" :suffix="suffix" label="Take-up Stop Delay"
        v-model="numValClone" placeholder="0-10s" outline
        @change="onEnterSetting(numValClone)")
    <!--v-flex(xs12 sm6).d-inline-flex-->
    <!--v-select(:items="items" label="Spiral Speed Setting" outline).theme&#45;&#45;dark-->
    <!--v-flex(xs12  sm6).d-inline-flex-->
    <!--v-select(:items="controlModes" dark label="Take-up Control Mode" outline)-->
    <!--v-flex(xs12 sm6).d-inline-flex-->
    <!--v-text-field(type="number" suffix="RPM" label="Speed Reference Scaling" placeholder="0-2600 rpm" outline)-->
    <!--v-flex(xs12 sm6).d-inline-flex-->
    <!--v-text-field(type="number" suffix="Hz" label="Drum Maximum Frequency" placeholder="0-100 Hz" outline)-->
    <!--v-flex(xs12 sm6).d-inline-flex-->
    <!--v-text-field(type="number" suffix="Hz" label="Take-Up Maximum Frequency" placeholder="0-100 Hz" outline)-->
    <!---->

</template>

<script>
    export default {
        name: "NumericInput",
        props: {
            numVal: {
                required: true
            },
            suffix: {
                type: String
            },
            onEnterSetting: {
                required: true,
                type: Function
            }
        },
        data(){
            return{
                numValClone: this.numVal
            }
        }
    }
</script>

<style scoped>

</style>