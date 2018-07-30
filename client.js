import io from 'socket.io-client'

(() => {
    let socket = io();
    let form = document.getElementById("form");
    let nickname = document.getElementById("nickname");
    let message = document.getElementById("message");
    let messages = document.getElementById("messages");
    form.onsubmit = () => {
        socket.emit('chat message', nickname.value, message.value);
        message.value = "";
        return false;
    };
    socket.on('chat message', (nickname, message) => {
        let li = document.createElement("li");
        li.textContent = `${nickname}: ${message}`;
        messages.appendChild(li);
    });
})();