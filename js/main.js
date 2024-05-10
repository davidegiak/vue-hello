const { createApp, ref } = Vue

createApp({
    data() {
        return {
            message:"Hello",
            user:"ciao"
        }
    }
}).mount('#app')