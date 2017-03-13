import {play} from 'vue-play'
// import InputMoney from './componentes/InputMoney.vue'
// import InputCpf from './componentes/InputCpf.vue'
// import InputCnpj from './componentes/InputCnpj.vue'
// import InputPattern from './componentes/InputPattern.vue'
// import Vue from 'vue'

// Vue.component('input-money', InputMoney)
// Vue.component('input-cpf', InputCpf)
// Vue.component('input-cnpj', InputCnpj)
// Vue.component('input-pattern', InputPattern)


// play('InputMask')
//   .add('Real', {
//     template: `<div>
//                 <input-money placeholder="Valor do produto" v-model="valor" v-on:change="(v) => {valor = v.valueMask; valorSemMask = v.value }"></input-money>
//                 <p>Valor: {{valor}} Number: {{valorSemMask}}</p>
//               </div>`,
//     data () {
//       return {
//         valor: '199,99',
//         valorSemMask: '199.90'
//       }
//     }
//   })
//   .add('CPF', {
//     template: `<div>
//                 <input-cpf placeholder="CPF ex: 085.900.129-64" v-model="valor" v-on:change="(v) => {valor = v.value; isValid = v.isValid}"></input-cpf>
//                 <p>CPF: {{valor}} - Valido: {{isValid}}</p>
//               </div>`,
//     data () {
//       return {
//         valor: '085.900.129-64',
//         isValid: false
//       }
//     }
//   })
//   .add('CNPJ', {
//     template: `<div>
//                 <input-cnpj placeholder="CNPJ ex: 12.934.302/0001-16" v-model="valor" v-on:change="(v) => {valor = v.value; isValid = v.isValid}"></input-cnpj>
//                 <p>CNPJ: {{valor}} - Valido: {{isValid}}</p>
//               </div>`,
//     data () {
//       return {
//         valor: '12.934.302/0001-16',
//         isValid: false
//       }
//     }
//   })
//   .add('Data', {
//     template: `<div>
//                 <input-pattern placeholder="Data ex: 04/08/1993" v-model="valor" mask="99/99/9999" v-on:change="(v) => valor = v "></input-pattern>
//                 <p>DATA: {{valor}}</p>
//               </div>`,
//     data () {
//       return {
//         valor: '04/08/1993'
//       }
//     }
//   })
