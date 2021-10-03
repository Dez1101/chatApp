

document.querySelector('#room-name-input').focus();
document.querySelector('#room-name-input').onkeyup = function (e) {
    if (e.keyCode === 13) {  // enter, return
        document.querySelector('#room-name-submit').click();
    }
};

document.querySelector('#room-name-submit').onclick = function (e) {
    var roomName = document.querySelector('#room-name-input').value;
    window.location.pathname = '/chat/' + roomName + '/';
};


const myRoomListener = (item) => {
    item.onclick = (e) => {
        const roomName = e.target.id
        window.location.pathname = '/chat/' + roomName + '/'
    }
}

document.querySelectorAll('.myRoom').forEach(myRoomListener)
