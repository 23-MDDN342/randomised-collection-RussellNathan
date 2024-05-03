[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/uYb6fuja)
## 2024 MDDN342 Assignment 2: Randomised Collections

**Hand-drawn faces**

The first challenge with this project I undertook was finding a way to cycle through different shapes that would all look hand drawn. The best method I decided for this was to load the coordinates for each individual face shape from separate array files with the coordinates for different shapes each stored in different lines.

To create the coordinates, I sketched the shapes I desired with the pen tool in Photoshop and exported the layer as an SVG. These coordinates weren't in an acceptable format for any P5.js tool to recognise natively and for some reason, all of the coordinates were in the completely wrong scale. I copied the coords into Excel and after trial and error wrote a formula that would place the shapes I wanted in the right place.

From these coordinates, I would have P5 calculate beziers and then draw a bunch of circles along these curves to create the effect of a brush stroke. I did this instead of drawing actual beziers so that later I could create convincing hand-drawn brush stroke effects.
Just while testing out the for loops, I made the circle's radii be dependent on the position along the curve. This accidentally gave it the appearance that a real brush stroke would have, as the ink slowly grows thinner on paper. I might end up keeping this idea in the final presentation because I like how it looks.