const blocks = {
    angle:`<div class="angle">
    <div class="square-block angle-block first-angle"></div>
    <div class="square-block angle-block"></div>
    <div class="square-block angle-block"></div>
    <div class="square-block angle-block"></div>
    </div>`,
    square: `<div class="square">
    <div class="square-block block-square"></div>
    <div class="square-block block-square"></div>
    <div class="square-block block-square"></div>
    <div class="square-block block-square"></div>
    </div>`,
    reverseAngle: `<div class="reverse-angle">
    <div class="square-block reverse-angle-block first-reverse-an"></div>
    <div class="square-block reverse-angle-block"></div>
    <div class="square-block reverse-angle-block"></div>
    <div class="square-block reverse-angle-block"></div>
    </div>`,
    stick: `<div class="stick">
    <div class="square-block stick-block"></div>
    <div class="square-block stick-block"></div>
    <div class="square-block stick-block"></div>
    <div class="square-block stick-block"></div>
    </div> `,
     trident: `<div class="trident">
    <div class="square-block trident-block first-trident"></div>
    <div class="square-block trident-block"></div>
    <div class="square-block trident-block"></div>
    <div class="square-block trident-block"></div>
    </div>`,
    smallAngle: `<div class="small-angle">
    <div class="first-small-a">
    <div class="square-block small-angle-block"></div>
    <div class="square-block small-angle-block"></div>
    </div>
    <div class="second-small-a">
    <div class="square-block small-angle-block"></div>
    <div class="square-block small-angle-block"></div>
    </div>
    </div>`,
    smallReverseAngle: `<div class="small-reverse-angle">
    <div class="first-small-b">
    <div class="square-block small-reverse-block"></div>
    <div class="square-block small-reverse-block"></div>
    </div>
    <div class="second-small-b">
    <div class="square-block small-reverse-block"></div>
    <div class="square-block small-reverse-block"></div>
    </div>
    </div>`
}

function blockMove(){
   let randomBlocks = Object.keys(blocks);
   let rn = Math.floor(Math.random()* randomBlocks.length);
   let finalBlocks = randomBlocks[rn];
   console.log(finalBlocks);
   document.querySelector('.gameplay').innerHTML = blocks[finalBlocks];
}
blockMove();