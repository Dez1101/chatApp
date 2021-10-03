const chatLog = document.querySelector('#chat-log')
// get room name
const roomName = JSON.parse(document.getElementById('room-name').textContent);


// create a websocket for the location of the room
const chatSocket = new WebSocket(
    'ws://'
    + window.location.host
    + '/ws/chat/'
    + roomName
    + '/'
);

// runs when we recieve a msg from the websocket. take data from website and display in chat log div
chatSocket.onmessage = function (e) {
    const data = JSON.parse(e.data);
    const messageElement = document.createElement('div')
    const userId = data['user_id']
    const loggedInUserId = JSON.parse(document.getElementById('user_id').textContent)
    // console.log(userId)
    messageElement.innerText = data.message

    if (userId === loggedInUserId) {
        messageElement.classList.add('message', 'sender')
    }
    else {
        messageElement.classList.add('message', 'receiver')
    }


    chatLog.appendChild(messageElement)

    if (document.querySelector('#emptyText')) {
        document.querySelector('#emptyText').remove()
    }
    document.querySelector('#chat-log').scrollTo(0, document.querySelector('#chat-log').scrollHeight)
};

chatSocket.onclose = function (e) {
    console.error('Chat socket closed unexpectedly');
};

document.querySelector('#chat-message-input').focus();
document.querySelector('#chat-message-input').onkeyup = function (e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#chat-message-submit').click();
    }
};

document.querySelector('#chat-message-submit').onclick = function (e) {
    const messageInputDom = document.querySelector('#chat-message-input');
    const message = messageInputDom.value;
    if (message) {
        chatSocket.send(JSON.stringify({
            'message': message
        }));

        document.querySelector('#chat-log').scrollTo(0, document.querySelector('#chat-log').scrollHeight)

    }

    messageInputDom.value = '';



};
