import Vue from 'vue';
import dummyMessages from './data/messages.js';

var app = new Vue({
  el: "#app",
  
  data: {
    loading: true,
    menu: false,
    chat: {
      name: '@andreuscafe',
      messages: [],
      messageInput: ''
    }
  },

  created: function () {
    console.log(this.chat.messages);

    let localStorageMessages = localStorage.getItem('messages');

    if (localStorageMessages && JSON.parse(localStorageMessages).length) {
      this.chat.messages = JSON.parse(localStorageMessages);
    } else {
      console.log("Acá caemo");
      localStorage.setItem("messages", dummyMessages);
      this.chat.messages =  JSON.parse(dummyMessages);
    }
  },
  
  methods: {
    sendMessage (event) {
      if (this.chat.messageInput) {
        const hour = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });
        
        const isFromUser = event.shiftKey ? false : true;

        let newMessage = {
          text: this.chat.messageInput,
          fromUser: isFromUser,
          hour: hour
        }

        this.chat.messages.push(newMessage);
        this.chat.messageInput = "";
        
        this.$nextTick(function() {
          var element = document.getElementById("messagesWrapper");
          element.scrollTop = element.scrollHeight;
          
          var input = document.getElementById("messageInput");
          input.focus();
        });
      }
    },

    clearChat () {
      this.chat.messages = [];
    },

    darkMode () {
      alert('Ya me gustaría que esto funcione, ¿eh? Aún no está hecho.')
    },
    
    focusInput () {
      var input = document.getElementById("messageInput");
      input.focus();
    },

    fullScreen () {
      this.toggleFullScreen();
      this.toggleMenu();
    },

    toggleMenu (state) {
      if (state) {
        if (state == 'close') this.menu = false;
        if (state == 'open') this.menu = true;
      } else {
        this.menu = !this.menu;
      }
    },

    toggleFullScreen () {
      if (screenfull.enabled) {
        screenfull.toggle();
      } else {
        document.body.requestFullscreen();
      }
    }
  },

  computed: {
    menuOpen: function () {
      return this.menu.toString()
    }
  },

  watch: {
    "chat.messages": function () {
      localStorage.setItem("messages", JSON.stringify(this.chat.messages));
      // localStorage.setItem("messages", JSON.stringify(this.chat.messages).replace(/\\"/g, '\"'));
    }
  }
});


document.addEventListener("DOMContentLoaded", function () {
  // if (typeof window.orientation === 'undefined') {
  //   // Minibar plugin for a nice looking scrollbar, non-mobile only
  //   new MiniBar('#messagesWrapper', {
  //     minBarSize: 10
  //   });
  // }

  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  window.addEventListener('resize', () => {
    // We execute the same script as before
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  });
})
