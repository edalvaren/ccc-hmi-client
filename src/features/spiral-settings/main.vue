<template lang="pug">
    v-container(fluid grid-xlist-xs="")
        v-card(dark)
            v-layout.wrap.align-center
                numeric-input(:onEnterSetting="this._.debounce(stopDelayChanged, 1500)" :suffix="stopDelayIn.suffix" :numVal="stopDelay.value")
                numeric-input(:onEnterSetting="this._.debounce(changeSettingReal, 1500)" :suffix="speedSclIn.suffix" :numVal="speedScaling.value")



</template>

<script>
    import {mapState, mapGetters} from "vuex";
    import {numericInput} from "../../components/controls/user-input";

    export default {
        name: 'spiral-settings',
        props: {

        },
        components: {
            numericInput
        },
        sockets: {

        },
        computed: {
            ...mapGetters({
                stopDelay: 'StopDelay',
                speedScaling: 'SpeedScaling'

            })
        },
        data() {
            return {
                controlModes: ["Torque", "Speed", "Max"],
                items: ['Auto', 'Manual', 'Test'],
                stopDelayIn: {
                    suffix: "seconds"
                },
                speedSclIn: {
                    suffix: "RPM"
                }

            }
        },
        methods: {
            changeSettingReal(e){
                this.$socket.emit('CHANGE_SETTING_REAL', e, "HMI.Tension_Control.Speed_Reference_Scaling");
            },
            stopDelayChanged(e){
                this.$socket.emit('CHANGE_SETTING', e, "HMI_Takeup_Stop_Delay");
            }

        }
    }

</script>

<style scoped lang="stylus">

</style>