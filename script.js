const kbdElements = document.querySelectorAll('kbd');

kbdElements.forEach(kbd => {
    kbd.addEventListener('mousedown', (event) => {
        event.preventDefault();
        kbd.classList.add('active');
    });

    kbd.addEventListener('mouseup', (event) => {
        event.preventDefault();
        kbd.classList.remove('active');
        kbd.classList.add('clicked');
    });

    kbd.addEventListener('mouseleave', (event) => {
        event.preventDefault();
        kbd.classList.remove('active');
    });
});

document.addEventListener('keydown', (event) => {
    event.preventDefault();
    const keyElement = document.querySelector(`kbd[data-key="${event.code}"]`);
    if (keyElement) {
        keyElement.classList.add('active');
        keyElement.classList.remove('clicked');
    }
});

document.addEventListener('keyup', (event) => {
    event.preventDefault();
    const keyElement = document.querySelector(`kbd[data-key="${event.code}"]`);
    if (keyElement) {
        keyElement.classList.remove('active');
        keyElement.classList.add('clicked');
    }
});

document.addEventListener('keydown', function (event) {
    console.log('Key:', event.key);
    console.log('Code:', event.code);
    console.log('KeyCode:', event.keyCode);
    console.log('Location:', event.location);
    console.log('Shift Key:', event.shiftKey);
    console.log('Ctrl Key:', event.ctrlKey);
    console.log('Alt Key:', event.altKey);
    console.log('Meta Key:', event.metaKey);
    console.log('---');
});

let isKeyboardEnabled = true;

function handleKeydown(event) {
    if (isKeyboardEnabled) {
        console.log('Key:', event.key, 'Code:', event.code);
    } else {
        event.preventDefault();
        event.stopPropagation();
    }
}

function attachKeyboardEvents() {
    document.addEventListener('keydown', handleKeydown);
}

function detachKeyboardEvents() {
    document.removeEventListener('keydown', handleKeydown);
}

attachKeyboardEvents();

document.getElementById('toggleKeyboard').addEventListener('click', function () {
    isKeyboardEnabled = !isKeyboardEnabled;

    if (isKeyboardEnabled) {
        attachKeyboardEvents();
        document.querySelectorAll('kbd').forEach(kbd => {
            kbd.classList.remove('disabled');
        });
        document.getElementById('toggleKeyboard').classList.remove('clickedpower');
    } else {
        detachKeyboardEvents();
        document.querySelectorAll('kbd').forEach(kbd => {
            kbd.classList.add('disabled');
        });
        document.getElementById('toggleKeyboard').classList.add('clickedpower');
    }
});