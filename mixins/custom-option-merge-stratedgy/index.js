 // Define a custom option merge strategy for arrays
 Vue.config.optionMergeStrategies.mergeArrays = function (toVal, fromVal) {
    if (!toVal) return fromVal;
    if (!fromVal) return toVal;
    return toVal.concat(fromVal);
  }

  // Define a child component
  Vue.component('child-component', {
    props: {
      options: {
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    template: `
      <div>
        <p>Items: {{ options.items }}</p>
      </div>
    `,
    // Define options with custom merge strategy for arrays
    mergeArrays: {
      options: {
        items: ['C', 'D']
      }
    }
  });

  // Create a Vue instance
  new Vue({
    el: '#app'
  });