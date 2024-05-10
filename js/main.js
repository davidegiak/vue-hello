const { createApp } = Vue

createApp({
    data() {
        return {
            message:"Hello",
            user:"ciao",
            img: "spider-man-across-3840x2160-11476.png"
        }
    }
}).mount('#app')