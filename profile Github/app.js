
Vue.createApp({
    data(){
        return {
        users:['mojombo','kevinclark','defunkt','jamesgolick', 'lukas', 'anotherjesse', 'brynary', 'takeo']
        }
    }
})
.component('github-profile', {
    template: '#github-profile-template',
    data(){
        return{
            userInfo:[]
        }
    },
    props:{
        username: {
            type: String,
            required: true
        }
    },
    created(){
        axios.get('https://api.github.com/users/'+this.username).then(res => (this.userInfo = res.data));
    }
})
.mount('#app')