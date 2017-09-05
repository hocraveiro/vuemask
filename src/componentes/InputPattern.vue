<script>
  // import mask from './mask.js'
  // import { inputHandler } from './event-listener.js'
  import VMasker from 'vanilla-masker'

  export default {
    props: ['placeholder', 'value', 'mask', 'type'],
    data: function () {
      return {
        valor: 0
      }
    },
    mounted: function () {
      if (this.value) {
        this.valor = this.value
        this.applyMask(this.valor)
        this.update()
      }      
    },
    methods: {
      applyMask: function (value) {
        return VMasker.toPattern(value, this.mask)
      },
      update: function () {
        this.$emit('change', this.valor)
      },
      onBlur: function () {
        this.$emit('blur')
      }
    },
    render: function (createElement) {
      var self = this
      return createElement('input', {
        domProps: {
          value: self.value,
          placeholder: this.placeholder,
          type: this.type || 'text'
        },
        on: {
          keyup: function (ev) {
            if(ev.keyCode === 13){
              self.$emit('enter')
            }
            
            var isCharacter = isCharacterKeyPress(ev)
            var isAllowedKey = allowedKeys.indexOf(ev.keyCode) > -1
            if(isAllowedKey) return;
            
            if (isCharacter && ev.target.value.length) {
              ev.preventDefault();
            }
            ev.target.value = self.applyMask(ev.target.value)
            self.valor = ev.target.value
            self.update()
          },
          blur: function () {
            self.onBlur()
          }
        }
      })
    }
  }
  
  const allowedKeys = [
    9, // 'tab'
    37, // 'left'
    38, // 'up'
    39, // 'right'
    40, // 'down'
  ]
  const isCharacterKeyPress = function (ev) {
    if (typeof ev.which == 'undefined') {
      return true;
    } else if (typeof ev.which == 'number' && ev.which > 0) {
      return !ev.ctrlKey && !ev.metaKey && !ev.altKey && ev.which != 8;
    }
    return false;
  }

  
</script>