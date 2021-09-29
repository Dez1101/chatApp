document.addEventListener("DOMContentLoaded", () => {
    const chatRoomName = document.querySelector('#room-name-input')
    document.querySelector('#room-name-input').focus();
    document.querySelector('#room-name-input').onkeyup = function (e) {
        if (e.keyCode === 13) {  // enter, return
            document.querySelector('#room-name-submit').click();
            document.querySelector('#room-name-input').value('')
            chatRoomName = ''
        }
    };

    document.querySelector('#room-name-submit').onclick = function (e) {
        let roomName = document.querySelector('#room-name-input').value
        renderButton(roomName)
    };
});
 
const renderButton = (roomName) => {
    const newButton = document.createElement("button")
    newButton.textContent = roomName
    newButton.type = "button"
    newButton.classList = "btn  btn-warning mb-4 w-60"

    newButton.onclick = () => {
        window.location.pathname = '/chat/' + roomName + '/'
    }

    document.getElementById("pnlRenderedButton").appendChild(newButton)
}