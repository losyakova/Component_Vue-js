Vue.createApp({})
.component('notify', {
    template: '#notification-template',
    props:{
        type: {
            type: String, 
            default: 'primary'
        },
        title:{
            type: String,
            default: 'Уведомление!'
        },
        icon:{
            type: String,
            default: null
        }
    },
    methods:{
        close(e){
            e.target.parentElement.remove();
        }
    }
})
.mount('#app')