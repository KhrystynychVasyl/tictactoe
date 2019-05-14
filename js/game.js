const startButton = document.querySelector('.startButton');
startButton.addEventListener('click', startButtonPressed);

function startButtonPressed(e) {
    e.preventDefault();
    allClear();
}

const endButton = document.querySelector('.endButton');
endButton.addEventListener('click', endButtonPressed);

function endButtonPressed(e) {
    e.preventDefault();
    document.querySelector('.game-container').hidden = true;
    allClear();

}

const zeroButton = document.querySelector('.zeroButton');
zeroButton.addEventListener('click', zeroButtonPressed);

function zeroButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(0)) ticTacToe(0);
}

const firstButton = document.querySelector('.firstButton');
firstButton.addEventListener('click', firstButtonPressed);

function firstButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(1)) ticTacToe(1);
}

const secondButton = document.querySelector('.secondButton');
secondButton.addEventListener('click', secondButtonPressed);

function secondButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(2)) ticTacToe(2);
}

const thirdButton = document.querySelector('.thirdButton');
thirdButton.addEventListener('click', thirdButtonPressed);

function thirdButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(3)) ticTacToe(3);
}

const fourthButton = document.querySelector('.fourthButton');
fourthButton.addEventListener('click', fourthButtonPressed);

function fourthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(4)) ticTacToe(4);
}

const fifthButton = document.querySelector('.fifthButton');
fifthButton.addEventListener('click', fifthButtonPressed);

function fifthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(5)) ticTacToe(5);
}

const sixthButton = document.querySelector('.sixthButton');
sixthButton.addEventListener('click', sixthButtonPressed);

function sixthButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(6)) ticTacToe(6);
}

const seventhButton = document.querySelector('.seventhButton');
seventhButton.addEventListener('click', seventhButtonPressed);

function seventhButtonPressed(e) {
    e.preventDefault();
    if (countButtonClick == 0 && !pushButtonArr.includes(7)) ticTacToe(7);
}

const eighthButton = document.querySelector('.eighthButton');
eighthButton.addEventListener('click', eighthButtonPressed);

function eighthButtonPressed(e) {
    e.preventDefault();

    if (countButtonClick == 0 && !pushButtonArr.includes(8)) ticTacToe(8);
}

let pushButtonArr = [8];
let countButtonClick = 0;
let countGame = 0;
let firstMove;
let buttonArr;
let gameOver = false;
let gameDraw = false;
let gameMode = 0;
let gameVinCheck = [];
let numberMove;
let firstMovePlayer = 0;
let vinPosZero = [
    [0, 1, 2],
    [0, 7, 6],
    [2, 3, 4],
    [4, 5, 6],
    [1, 8, 5],
    [2, 8, 6],
    [3, 8, 7],
    [0, 8, 4]
];

function getGameMode() {
    Math.random() * 2 > 1 ? gameMode = 1 : gameMode = 0;
}

function getCompMove(stepArray) {
    let move;
    let moveArrFirst = [2, 6];
    let moveArrSecond = [0, 4];
    let moveArr3 = { 0: 4, 1: 5, 2: 6, 3: 7, 4: 0, 5: 1, 6: 2, 7: 3 };

    switch (stepArray.length) {
        case (1):
            let check = 0;
            while (check == 0) {
                move = Math.floor(Math.random() * 4) * 2;
                move == 4 * 2 || move == 0 ? check = 0 : check = 1;
            }
            return move;
        case (3):
            if (stepArray[1] == 0 && stepArray[2] == 4) {
                let check = 0;
                while (check == 0) {
                    move = Math.floor(Math.random() * 2);
                    console.log(move);
                    move == 2 ? check = 0 : move == 0 ? check = 1 : check = 1
                }
                move = moveArrFirst[move];
                return move;
            }
            else if (stepArray[1] == 4 && stepArray[2] == 0) {
                let check = 0;
                while (check == 0) {
                    move = Math.floor(Math.random() * 2);
                    console.log(move);
                    move == 2 ? check = 0 : move == 0 ? check = 1 : check = 1
                }
                move = moveArrFirst[move];
                return move;
            }
            else if (stepArray[1] == 2 && stepArray[2] == 6) {
                let check = 0;
                while (check == 0) {
                    move = Math.floor(Math.random() * 2);
                    console.log(move);
                    move == 2 ? check = 0 : move == 0 ? check = 1 : check = 1
                }
                move = moveArrSecond[move];
                return move;
            }
            else if (stepArray[1] == 6 && stepArray[2] == 2) {
                let check = 0;
                while (check == 0) {
                    move = Math.floor(Math.random() * 2);
                    console.log(move);
                    move == 2 ? check = 0 : move == 0 ? check = 1 : check = 1
                }
                move = moveArrSecond[move];
                return move;
            }
            else return move = moveArr3[stepArray[2]];
        case (5):
            move = moveArr3[stepArray[4]];
            if (stepArray.includes(move)) {
                let arr = [...stepArray];
                let allMove = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                allMove = allMove.filter(el => !stepArray.includes(el));
                console.log(allMove);
                Math.random() > 0.5 ? move = allMove[0] : Math.random() > 0.5 ? move = allMove[1] : Math.random() > 0.5 ? move = allMove[2] : move = allMove[3];
            }
            return move;
        case (7):
            move = moveArr3[stepArray[6]];
            if (stepArray.includes(move)) {
                let arr = [...stepArray];
                let allMove = [0, 1, 2, 3, 4, 5, 6, 7, 8];
                allMove = allMove.filter(el => !stepArray.includes(el))
                Math.random() > 0.5 ? move = allMove[0] : move = allMove[1];
            }
            return move;

    }

}

function vinCheck(stepArray) {
    let stepArraytemp = [...stepArray];
    stepArraytemp.shift();
    stepArraytemp.pop();
    const vinPosComp = [
        [0, 1, 2],
        [2, 3, 4],
        [4, 5, 6],
        [6, 7, 0]
    ];
    let vinPosCompTemp = vinPosComp;
    let arr = [];
    for (let i = 0; i < vinPosCompTemp.length; i++) {
        let testArrayTemp = stepArraytemp;
        if (!vinPosCompTemp[i].includes(stepArraytemp[1])) {
            testArrayTemp.forEach(val => vinPosCompTemp[i] = vinPosCompTemp[i].filter(el => el !== val));
            vinPosCompTemp[i].length !== 1 ? '' : arr.push(true, vinPosCompTemp[i]);
        }
    }
    if (!arr[0]) {
        arr.push(false, [])
    }
    else if (arr[1][0] == stepArray[4]) {
        arr = [];
        arr.push(false, [])
    };
    return arr;
}

/*

function vinCheckSecond(stepArray) {
    let stepArraytemp = [...stepArray];
    stepArraytemp.shift();
    stepArraytemp.pop();
    stepArraytemp.splice(3, 1);
    stepArraytemp.splice(1, 1);
    console.log(stepArraytemp);
    const vinPosComp = [
        [0, 1, 2],
        [2, 3, 4],
        [4, 5, 6],
        [6, 7, 0]
    ];
    let vinPosCompTemp = vinPosComp;
    let arr = [];
    for (let i = 0; i < vinPosCompTemp.length; i++) {
        let testArrayTemp = stepArraytemp;
        if (!vinPosCompTemp[i].includes(stepArraytemp[1])) {
            testArrayTemp.forEach(val => vinPosCompTemp[i] = vinPosCompTemp[i].filter(el => el !== val));
            vinPosCompTemp[i].length !== 1 ? '' : arr.push(true, vinPosCompTemp[i]);
        }
    }
    if (!arr[0]) {
        arr.push(false, [])
    }
    else if (arr[1][0] == stepArray[2]) {
        arr = [];
        arr.push(false, [])
    }
    else if (arr[1][0] == stepArray[4]) {
        arr = [];
        arr.push(false, [])
    }
    else if (arr[1][0] == stepArray[6]) {
        arr = [];
        arr.push(false, [])
    };
    return arr;
}

*/

function vinCheckSecond(stepArray) {
  let stepArraytemp = [...stepArray];
  stepArraytemp.shift();
  stepArraytemp.pop();

  stepArraytemp.splice(3, 1);
  stepArraytemp.splice(1, 1);
  console.log(stepArraytemp);
  const vinPosComp = [[0, 1, 2], [2, 3, 4], [4, 5, 6], [6, 7, 0]];
  let vinPosCompTemp = vinPosComp;
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < vinPosCompTemp.length; i++) {
    let testArrayTemp = stepArraytemp;

    testArrayTemp.forEach(val => vinPosCompTemp[i] = vinPosCompTemp[i].filter(el => el !== val));

    vinPosCompTemp[i].length !== 1 ? '' : arr.push([true, vinPosCompTemp[i]]);

  }

  if (!arr[0]) {
    arr.push(false, [])
  } else {
    arr.forEach( val => arr2.push(val[1][0]))
    let arrcheck = [...stepArray];
    arrcheck.splice(5,1);
    arrcheck.splice(3,1);
    arrcheck.splice(1,1);
    arrcheck.splice(0,1);
    arrcheck.forEach(val => arr2 = arr2.filter(el => el!==val ));
    arr2 = [true,[arr2.shift()]];
    return arr2;
  }
  return arr;
}

function allClear() {
    gameOver = false;
    gameDraw = false;
    countGame = 0;
    countButtonClick = 0;
    gameVinCheck = [];
    firstMovePlayer = 0;
    const setButtonArr = [
        zeroButton,
        firstButton,
        secondButton,
        thirdButton,
        fourthButton,
        fifthButton,
        sixthButton,
        seventhButton,
        eighthButton
    ];
    setButtonArr.forEach(val => {
        val.innerHTML = '`';
        val.classList.remove('btn-warning');
        val.classList.remove('btn-info');
        val.classList.remove('btn-light');
        val.classList.add('btn-light')
    });

    getGameMode();

    if (gameMode == 0) {
        pushButtonArr = [8];
    }
    else {
        pushButtonArr = [];

    }

    if (gameMode == 0) {
        eighthButton.innerHTML = 'X';
        eighthButton.classList.remove('btn-light');
        eighthButton.classList.add('btn-info');
    }
    else {
        eighthButton.innerHTML = '`';
    }
}

function ticTacToe(num) {

    const setButton = {
        0: zeroButton,
        1: firstButton,
        2: secondButton,
        3: thirdButton,
        4: fourthButton,
        5: fifthButton,
        6: sixthButton,
        7: seventhButton,
        8: eighthButton
    };

    function buttonChangeClassPlayer(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-warning');
    }

    function buttonChangeClassComp(number) {
        setButton[buttonArr[buttonArrPosition(number)]].classList.remove('btn-light');
        setButton[buttonArr[buttonArrPosition(number)]].classList.add('btn-info');
    }

    function buttonArrPosition(val) {
        for (let i = 0; i < buttonArr.length; i++) {
            if (buttonArr[i] == val) return i;
        }
    }

    if (gameMode == 0) {

        pushButtonArr.push(num);
        countButtonClick = 1;

        if (countGame == 0) { firstMove = num }

        if (countGame == 0) {
            buttonArr = [0, 1, 2, 3, 4, 5, 6, 7];
        }

        if (firstMove % 2 == 0) {

            if (countGame == 0) {
                let shiftButton = num;
                while (shiftButton > 0) {
                    buttonArr.push(buttonArr.shift());
                    shiftButton--;
                }
            };

            if (!gameOver) {
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                buttonChangeClassPlayer(num);
                setTimeout(() => countButtonClick = 0, 100) //1500ms-------------------------------------------
            };

            setTimeout(() => {

                if (!gameOver) switch (countGame) {
                    case (0):
                        countGame++;
                        setButton[buttonArr[7]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[7]);
                        pushButtonArr.push(buttonArr[7]);
                        break;
                    case (1):
                        countGame++;
                        if (setButton[buttonArr[3]].innerHTML !== 'O') {
                            setButton[buttonArr[3]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[3]);
                            pushButtonArr.push(buttonArr[3]);
                            gameOver = true;
                        }
                        else {
                            setButton[buttonArr[1]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[1]);
                            pushButtonArr.push(buttonArr[1]);
                        }
                        break;
                    case (2):
                        countGame++;
                        if (setButton[buttonArr[5]].innerHTML !== 'O') {
                            setButton[buttonArr[5]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[5]);
                            pushButtonArr.push(buttonArr[5]);
                            gameOver = true;
                        }
                        else {
                            setButton[buttonArr[6]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[6]);
                            pushButtonArr.push(buttonArr[6]);
                        }
                        break;
                    case (3):
                        countGame++;
                        if (setButton[buttonArr[2]].innerHTML !== 'O') {
                            setButton[buttonArr[2]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[2]);
                            pushButtonArr.push(buttonArr[2]);
                            gameOver = true;
                        }
                        else {
                            setButton[buttonArr[4]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[4]);
                            pushButtonArr.push(buttonArr[4]);
                            gameDraw = true;
                        }
                        break;
                }
                if (gameOver) eighthButton.innerHTML = 'Lost';
                if (gameDraw) {
                    gameOver = true;
                    eighthButton.innerHTML = 'Draw'
                };
            }, 80); //1000ms-------------------------------------------------------------------------------------

        }
        else {

            if (countGame == 0) {
                let shiftButton = num;
                while (shiftButton > 1) {
                    buttonArr.push(buttonArr.shift());
                    shiftButton--;
                }
            };

            if (!gameOver) {
                setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                buttonChangeClassPlayer(num);
                setTimeout(() => countButtonClick = 0, 100) //1500ms-----------------------------------------------
            };
            setTimeout(() => {

                if (!gameOver) switch (countGame) {
                    case (0):
                        countGame++;
                        setButton[buttonArr[7]].innerHTML = 'X';
                        buttonChangeClassComp(buttonArr[7]);
                        pushButtonArr.push(buttonArr[7]);
                        break;
                    case (1):
                        countGame++;
                        if (setButton[buttonArr[3]].innerHTML !== 'O') {
                            setButton[buttonArr[3]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[3]);
                            pushButtonArr.push(buttonArr[3]);
                            gameOver = true;
                        }
                        else {
                            setButton[buttonArr[6]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[6]);
                            pushButtonArr.push(buttonArr[6]);
                        }

                        break;
                    case (2):
                        countGame++;
                        if (setButton[buttonArr[2]].innerHTML !== 'O') {
                            setButton[buttonArr[2]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[2]);
                            pushButtonArr.push(buttonArr[2]);
                            gameOver = true;
                        }
                        else {
                            setButton[buttonArr[0]].innerHTML = 'X';
                            buttonChangeClassComp(buttonArr[0]);
                            pushButtonArr.push(buttonArr[0]);
                            gameOver = true;
                        }
                        break;
                }
                if (gameOver) eighthButton.innerHTML = 'Lost';
            }, 80); //1000ms----------------------------------------------------------------------------------------------
        }
    }
    else {

        if (gameMode == 1) {
            if (num == 8 || firstMovePlayer == 8) {

                pushButtonArr.push(num);
                countButtonClick = 1;


                if (countGame == 0) { firstMove = num; firstMovePlayer = num; }

                if (countGame == 0) {
                    buttonArr = [0, 1, 2, 3, 4, 5, 6, 7];
                }

                if (firstMove == 8) {

                    if (countGame == 0) { buttonArr.push(num) }

                    if (!gameOver) {
                        setButton[buttonArr[buttonArrPosition(num)]].innerHTML = 'O';
                        buttonChangeClassPlayer(num);
                        setTimeout(() => countButtonClick = 0, 100) //1500ms-------------------------------------------
                    };

                    setTimeout(() => {

                        if (!gameOver) switch (countGame) {
                            case (0):
                                countGame++;
                                numberMove = getCompMove(pushButtonArr);
                                setButton[numberMove].innerHTML = 'X';
                                buttonChangeClassComp(numberMove);
                                pushButtonArr.push(numberMove);
                                break;
                            case (1):
                                countGame++;
                                numberMove = getCompMove(pushButtonArr);
                                setButton[numberMove].innerHTML = 'X';
                                buttonChangeClassComp(numberMove);
                                pushButtonArr.push(numberMove);
                                break;
                            case (2):
                                countGame++;
                                gameVinCheck = vinCheck(pushButtonArr);
                                if (gameVinCheck[0]) {
                                    setButton[gameVinCheck[1]].innerHTML = 'X';
                                    buttonChangeClassComp(gameVinCheck[1]);
                                    pushButtonArr.push(gameVinCheck[1]);
                                    gameOver = true;
                                }
                                else {
                                    numberMove = getCompMove(pushButtonArr);
                                    setButton[numberMove].innerHTML = 'X';
                                    buttonChangeClassComp(numberMove);
                                    pushButtonArr.push(numberMove);
                                }

                                break;
                            case (3):
                                countGame++;
                                gameVinCheck = vinCheckSecond(pushButtonArr);
                                if (gameVinCheck[0] && gameVinCheck[1][0] !== undefined) {
                                    setButton[gameVinCheck[1]].innerHTML = 'X';
                                    buttonChangeClassComp(gameVinCheck[1]);
                                    pushButtonArr.push(gameVinCheck[1]);
                                    gameOver = true;
                                }
                                else {
                                    numberMove = getCompMove(pushButtonArr);
                                    setButton[numberMove].innerHTML = 'X';
                                    buttonChangeClassComp(numberMove);
                                    pushButtonArr.push(numberMove);
                                    gameDraw = true;
                                }
                                break;
                        }
                        if (gameOver) eighthButton.innerHTML = 'Lost';
                        if (gameDraw) {
                            gameOver = true;
                            eighthButton.innerHTML = 'Draw'
                        };
                    }, 80)

                }
            }

        }

    }

}
