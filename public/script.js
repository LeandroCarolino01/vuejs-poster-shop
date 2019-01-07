
new Vue({
    el: '#app',
    data: {
        total: 1
    },
    methods: {
        addItem: function(){
            this.total += 9.99;
        }
    }
});