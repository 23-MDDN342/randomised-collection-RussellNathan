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

function drawface(iEye,sPupil) {
    let bezierJoin = 0;

    //stroke parameters
    stroke('black');
    strokeWeight(0.1);
    // noFill();
    fill('black');

    /*
    
        part-TransX     =   moves the face part after the scale has been applied
        part-TransY     =   ~
        part-OffsetX    =   shifts the origin of the body part, useful for shifting where the part scales from
        part-OffsetY    =   ~
        part-Scale      =   scales the face part

    */

    //EYE LEFT
    let coords  =   split(eyesCoords[iEye],',');
    let L_eyeTransX = 0;
    let L_eyeTransY = 0;
    let L_eyeOffsetX = 1;
    let L_eyeOffsetY = 0;
    let L_eyeScale  = 1;
    // define if the gaps in the beziers should be bridged, as some shapes contain disjointed parts
    if (iEye==6) {
        bezierJoin = 2;
    }

    DrawShape(coords,   L_eyeTransX,L_eyeTransY,    L_eyeOffsetX,L_eyeOffsetY,    L_eyeScale,1,1,0,bezierJoin);

    //PUPIL LEFT
    coords  =   split(pupilCoords[0],',');
    let L_pupilTransX = -0.7;
    let L_pupilTransY = 0.7;
    let L_pupilOffsetX = -1.5;
    let L_pupilOffsetY = -0.2;
    let L_pupilScale  = sPupil/100+0.5;

    DrawShape(coords,   L_pupilTransX,L_pupilTransY,    L_pupilOffsetX,L_pupilOffsetY,    L_pupilScale,1,1,0,0);

    //EYE RIGHT
    coords  =   split(eyesCoords[iEye],',');
    let R_eyeTransX = 3;
    let R_eyeTransY = 0;
    let R_eyeOffsetX = 0;
    let R_eyeOffsetY = 0;
    let R_eyeScale  = 1;
    let R_eyeScaleX  = -1;
    let R_eyeScaleY  = 1;
    let R_eyeTilt  = 0;
    // define if the gaps in the beziers should be bridged, as some shapes contain disjointed parts
    if (iEye==6) {
        bezierJoin = 2;
    }

    DrawShape(coords,   R_eyeTransX,R_eyeTransY,    R_eyeOffsetX,R_eyeOffsetY,    R_eyeScale,R_eyeScaleX,R_eyeScaleY,   R_eyeTilt ,bezierJoin);

    //PUPIL RIGHT
    coords  =   split(pupilCoords[0],',');
    let R_pupilTransX = 3;
    let R_pupilTransY = 0;
    let R_pupilOffsetX = -1.5;
    let R_pupilOffsetY = -0.5;
    let R_pupilScale  = sPupil/100+0.4;

    DrawShape(coords,   R_pupilTransX,R_pupilTransY,    R_pupilOffsetX,R_pupilOffsetY,    R_pupilScale,1,1,0,0);

    //NOSE
    coords  =   split(noseCoords[iNose],',');
    let noseTransX = 1;
    let noseTransY = 1;
    let noseOffsetX = 0;
    let noseOffsetY = 0;
    let noseScale  = 1;

    DrawShape(coords,   noseTransX,noseTransY,    noseOffsetX,noseOffsetY,    noseScale,1,1,0,bezierJoin);   

    //MOUTH
    coords  =   split(mouthCoords[iMouth],',');
    let mouthTransX = 1;
    let mouthTransY = 6;
    let mouthOffsetX = 0;
    let mouthOffsetY = 0;
    let mouthScale = 1;

    DrawShape(coords,   mouthTransX,mouthTransY,    mouthOffsetX,mouthOffsetY,    mouthScale,1,1,0,bezierJoin);
}

function DrawShape(coords,dotTransX,dotTransY,dotOffsetX,dotOffsetY,shapeScale,shapeScaleX,shapeScaleY,shapeTilt,bezierJoin){
    push();
    translate(dotTransX, dotTransY);
    scale(shapeScale*shapeScaleX,shapeScale*shapeScaleY);
    for (let i=0; i<coords.length; i+=6 + bezierJoin)
    {
        for (let j=0; j<1; j+=1/BrushDetail){
            ellipse(
                //x bezier coords
                bezierPoint(coords[i+0]  -dotOffsetX,    coords[i+2]  -dotOffsetX,    coords[i+4]  -dotOffsetX,    coords[i+6]  -dotOffsetX,    j),
                //y bezier coords
                bezierPoint(coords[i+1]  -dotOffsetY,    coords[i+3]  -dotOffsetY,    coords[i+5]  -dotOffsetY,    coords[i+7]  -dotOffsetY,    j),
                j/1.7+(PI%i)/100  );
        }
    }
    pop();
}