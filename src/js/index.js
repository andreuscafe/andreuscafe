import Vue from "vue";
import dummyMessages from "./data/messages.js";
import message from "./components/message";

var app = new Vue({
    el: "#app",
    components: {
        message: message,
    },
    data: {
        loading: true,
        menu: false,
        chat: {
            name: "@andreuscafe",
            messages: [],
            messageInput: "",
        },
    },

    created: async function () {
        // let localStorageMessages = localStorage.getItem("messages");

        // if (localStorageMessages && JSON.parse(localStorageMessages).length) {
        //     this.chat.messages = JSON.parse(localStorageMessages);
        // } else {
        //     console.log("No messages. Trying to fill it with dummy messages.");
        //     localStorage.setItem("messages", dummyMessages);
        //     this.chat.messages = JSON.parse(dummyMessages);
        // }

        const key = window.location.hash.substring(1) || "second";
        this.getChatData(key);

        window.onhashchange = () => {
            this.getChatData(window.location.hash.substring(1));
        };
    },

    methods: {
        sendMessage(event) {
            if (this.chat.messageInput) {
                const hour = new Date().toLocaleString("en-US", {
                    hour: "numeric",
                    minute: "numeric",
                    hour12: true,
                });

                const isFromUser = event.shiftKey ? false : true;

                let newMessage = {
                    text: this.chat.messageInput,
                    fromUser: isFromUser,
                    hour: hour,
                };

                this.chat.messages.push(newMessage);
                this.chat.messageInput = "";

                this.$nextTick(function () {
                    var element = document.getElementById("messagesWrapper");
                    element.scrollTop = element.scrollHeight;

                    var input = document.getElementById("messageInput");
                    input.focus();
                });
            }
        },

        clearChat() {
            this.chat.messages = [];
        },

        darkMode() {
            alert("Ya me gustaría que esto funcione, ¿eh? Aún no está hecho.");
        },

        focusInput() {
            var input = document.getElementById("messageInput");
            input.focus();
        },

        fullScreen() {
            this.toggleFullScreen();
            this.toggleMenu();
        },

        toggleMenu(state) {
            if (state) {
                if (state == "close") this.menu = false;
                if (state == "open") this.menu = true;
            } else {
                this.menu = !this.menu;
            }
        },

        toggleFullScreen() {
            if (screenfull.enabled) {
                screenfull.toggle();
            } else {
                document.body.requestFullscreen();
            }
        },

        async getChatData(key) {
            try {
                const chatRequest = await fetch(
                    `https://andreuscafe-lambda.vercel.app/api/get-content?key=${key}`
                );
                if (chatRequest) {
                    const reqJson = await chatRequest.json();

                    if (!reqJson.body) {
                        throw "¿Estas seguro de que este es el chat que estás buscando?";
                    }
                    this.chat.messages = JSON.parse(reqJson.body);
                    this.loading = false;
                } else {
                    throw "No se pudo traer los mensajes. Probablemente el lambda de vercel se murió. Si tenes ganas, avisame por twitter (@andreuscafe)";
                }
            } catch (error) {
                this.chat.messages = [
                    {
                        fromUser: false,
                        hour: new Date().toLocaleString("en-US", {
                            hour: "numeric",
                            minute: "numeric",
                            hour12: true,
                        }),
                        text: error,
                    },
                ];

                this.loading = false;
            }
        },
    },

    computed: {
        menuOpen: function () {
            return this.menu.toString();
        },
    },

    // watch: {
    //     "chat.messages": function () {
    //         localStorage.setItem(
    //             "messages",
    //             JSON.stringify(this.chat.messages)
    //         );
    //         // localStorage.setItem("messages", JSON.stringify(this.chat.messages).replace(/\\"/g, '\"'));
    //     },
    // },
});

document.addEventListener("DOMContentLoaded", function () {
    // if (typeof window.orientation === 'undefined') {
    //   // Minibar plugin for a nice looking scrollbar, non-mobile only
    //   new MiniBar('#messagesWrapper', {
    //     minBarSize: 10
    //   });
    // }

    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
});
