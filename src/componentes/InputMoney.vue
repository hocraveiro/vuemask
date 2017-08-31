<script>
  // import mask from './mask.js'
  // import { inputHandler } from './event-listener.js'
  import VMasker from 'vanilla-masker'
  import InputPattern from './InputPattern.vue'
  export default {
    extends: InputPattern,
    methods: {
      applyMask: function (value) {
        return VMasker.toMoney(value, {precision: 2, separator: ',', delimiter: '.', zeroCents: false})
      },
      onBlur: function () {
        this.$emit('blur', {valueMask: this.valor, value: this.removeMask(this.valor)})
      },
      update: function () {
        this.$emit('change', {valueMask: this.valor, value: this.removeMask(this.valor)})
      },
      removeMask: function (value) {
        return parseFloat(value.replace(/[^0-9-,]/g, '').replace(',', '.'))
      }
    }
  }
</script>