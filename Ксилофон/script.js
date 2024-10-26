document.addEventListener("DOMContentLoaded", function() {
    const keys = document.querySelectorAll(".key");

   
    const keyMap = {
        "a": "A",
        "s": "B",
        "d": "C",
        "f": "D",
        "g": "E",
        "h": "F",
        "j": "G"
    };

    
    keys.forEach(key => {
        key.addEventListener("click", () => playNoteAndAnimate(key));
    });

    
    document.addEventListener("keydown", function(event) {
        const note = keyMap[event.key.toLowerCase()];
        if (note) {
            const keyElement = document.querySelector(`.key[data-note="${note}"]`);
            if (keyElement) {
                playNoteAndAnimate(keyElement);
            }
        }
    });

    function playNoteAndAnimate(key) {
        const note = key.dataset.note;
        const audio = new Audio(`audiokey/key${note}.wav`); 
        audio.play();

       
        key.classList.add("active");
        setTimeout(() => {
            key.classList.remove("active");
        }, 100);
    }
});




