import io from 'socket.io-client'
(function() {
    let socket = io();
    let form = document.getElementById("form");
    let nickname = document.getElementById("nickname");
    let message = document.getElementById("message");
    let messages = document.getElementById("messages");
    form.onsubmit = function () {
        socket.emit('chat message', nickname.value, message.value);
        message.value="";
        return false;
    };
    socket.on('chat message',function (nickname,message) {
        console.log(nickname);
        let li=document.createElement("li");
        li.textContent=`${nickname}: ${message}`;
        messages.appendChild(li);
    });
})();

