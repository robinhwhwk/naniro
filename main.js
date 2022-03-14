document.addEventListener("DOMContentLoaded", () => {
    createHashtags();
    createSquares();
    getNewCode();

    let guessedCodes = [[]];
    let availableSpace = 1;

    let code = getNewCode();
    let guessedCodeCount = 0;

    const keys = document.querySelectorAll('.keyboard-row button');

    fillLeftPallete();

    function getNewCode() {
        let randomColor = Math.floor(Math.random()*16777215).toString(16);
        if (randomColor.length < 6) {
            randomColor += "0" * (6 - randomColor.length)
        }
        return randomColor.toUpperCase();
    }

    // Getter for current code array.
    function getCurrentCodeArr() {
        const numberOfGuessedCodes = guessedCodes.length;
        return guessedCodes[numberOfGuessedCodes - 1];
    }

    function updateGuessedCodes(letter) {
        const currentCodeArr = getCurrentCodeArr();

        if (currentCodeArr && currentCodeArr.length < 6) {
            currentCodeArr.push(letter);
            // Get the square with id of 1
            const availableSpaceEl = document.getElementById(String(availableSpace));
            availableSpace = availableSpace + 1;

            availableSpaceEl.textContent = letter;
        }
    }

    
    function getTileColor(letter, index) {
        const isCorrectLetter = code.includes(letter);

        if (!isCorrectLetter) {
            return "rgb(58, 58, 60)";
        }

        const letterInThatPosition = code.charAt(index);
        const isCorrectPosition = letter === letterInThatPosition;
        if (isCorrectPosition) {
            return "rgb(83, 141, 78)";
        }

        return "rgb(181, 159, 59)";
    }

    function isHexColor (hex) {
        return typeof hex === 'string'
            && hex.length === 6
            && !isNaN(Number('0x' + hex))
      }

    function handleSubmitCode() {
        const currentCodeArr = getCurrentCodeArr();
        if (currentCodeArr.length !== 6) {
            window.alert("Code must be 6 letters");
            return;
        }

        const currentCode = currentCodeArr.join('');

        if (!isHexColor(currentCode)) {
            window.alert("Not a hexcode");
            return;
        }

        const firstLetterId = guessedCodeCount * 6 + 1;
        const interval = 200;
        currentCodeArr.forEach((letter, index) => {
            setTimeout(() => {
                const tileColor = getTileColor(letter, index);

                const letterId = firstLetterId + index; 
                const letterEl = document.getElementById(letterId);
                letterEl.classList.add("animate__animated", "animate__flipInX");
                letterEl.style = `background-color:${tileColor};border-color:${tileColor}`;

            }, interval * index);
        });

        fillRightPallete(currentCode);

        guessedCodeCount += 1;

        if (currentCode === code) {
            window.alert("Congratulations!");
        }

        if (guessedCodes.length === 6) {
            window.alert(`Sorry, you have no more guesses! The code is ${code}.`)
        }

        guessedCodes.push([]);
    }

    function createSquares() {
        console.log("createsquares is running");
        const gameBoard = document.getElementById("board");

        for (let index = 0; index < 36; index++) {
            let square = document.createElement("div");
            square.classList.add("square");
            square.classList.add("animate_animated");
            square.setAttribute("id", index + 1);
            gameBoard.appendChild(square);
        }
    }

    function createHashtags() {
        const hashBoard = document.getElementById("hashboard");
        let hash = document.createElement("div");
        hash.classList.add("hashtag");
        hashBoard.append(hash);
    }

    function handleDeleteLetter() {
        const currentCodeArr = getCurrentCodeArr();
        const removedLetter = currentCodeArr.pop();

        guessedCodes[guessedCodes.length - 1] = currentCodeArr; 

        const lastLetterEl = document.getElementById(String(availableSpace - 1));

        lastLetterEl.textContent = '';
        availableSpace = availableSpace - 1;
    }

    function fillLeftPallete() {
        const leftPallete = document.getElementById("left-pallete");
        const palleteColorCode = "#" + code;
        leftPallete.style = `background-color:${palleteColorCode}`;
        console.log(code);
    }

    function fillRightPallete(currentCode) {
        const rightPallete = document.getElementById("right-pallete");
        const palleteColorCode = "#" + currentCode;
        rightPallete.style = `background-color:${palleteColorCode}`;
        console.log(currentCode);
    }

    for (let i = 0; i < keys.length; ++i) {
        keys[i].onclick = ({ target }) => {
            const letter = target.getAttribute("data-key");

            if (letter === "enter") {
                handleSubmitCode();
                return;
            }

            if (letter === "del") {
                handleDeleteLetter();
                return;
            }

            updateGuessedCodes(letter);
        };
    }
})
