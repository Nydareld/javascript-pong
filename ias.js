function getInputs(ball, paddle){

    return [
        ball.x || 0 ,
        ball.y || 0 ,
        ball.dx || 0 ,
        ball.dy || 0 ,
        paddle.y || 0
    ];

}

function move(output,paddle){

    if(output[0] > 0.5){
        paddle.moveDown();
    }else {
        paddle.stopMovingDown();
    }

    if(output[1] > 0.5){
        paddle.moveUp();
    }else {
        paddle.stopMovingUp();
    }

}

/**
* V1 ne fais que suivre la balle
*/
function v1(pong,side="right"){

    var myNetwork = new synaptic.Architect.Perceptron(5, 20, 2);
    // var trainer = new synaptic.Trainer(myNetwork)
    var cpt = 0;
    var ball = pong.ball;
    var paddle = pong[side+"Paddle"];

    var i = setInterval(function(){

        var output = myNetwork.activate( getInputs( ball,paddle ) );

        var position = paddle.y + paddle.height/2;
        var target = [
            ball.y > position ? 1 : 0,
            ball.y < position ? 1 : 0,
        ];
        myNetwork.propagate(1, target);

        move(output,paddle)


    },10);


}


/**
* V2 intercept la ball en utilisant l'helper
*/
function v2(pong,side="right"){

    var myNetwork = new synaptic.Architect.Perceptron(5, 20, 2);
    // var trainer = new synaptic.Trainer(myNetwork)
    var cpt = 0;
    var ball = pong.ball;
    var paddle = pong[side+"Paddle"];

    var target,output,position,pt;

    var i = setInterval(function(){

        output = myNetwork.activate( getInputs( ball,paddle ) );

        position = paddle.y + paddle.height/2;

        pt = Pong.Helper.ballIntercept(ball, {left: paddle.left, right: paddle.right, top: -10000, bottom: 10000}, ball.dx * 10, ball.dy * 10);

        if (pt) {
            target = [
                pt.y > position ? 1 : 0,
                pt.y < position ? 1 : 0
            ];
        }else {
            target = [
                0,
                0
            ];
        }
        myNetwork.propagate(1, target);

        move(output,paddle)


    },10);


}

/**
* V3 intercept la ball en utilisant l'helper ou se replace au milieu
*/
function v3(pong,side="right"){

    var myNetwork = new synaptic.Architect.Perceptron(5, 20, 2);
    // var trainer = new synaptic.Trainer(myNetwork)
    var cpt = 0;
    var ball = pong.ball;
    var paddle = pong[side+"Paddle"];

    var target,output,position,pt;

    var middle = pong.cfg.height/2;

    var i = setInterval(function(){

        output = myNetwork.activate( getInputs( ball,paddle ) );

        position = paddle.y + paddle.height/2;

        pt = Pong.Helper.ballIntercept(ball, {left: paddle.left, right: paddle.right, top: -10000, bottom: 10000}, ball.dx * 10, ball.dy * 10);

        if (!pt) {
            pt = {
                y : middle
            }
        }

        target = [
            pt.y > position ? 1 : 0,
            pt.y < position ? 1 : 0
        ];
        myNetwork.propagate(1, target);

        move(output,paddle)


    },10);


}
