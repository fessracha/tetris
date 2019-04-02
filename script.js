//Создаем див с классом .tetris
 let tetris = document.createElement('div');
 tetris.classList.add('tetris');

//Заполняем его ячейками .exceel
 for(let i=1; i<181; i++) {
     let excel = document.createElement('div');
     excel.classList.add('excel');
     tetris.appendChild(excel);
 }

//Добавляем в блок main блок тетрис
 let main = document.getElementsByClassName('main')[0];
 main.appendChild(tetris);

 let excel = document.getElementsByClassName('excel');
 let i = 0;

//Задаем аттрибуты с координатами ячейкам excel
 for (let y=18; y>0; y--) {
     for (let x=1; x<11; x++) {
         excel[i].setAttribute('posX', x);
         excel[i].setAttribute('posY', y);
         i++;
     }
 }
 
 let x = 5, y = 15;
 
 let currentFigure = 0,
     figureBody    = 0;

     
let figure = [
    //палка
    [
        //0 градусов
        [
           [0, 1],
           [0, 2],
           [0, 3],
        ],
        //90 градусов
        [
            [1, 0],
            [2, 0],
            [3, 0]
        ],
        //180 градусов
        [
           [0, 1],
           [0, 2],
           [0, 3],
       ],
       //270 градусов
       [
           [1, 0],
           [2, 0],
           [3, 0]
       ]
    ],
    //квадрат
    [
        //0 градусов
        [
           [1,0],
           [0,1],
           [1,1]
        ],
        //90 градусов
        [
           [1,0],
           [0,1],
           [1,1]
        ],
        //180 градусов
        [
           [1,0],
           [0,1],
           [1,1]
       ],
       //270 градусов
       [
           [1,0],
           [0,1],
           [1,1]
       ]
        
    ],
    // //L
    // [
    //     //0 градусов
    //     [
    //        [1,0],
    //        [0,1],
    //        [0,2]
    //     ],
    //     //90 градусов
    //     [
    //        [0,1],
    //        [1,1],
    //        [2,1]
    //     ],
    //     //180 градусов
    //     [
    //        [1,0],
    //        [1,-1],
    //        [1,-2]
    //    ],
    //    //270 градусов
    //    [
    //        [0,-1],
    //        [-1,-1],
    //        [-2,-1]
    //    ]
    // ],
    // //L реверс
    // [
    //     //0 градусов
    //    [
    //       [1,0],
    //       [1,1],
    //       [1,2]
    //    ],
    //    //90 градусов
    //    [
    //        [0,-1],
    //        [1,-1],
    //        [2,-1]
    //    ],
    //    //180 градусов
    //    [
    //        [-1,0],
    //        [-1,1],
    //        [-1,2]
    //    ],
    //    //270 градусов
    //    [
    //        [0,1],
    //        [-1,1],
    //        [-2,1]
    //    ]
    // ],
    // //молния
    // [
    //     //0 градусов
    //     [
    //         [1,0],
    //         [1,1],
    //         [2,1]   
    //     ],
    //     //90 градусов
    //     [
    //         [0,1],
    //         [-1,1],
    //         [-1,2]
    //     ],
    //     //180 градусов
    //     [
    //         [-1,0],
    //         [-1,-1],
    //         [-2,-1]
    //     ],
    //     //270 градусов
    //     [
    //         [0,-1],
    //         [1,-1],
    //         [1,-2]
    //     ],
    // ],
    // //молния реверс
    // [
    //     //0 градусов
    //     [
    //         [1,0],
    //         [1,-1],
    //         [2,-1]   
    //     ],
    //     //90 градусов
    //     [
    //         [0,-1],
    //         [-1,-1],
    //         [-1,-2]
    //     ],
    //     //180 градусов
    //     [
    //         [-1,0],
    //         [-1,1],
    //         [-2,1]
    //     ],
    //     //270 градусов
    //     [
    //         [0,1],
    //         [1,1],
    //         [1,2]
    //     ],
    // ],
    // //деталь лего
    // [
    //     //0 градусов
    //     [
    //         [1,0],
    //         [2,0],
    //         [1,1]
    //     ],
    //     //90 градусов
    //     [
    //         [0,-1],
    //         [0,-2],
    //         [1,-1]
    //     ],
    //     //180 градусов
    //     [
    //         [-1,0],
    //         [-2,0],
    //         [-1,-1]
    //     ],
    //     //270 градусов
    //     [
    //         [0,1],
    //         [0,2],
    //         [-1,1]
    //     ],
    // ]
 ]

 function create() {
     function getRandom() {
         //округляем_до_целого(рандом_в_дроби_от_0_до_1 * размер_figure)
         return Math.round(Math.random()*(figure.length-1));
     }

    currentFigure = getRandom();

    figureBody = [
        document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
        document.querySelector(`[posX = "${x + figure[currentFigure][0][0][0]}"][posY = "${y + figure[currentFigure][0][0][1]}"]`),
        document.querySelector(`[posX = "${x + figure[currentFigure][0][1][0]}"][posY = "${y + figure[currentFigure][0][1][1]}"]`),
        document.querySelector(`[posX = "${x + figure[currentFigure][0][2][0]}"][posY = "${y + figure[currentFigure][0][2][1]}"]`),
    ]

    for(let i=0; i<figureBody.length; i++) {
        figureBody[i].classList.add('figure');
    }
}

create();

function move() {
    let moveFlag = true,
    coordinates  = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
    ];

    for(let i=0; i<coordinates.length; i++) {
        if(coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1] - 1}"]`).classList.contains('set')) {
            moveFlag = false;
            break;
        }
    }

    if(moveFlag) {
        for(let i=0; i<figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
        }
        figureBody = [
            document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1] - 1}"]`),
            document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1] - 1}"]`),
        ]
        for(let i=0; i<figureBody.length; i++) {
            figureBody[i].classList.add('figure');
        }
    } else {
        for(let i=0; i<figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
            figureBody[i].classList.add('set');
        }
        checkFields();
        create();
    }
}

function checkFields() {

    let check_line = false;

    for (let y=18; y>0; y--) {

        //Проверяем собрана ли линия
        if(document.querySelectorAll(`.set[posY="${y}"]`).length == 10) {
            document.querySelectorAll(`.set[posY="${y}"]`).forEach((item) => {
                item.classList.remove('set');
                check_line = true;
            });
        }
        //Проверяем достижение верха поля
        document.querySelectorAll(`.set[posY="${y}"]`).forEach((item) => {
            if(+item.getAttribute('posY') >= 14) {
                gameOver();
            }
        })
    }

    if(check_line == true) {
        deleteLine();
    }
    
}

function deleteLine() {

    let figureBody = [];

    document.querySelectorAll('.set').forEach(function(item){
        figureBody.push([item.getAttribute('posX'), item.getAttribute('posY')]);
        item.classList.remove('set');
    });
    
    figureBody.forEach(function(item){
        document.querySelector(`[posX="${item[0]}"][posY="${item[1]-1}"]`).classList.add('set');
    });
    
}

function gameOver() {

    document.querySelectorAll(`.set`).forEach((item) => {
        item.classList.remove('set');
    })

    alert('Конец игры');
}

let interval = setInterval(() => {
    move();
}, 300);

let flag = true;

var turn_state = 0;

window.addEventListener('keydown', function(e) {

    let coordinates1 = [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        coordinates2 = [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        coordinates3 = [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        coordinates4 = [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')];

    function getNewState(a) {

        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`)
        ];

        printNewState(figureNew);

    }

    function printNewState(figureNew) {
        for(let i = 0; i < figureNew.length; i++) {
            if(!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            }
        }

        if(flag) {
            for(let i=0; i<figureBody.length; i++) {
                figureBody[i].classList.remove('figure');
            }

            figureBody = figureNew;

            for(let i=0; i<figureBody.length; i++) {
                figureBody[i].classList.add('figure');
            }
        }
    }

    function turn() {

        if(turn_state < 3) {
            turn_state++;
        } else if(turn_state == 3) {
            turn_state = 0;
        }

        coordinates1 = [+figureBody[0].getAttribute('posX'), +figureBody[0].getAttribute('posY')];
        coordinates2 = [+coordinates1[0] + figure[currentFigure][turn_state][0][0], +coordinates1[1] + figure[currentFigure][turn_state][0][1]];
        coordinates3 = [+coordinates1[0] + figure[currentFigure][turn_state][1][0], +coordinates1[1] + figure[currentFigure][turn_state][1][1]];
        coordinates4 = [+coordinates1[0] + figure[currentFigure][turn_state][2][0], +coordinates1[1] + figure[currentFigure][turn_state][2][1]];

        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0]}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0]}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0]}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0]}"][posY = "${coordinates4[1]}"]`)
        ];

        printNewState(figureNew);
    }

    if(e.keyCode == 37) {
        getNewState(-1);
    } else if(e.keyCode == 39) {
        getNewState(1);
    } else if(e.keyCode == 40) {
        move();
    } else if(e.keyCode == 38) {
        turn();
    }
})