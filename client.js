import io from 'socket.io-client'

(() => {
    let socket = io();
    let form = document.getElementsByClassName("main__form")[0];
    let message = document.getElementsByClassName("main__message")[0];
    let messages = document.getElementsByClassName("main__messages")[0];
    let nick;
    let nicknameButton = document.getElementsByClassName("main__nicknameButton")[0];

    nicknameButton.onclick=()=>{
        let nicknameDialog=document.getElementsByClassName("main__blackout")[0];
        let nicknameInput=document.getElementsByClassName("main__nicknameInput")[0];
        nick=nicknameInput.value;
        nicknameDialog.style.display="none";
    };

    form.onsubmit = () => {
        socket.emit('chat message', nick, message.value);
        message.value = "";
        return false;
    };

    socket.on('chat message', (nickname, message) => {
        let div = document.createElement("div");
        let divWrapper= document.createElement("div");
        divWrapper.classList.add("message");
        div.classList.add("messageContent");
        if (nickname === nick){
            div.classList.add("myMessage");
        }
        div.textContent = `${nickname}: ${message}`;
        divWrapper.appendChild(div);
        messages.appendChild(divWrapper);
    });
})();