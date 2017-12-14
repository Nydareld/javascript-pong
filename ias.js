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


function predictTarget(ball, paddle) {

    var pt  = Pong.Helper.ballIntercept(ball, {left: paddle.left, right: paddle.right, top: -10000, bottom: 10000}, ball.dx * 10, ball.dy * 10);
    if (pt) {
        var t = paddle.minY + ball.radius;
        var b = paddle.maxY + paddle.height - ball.radius;

        while ((pt.y < t) || (pt.y > b)) {
            if (pt.y < t) {
                pt.y = t + (t - pt.y);
            }
            else if (pt.y > b) {
                pt.y = t + (b - t) - (pt.y - b);
            }
        }
    }
    return pt;
}



function vseb(pong, side){

    var width = pong.width,
        height = pong.height;
    var network = synaptic.Network.fromJSON(JSON.parse('{"neurons":[{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":635,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":127.5413535395367,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":-157.5,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":157.5,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":0,"old":0,"activation":408,"bias":0,"layer":"input","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-155387.4191434061,"old":-155387.4191434061,"activation":0,"bias":-0.7292013398385743,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":55921.863049490596,"old":55921.863049490596,"activation":1,"bias":0.15403665286264498,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-185.52643532806945,"old":-185.52643532806945,"activation":2.6723472456853075e-81,"bias":-0.0436703266682362,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":5896.432701616688,"old":5896.432701616688,"activation":1,"bias":0.0013631231550499529,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":12224.17962113793,"old":12224.17962113793,"activation":1,"bias":0.06762495503461453,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":245179.88244630344,"old":245179.88244630344,"activation":1,"bias":0.8984276475995147,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":93811.33904416129,"old":93811.33904416129,"activation":1,"bias":0.32117777014380167,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-9727.493011335253,"old":-9727.493011335253,"activation":0,"bias":-0.005408935231259517,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":54020.77943771158,"old":54020.77943771158,"activation":1,"bias":0.16557937157390104,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-157551.04243762093,"old":-157551.04243762093,"activation":0,"bias":-0.39472676439964605,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":660.3173450655613,"old":660.3173450655613,"activation":1,"bias":0.0010796976353478712,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-406.1289200216589,"old":-406.1289200216589,"activation":4.173026025737377e-177,"bias":-0.08804146990158533,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":37925.13684447575,"old":37925.13684447575,"activation":1,"bias":0.07915451545497547,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":15.999760781821664,"old":15.999729338978767,"activation":0.9999998874379143,"bias":0.05289139170197545,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-61524.261192101105,"old":-61524.261192101105,"activation":0,"bias":-0.11078967527403523,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-26704.209184980005,"old":-26704.209184980005,"activation":0,"bias":-0.1368289625530503,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":35670.911478400594,"old":35670.911478400594,"activation":1,"bias":0.19049592124540146,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-1469.4840874787262,"old":-1469.4840874787262,"activation":0,"bias":0.02327623411883064,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":683.7048367312718,"old":683.7048367312718,"activation":1,"bias":-0.04834389140293157,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":209714.99720525485,"old":209714.99720525485,"activation":1,"bias":0.4470012676532163,"layer":0,"squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":-6.011897284473298,"old":-6.005503662476877,"activation":0.002443451412143989,"bias":0.3183970717133495,"layer":"output","squash":"LOGISTIC"},{"trace":{"elegibility":{},"extended":{}},"state":6.010944489706841,"old":6.004544748935963,"activation":0.9975542250674228,"bias":-0.95282190898578,"layer":"output","squash":"LOGISTIC"}],"connections":[{"from":0,"to":5,"weight":-168.7453766945397,"gater":null},{"from":0,"to":6,"weight":-17.10451865395048,"gater":null},{"from":0,"to":7,"weight":0.020694140128144828,"gater":null},{"from":0,"to":8,"weight":-2.265420776509254,"gater":null},{"from":0,"to":9,"weight":6.5320066498437654,"gater":null},{"from":0,"to":10,"weight":250.06120617413762,"gater":null},{"from":0,"to":11,"weight":121.84562480450377,"gater":null},{"from":0,"to":12,"weight":-2.554475792039702,"gater":null},{"from":0,"to":13,"weight":67.07003728505975,"gater":null},{"from":0,"to":14,"weight":-148.0626245729825,"gater":null},{"from":0,"to":15,"weight":0.5502857525546754,"gater":null},{"from":0,"to":16,"weight":-0.27946318467159575,"gater":null},{"from":0,"to":17,"weight":34.46793676308372,"gater":null},{"from":0,"to":18,"weight":-2.1957078664589766,"gater":null},{"from":0,"to":19,"weight":-55.33789030481972,"gater":null},{"from":0,"to":20,"weight":-23.691456120944686,"gater":null},{"from":0,"to":21,"weight":41.047818124980125,"gater":null},{"from":0,"to":22,"weight":1.9234863667731705,"gater":null},{"from":0,"to":23,"weight":0.5204976680631286,"gater":null},{"from":0,"to":24,"weight":203.1358614547518,"gater":null},{"from":1,"to":5,"weight":-167.1605896952625,"gater":null},{"from":1,"to":6,"weight":4.112766142312914,"gater":null},{"from":1,"to":7,"weight":0.05059081565401852,"gater":null},{"from":1,"to":8,"weight":14.527766920040758,"gater":null},{"from":1,"to":9,"weight":35.03960040320413,"gater":null},{"from":1,"to":10,"weight":273.5819796613948,"gater":null},{"from":1,"to":11,"weight":81.76402944488619,"gater":null},{"from":1,"to":12,"weight":3.448927012703245,"gater":null},{"from":1,"to":13,"weight":45.18532288056715,"gater":null},{"from":1,"to":14,"weight":-146.3890585577863,"gater":null},{"from":1,"to":15,"weight":0.31698213069819586,"gater":null},{"from":1,"to":16,"weight":0.25588589734598755,"gater":null},{"from":1,"to":17,"weight":20.94002725085959,"gater":null},{"from":1,"to":18,"weight":0.16135179194936553,"gater":null},{"from":1,"to":19,"weight":-35.61705666516042,"gater":null},{"from":1,"to":20,"weight":-11.852204835957798,"gater":null},{"from":1,"to":21,"weight":57.95444159527108,"gater":null},{"from":1,"to":22,"weight":-1.041431738296716,"gater":null},{"from":1,"to":23,"weight":-1.0117958978104442,"gater":null},{"from":1,"to":24,"weight":131.93227225343279,"gater":null},{"from":2,"to":5,"weight":-109.03889644753086,"gater":null},{"from":2,"to":6,"weight":47.36604379755815,"gater":null},{"from":2,"to":7,"weight":-0.08988030889534618,"gater":null},{"from":2,"to":8,"weight":5.683710840028581,"gater":null},{"from":2,"to":9,"weight":78.87645530767833,"gater":null},{"from":2,"to":10,"weight":260.9736996190986,"gater":null},{"from":2,"to":11,"weight":51.53733051532597,"gater":null},{"from":2,"to":12,"weight":-12.504425269814387,"gater":null},{"from":2,"to":13,"weight":32.36600089887837,"gater":null},{"from":2,"to":14,"weight":-42.680441027308426,"gater":null},{"from":2,"to":15,"weight":-0.015528772415733008,"gater":null},{"from":2,"to":16,"weight":-3.09562677041686,"gater":null},{"from":2,"to":17,"weight":-9.70538240458459,"gater":null},{"from":2,"to":18,"weight":3.007196573415812,"gater":null},{"from":2,"to":19,"weight":24.42395481764292,"gater":null},{"from":2,"to":20,"weight":5.549825046282817,"gater":null},{"from":2,"to":21,"weight":27.30308229160492,"gater":null},{"from":2,"to":22,"weight":0.12384730800956323,"gater":null},{"from":2,"to":23,"weight":5.108179979089204,"gater":null},{"from":2,"to":24,"weight":96.10872780633511,"gater":null},{"from":3,"to":5,"weight":128.71292055425107,"gater":null},{"from":3,"to":6,"weight":362.93159704711456,"gater":null},{"from":3,"to":7,"weight":-1.1618457173868517,"gater":null},{"from":3,"to":8,"weight":49.54919720578827,"gater":null},{"from":3,"to":9,"weight":83.5069689854633,"gater":null},{"from":3,"to":10,"weight":-40.32661278244342,"gater":null},{"from":3,"to":11,"weight":-35.94528787134164,"gater":null},{"from":3,"to":12,"weight":-41.964932042107726,"gater":null},{"from":3,"to":13,"weight":-21.565283375005865,"gater":null},{"from":3,"to":14,"weight":-241.4234416108175,"gater":null},{"from":3,"to":15,"weight":-0.006716383181079467,"gater":null},{"from":3,"to":16,"weight":-5.760428982603883,"gater":null},{"from":3,"to":17,"weight":15.469252931115621,"gater":null},{"from":3,"to":18,"weight":12.908230143616434,"gater":null},{"from":3,"to":19,"weight":2.4117973144088047,"gater":null},{"from":3,"to":20,"weight":-0.34876365959502653,"gater":null},{"from":3,"to":21,"weight":-28.09299344139791,"gater":null},{"from":3,"to":22,"weight":-15.50759082621439,"gater":null},{"from":3,"to":23,"weight":17.217643185118956,"gater":null},{"from":3,"to":24,"weight":130.74246844785947,"gater":null},{"from":4,"to":5,"weight":-157.74362512405227,"gater":null},{"from":4,"to":6,"weight":40.58077441350244,"gater":null},{"from":4,"to":7,"weight":-0.0888269932611367,"gater":null},{"from":4,"to":8,"weight":-3.496891244899868,"gater":null},{"from":4,"to":9,"weight":7.053881878362301,"gater":null},{"from":4,"to":10,"weight":242.52916988059076,"gater":null},{"from":4,"to":11,"weight":48.50309687545116,"gater":null},{"from":4,"to":12,"weight":-9.57168254234768,"gater":null},{"from":4,"to":13,"weight":34.71156915479235,"gater":null},{"from":4,"to":14,"weight":-33.23088196880242,"gater":null},{"from":4,"to":15,"weight":0.659481694103321,"gater":null},{"from":4,"to":16,"weight":0.3884523491053329,"gater":null},{"from":4,"to":17,"weight":23.044591571813573,"gater":null},{"from":4,"to":18,"weight":-0.41610396416729856,"gater":null},{"from":4,"to":19,"weight":-45.036832441022064,"gater":null},{"from":4,"to":20,"weight":-22.596381742244887,"gater":null},{"from":4,"to":21,"weight":26.810417834254956,"gater":null},{"from":4,"to":22,"weight":-0.2356472719415197,"gater":null},{"from":4,"to":23,"weight":-3.49254283145736,"gater":null},{"from":4,"to":24,"weight":143.23932218242706,"gater":null},{"from":5,"to":25,"weight":1.6426336684026084,"gater":null},{"from":5,"to":26,"weight":-1.948667056610641,"gater":null},{"from":6,"to":25,"weight":-1.3046370390591582,"gater":null},{"from":6,"to":26,"weight":1.2477937096028087,"gater":null},{"from":7,"to":25,"weight":0.3513706352413457,"gater":null},{"from":7,"to":26,"weight":0.1899107764799319,"gater":null},{"from":8,"to":25,"weight":0.21186606541239839,"gater":null},{"from":8,"to":26,"weight":-0.3846778541595883,"gater":null},{"from":9,"to":25,"weight":-0.5297966105153996,"gater":null},{"from":9,"to":26,"weight":0.5044289107414224,"gater":null},{"from":10,"to":25,"weight":0.8514470360347212,"gater":null},{"from":10,"to":26,"weight":-0.9564709369721668,"gater":null},{"from":11,"to":25,"weight":-0.24460373269497224,"gater":null},{"from":11,"to":26,"weight":0.254514642098164,"gater":null},{"from":12,"to":25,"weight":2.91084735964158,"gater":null},{"from":12,"to":26,"weight":-2.57929523515989,"gater":null},{"from":13,"to":25,"weight":-0.5612975165427704,"gater":null},{"from":13,"to":26,"weight":0.32674487109656575,"gater":null},{"from":14,"to":25,"weight":1.0488356696643781,"gater":null},{"from":14,"to":26,"weight":-1.6717546305000286,"gater":null},{"from":15,"to":25,"weight":-0.4334364653046163,"gater":null},{"from":15,"to":26,"weight":-0.036817921473416115,"gater":null},{"from":16,"to":25,"weight":0.8186526087594932,"gater":null},{"from":16,"to":26,"weight":-1.1766538346803463,"gater":null},{"from":17,"to":25,"weight":-3.3611493878445002,"gater":null},{"from":17,"to":26,"weight":3.852392709156542,"gater":null},{"from":18,"to":25,"weight":-0.2430515225545768,"gater":null},{"from":18,"to":26,"weight":0.6509169950981116,"gater":null},{"from":19,"to":25,"weight":1.769091270477112,"gater":null},{"from":19,"to":26,"weight":-1.7701529630182713,"gater":null},{"from":20,"to":25,"weight":-0.15170318865689045,"gater":null},{"from":20,"to":26,"weight":0.14785525396888094,"gater":null},{"from":21,"to":25,"weight":0.06884060859590702,"gater":null},{"from":21,"to":26,"weight":-0.01787452716073852,"gater":null},{"from":22,"to":25,"weight":-1.4174666290707072,"gater":null},{"from":22,"to":26,"weight":1.8628327855047144,"gater":null},{"from":23,"to":25,"weight":0.11994761573879037,"gater":null},{"from":23,"to":26,"weight":0.2974549121502687,"gater":null},{"from":24,"to":25,"weight":-0.9107764083724149,"gater":null},{"from":24,"to":26,"weight":1.231719976497803,"gater":null}]}'));


    var ball = pong.ball,
        paddle = pong[side+"Paddle"],
        exOrientation = true;

    setInterval(function() {
        console.log(JSON.stringify(network.toJSON()));
    }, 60000);

    var i = setInterval(function() {

        var x, y, dx, dy,
            learningRate,
            orientation = (ball.dx > 0);

        // si la balle arrive
        if(orientation) {
            predict = predictResponsePosition(width - paddle.width, height, ball.x, ball.y, ball.dx, ball.dy);
            learningRate = 0.6;
        // si la balle va vers l'ennemie
        } else {
            learningRate = 0.2;
            predict = predictRequestPosition(width - paddle.width, height, ball.x, ball.y, ball.dx, ball.dy);
            predict = predictResponsePosition(width - paddle.width, height, predict.x, predict.y, predict.dx, predict.dy);
            predict.y = (predict.y + (height / 2)) / 2;
        }

        exOrientation = orientation;

        var output = network.activate(getInputs( ball,paddle ));

        var target = [
            predict.y > paddle.y + (paddle.height / 2) ? 1 : 0,
            predict.y < paddle.y + (paddle.height / 2) ? 1 : 0,
        ];
        network.propagate(learningRate, target);

        move(output,paddle);


    }, 10);
}


function predictResponsePosition(width, height, x, y, dx, dy) {

    // calcul de la fonction affine correspondant
    // à la trajectoire de la balle
    var a, b;

    while(x < width) {

        a = dy / dx;
        b = y - a * x;

        // si la balle monte
        if(a > 0) {
            y = height;
            x = (y - b) / a;
        // si la balle descend
        } else {
            x = - b / a;
            y = a * x + b;
        }

        dy = -dy;
    }

    return {
        x : width,
        y: (a * width + b),
        dx : -dx,
        dy: dy
    };
}

function predictRequestPosition(width, height, x, y, dx, dy) {

    // calcul de la fonction affine correspondant
    // à la trajectoire de la balle
    var a, b;

    while(x > 0) {

        a = dy / dx;
        b = y - a * x;

        // si la balle monte
        if(a < 0) {
            y = height;
            x = (y - b) / a;
        // si la balle descend
        } else {
            x = - b / a;
            y = a * x + b;
        }

        dy = -dy;
    }

    return {
        x : 0,
        y: b,
        dx : -dx,
        dy: dy
    };
}

function runIa(pong){
    vseb(pong, 'right');
}


//
// function predictbis(ball,wall="left"){
//     var cfg = {
//         left : ball.minX,
//         right : ball.maxX
//     }
//     var offsetY = ball.maxY - ball.minY;
//     var offsetX = ball.maxX - ball.minX;
//
//     var a = ( ( offsetY + ball.dy ) - offsetY ) / ( ( offsetX+ball.dx ) - offsetX );
//     var b = offsetY - ( a*(offsetX) );
//
//
//     var fn = function(a,b,x){
//         var object = {
//
//         }
//         console.log(,b,x);
//         return a*x+b;
//     }
//
//     var impact = fn(a,b,cfg[wall]);
//     var y = fn(a,b,cfg[wall]);
//     // var walls = Math.floor( impact / ball.maxY );
//     // var y ;
//     //
//     // if( walls%2 ===0 ){
//     //     y = impact % ball.maxY
//     // }else {
//     //     y = ball.maxY-(impact % ball.maxY)
//     // }
//     console.log(y);
//     return {
//         y : y
//     };
//
//
// }

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

/**
 * V4 intercept la ball en utilisant le predict de mec sur github
 */
function v4(pong,side="right"){

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

        pt = predictTarget(ball,paddle);

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

/**
 * V5 intercept la ball en utilisant le predict de moi
 */
function v5(pong,side="right"){

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

        pt = predictbis(ball,side);

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
