import io from 'socket.io-client'

(() => {
    let socket = io();
    let form = document.getElementsByClassName("main__form")[0];
    let nickname = document.getElementsByClassName("main__nickname")[0];
    let message = document.getElementsByClassName("main__message")[0];
    let messages = document.getElementsByClassName("main__messages")[0];
    let nick;
    form.onsubmit = () => {
        socket.emit('chat message', nickname.value, message.value);
        message.value = "";
        nick=nickname.value;
        return false;
    };
    socket.on('chat message', (nickname, message) => {
        let div = document.createElement("div");
        let divWrapper= document.createElement("div");
        divWrapper.classList.add("message");
        div.classList.add("messageContent");
        debugger;
        if (nickname === nick){
            div.classList.add("myMessage");
        }
        div.textContent = `${nickname}: ${message}`;
        divWrapper.appendChild(div);
        messages.appendChild(divWrapper);
    });
})();