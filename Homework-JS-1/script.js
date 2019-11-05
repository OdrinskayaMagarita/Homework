var numbers = [];
var x = 0,
    y = 0;
    for(var numMas = 1;numMas <= 36;numMas++){
        numbers.push(numMas)
    }

var direction = 'right';
var numberPosition = 0;
var innerDimension;
var dimension = 6;
var oldPosition;


var matrix = createMatrix(6, 6);

fillMatrix();

// Результат
console.log(matrix);

function fillMatrix(){

    if (!numbers.length) return;

    var num = numbers.shift();

    matrix[x][y] = num;

    ++numberPosition;

    // Матрица заполнена
    if (innerDimension === 0) return;

    // Последнее значение поля матрицы
    if (innerDimension === 1) {

        getNextDirection();
        setNextPosition();
        innerDimension = 0;
        fillMatrix();
        return;

    }

    // Первый поворот
    if (numberPosition === innerDimension || numberPosition === dimension) {

        getNextDirection();
        setNextPosition();
        oldPosition = numberPosition;
        innerDimension = dimension - 1;
        fillMatrix();

        return;

    }

    // Поворот направления
    if (numberPosition === oldPosition + innerDimension || numberPosition === oldPosition + (innerDimension * 2)) {

        if (numberPosition === oldPosition + (innerDimension * 2)) {
            innerDimension = innerDimension - 1;
            oldPosition = numberPosition;
        }

        getNextDirection();
        setNextPosition();

        fillMatrix();

        return;

    }


    setNextPosition();

    fillMatrix();

}

function setNextPosition() {

    if (direction == 'right') {
        y = y + 1;
    }

    if (direction == 'down') {
        x = x + 1;
    }

    if (direction == 'left') {
        y = y - 1;
    }

    if (direction == 'top') {
        x = x - 1;
    }

}

function getNextDirection() {

    if (direction === 'right') {
        direction = 'down';
        return;
    }

    if (direction === 'down'){
        direction = 'left';
        return;
    }

    if (direction === 'left') {
        direction =  'top';
        return;
    }

    if (direction === 'top') {
        direction = 'right';
    }

}

function createMatrix(x, y) {
    var matrix = [];
    for (var i = 0; i < x; i++) {
        matrix[i] = Array(y);
    }
    return matrix;
}





              