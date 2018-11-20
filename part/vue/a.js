/*
<div id="example">
<p>Original message: "{{ message }}"</p>
<p>Computed reversed message: "{{ reversedMessage }}"</p>
</div>
*/
//计算属性
var vm = new Vue({
    el: '#example',
    data: {
        message: 'hello',
        firstName: '',
        lastName: '',
    },
    computed: {//计算属性
        reversedMessage: function() {
            return this.message.split('').reverse().join('')
        },
        fullName: {
            //get为计算属性默认值，获取变量
            get: function(){
                return this.firstName +　' ' + this.lastName
            },
            //达成双向绑定，fullname更新时，两个name也会更新
            set: function(newValue){
                var names = newValue.split(' ')
                this.firstName = names[0]
                this.lastName = names[namrs.length - 1]
            }
        }
    }
})

//侦听器

//虽然计算属性在大多数情况下更合适，但有时也需要一个自定义的侦听器。这就是为什么 Vue 通过 watch 选项提供了一个更通用的方法，来响应数据的变化。当需要在数据变化时执行异步或开销较大的操作时，这个方式是最有用的。
/*
<div id="watch-example">
  <p>
    Ask a yes/no question:
    <input v-model="question">  
  </p>
  <p>{{ answer }}</p>
</div>
*/
//v-model watch用？
var watchExampleVM = new Vue({
  el: '#watch-example',
  data: {
    question: '',
    answer: 'I cannot give you an answer until you ask a question!'
  },
  //当输入框内值改变时，watch就会启动，运行其下程序
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created: function () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer: function () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios.get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
})


//例如，如果你声明了这个组件：

Vue.component('my-component', {
  template: '<p class="foo bar">Hi</p>'
})
//然后在使用它的时候添加一些 class：

//<my-component class="baz boo"></my-component>
//HTML 将被渲染为:

//<p class="foo bar baz boo">Hi</p>
//对于带数据绑定 class 也同样适用：

//<my-component v-bind:class="{ active: isActive }"></my-component>
//当 isActive 为 truthy[1] 时，HTML 将被渲染成为：

//<p class="foo bar active">Hi</p>