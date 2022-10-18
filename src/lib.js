/* eslint-disable */
export default { 
  renderVue(){ 
    new Vue({
      render: h => h(system.default)
    }).$mount(document.getElementById('test'))
  }
}