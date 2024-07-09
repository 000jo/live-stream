const passwordField = document.getElementById('password');
const submitButton = document.getElementById('submit-password');
const passwordContainer = document.getElementById('password-container');
const cameraContainer = document.getElementById('camera-container');
const camera = document.getElementById('camera');

const correctPassword = 'jokuc';

submitButton.addEventListener('click', () => {
    const enteredPassword = passwordField.value;
    if (enteredPassword === correctPassword) {
        startCamera();
    } else {
        alert('Falsches Passwort!');
    }
});

function startCamera() {
    passwordContainer.classList.add('hidden');
    cameraContainer.classList.remove('hidden');
    
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            camera.srcObject = stream;
        })
        .catch(err => {
            console.error('Error accessing camera: ', err);
        });
}
