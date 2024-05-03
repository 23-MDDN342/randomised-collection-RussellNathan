/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * some text here
 */
let BrushDetail = 100;
let iEye = 8;
let iNose = 0;
let iMouth = 0;

function preload(){
    eyesCoords      =   loadStrings('coords/eye.array');
    noseCoords      =   loadStrings('coords/nose.array');
    mouthCoords     =   loadStrings('coords/mouth.array');
    pupilCoords     =   loadStrings('coords/pupil.array');
}

function drawface(iEye) {
    let bezierJoin = 0;

    //stroke parameters
    stroke('black');
    strokeWeight(0.1);
    // noFill();
    fill('black');

    //eye l
    let coords  =   split(eyesCoords[iEye],',');
    let eyeTransX = 0;
    let eyeTransY = 0;
    // beginShape();

    if (iEye==6) {
        bezierJoin = 2;
    }

    for (let i=0; i<coords.length; i+=6+bezierJoin)
    {
        // curve(coords[i],    coords[i+1]+eyeTransY,    coords[i+2],    coords[i+3]+eyeTransY,    coords[i+4],    coords[i+5]+eyeTransY,    coords[i+6],    coords[i+7]+eyeTransY);
        // curveVertex(coords[i],coords[i+1]+eyeTransY);
        // print('(',  coords[i],  ',',    coords[i+1],    ')');
        for (let j=0; j<1; j+=1/BrushDetail){
            ellipse(
                //x bezier coords
                bezierPoint(coords[i+0]  -eyeTransX,    coords[i+2]  -eyeTransX,    coords[i+4]  -eyeTransX,    coords[i+6]  -eyeTransX,    j),
                //y bezier coords
                bezierPoint(coords[i+1]  -eyeTransY,    coords[i+3]  -eyeTransY,    coords[i+5]  -eyeTransY,    coords[i+7]  -eyeTransY,    j),
                j/1.7+(PI%i)/100,j/2.7+(PI%i)/100  );
        }
        // print(bezierPoint(coords[i],    coords[i+2],    coords[i+4],    coords[i+6],0.5));
    }
    // endShape();



    //PUPIL
    coords  =   split(pupilCoords[0],',');
    let pupilTransX = -2;
    let pupilTransY = -0.5;
    for (let i=0; i<coords.length; i+=6)
    {
        for (let j=0; j<1; j+=1/BrushDetail){
            ellipse(
                //x bezier coords
                bezierPoint(coords[i+0]  -pupilTransX,    coords[i+2]  -pupilTransX,    coords[i+4]  -pupilTransX,    coords[i+6]  -pupilTransX,    j),
                //y bezier coords
                bezierPoint(coords[i+1]  -pupilTransY,    coords[i+3]  -pupilTransY,    coords[i+5]  -pupilTransY,    coords[i+7]  -pupilTransY,    j),
                j/1.7+(PI%i)/100  );
        }
    }

    //NOSE
    coords  =   split(noseCoords[iNose],',');
    let noseTransX = -1;
    let noseTransY = -1;

    for (let i=0; i<coords.length; i+=6)
    {
        for (let j=0; j<1; j+=1/BrushDetail){
            ellipse(
                //x bezier coords
                bezierPoint(coords[i+0]  -noseTransX,    coords[i+2]  -noseTransX,    coords[i+4]  -noseTransX,    coords[i+6]  -noseTransX,    j),
                //y bezier coords
                bezierPoint(coords[i+1]  -noseTransY,    coords[i+3]  -noseTransY,    coords[i+5]  -noseTransY,    coords[i+7]  -noseTransY,    j),
                j/1.7+(PI%i)/100  );
        }
    }

    //MOUTH
    coords  =   split(mouthCoords[iMouth],',');
    let mouthTransX = -1;
    let mouthTransY = -6;

    for (let i=0; i<coords.length; i+=6)
    {
        for (let j=0; j<1; j+=1/BrushDetail){
            ellipse(
                //x bezier coords
                bezierPoint(coords[i+0]  -mouthTransX,    coords[i+2]  -mouthTransX,    coords[i+4]  -mouthTransX,    coords[i+6]  -mouthTransX,    j),
                //y bezier coords
                bezierPoint(coords[i+1]  -mouthTransY,    coords[i+3]  -mouthTransY,    coords[i+5]  -mouthTransY,    coords[i+7]  -mouthTransY,    j),
                j/1.7+(PI%i)/100  );
        }
    }
}

function DrawDot(){

}