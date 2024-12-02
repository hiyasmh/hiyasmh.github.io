// export default class Garden {
//     constructor(gardenEl, controlsEl){
//     this.gardenEl = gardenEl;
//     this.controlsEl = controlsEl;
//     this.activeShape = {};
//     this.activeShapeEl = null;
//     this.mousePos = {x: 0, y: 0}
  
//     this.initInteraction();
//     this.setShape();
//     this.renderShape();
//     }
  
//     initInteraction(){
//       // mousemove
//       this.gardenEl.addEventListener('mousemove', (event) => {
//       this.mousePos = { x: event.clientX, y: event.clientY};
//       this.renderShape();
//       })
//       // click
//       this.gardenEl.addEventListener('click', () => {
//       this.placeShape();
//       })
//       // input
//       let inputs = this.controlsEl.querySelectorAll('input');
//       inputs.forEach((input) => {
//         input.addEventListener('input', () => {
//           this.setShape();
//           this.renderShape();
//         });
//       });
//     }
  
//     setShape(){
//       this.activeShape = {}
//       this.activeShape.type = this.controlsEl.querySelector('input[name="shape"]:checked').value;
//       if (this.activeShape.type === 'rectangle'){
//         this.activeShape.width = parseInt(this.controlsEl.querySelector('input[name="rectangle-width"]').value);
//         this.activeShape.height = parseInt(this.controlsEl.querySelector('input[name="rectangle-height"]').value);
//         this.activeShape.color = this.controlsEl.querySelector('input[name="rectangle-color"]').value;
//       } else {
//         this.activeShape.radius = parseInt(this.controlsEl.querySelector('input[name="circle-radius"]').value);
//         this.activeShape.color = this.controlsEl.querySelector('input[name="circle-color"]').value;
//       }
//     }
  
//     renderShape(){
//       if (this.activeShapeEl === null){
//         this.activeShapeEl = document.createElement('div');
//         this.gardenEl.appendChild(this.activeShapeEl);
//       }
  
//       this.activeShapeEl.style.position = 'absolute';
//       this.activeShapeEl.style.backgroundColor = this.activeShape.color;
  
//       if (this.activeShape.type === 'rectangle') {
//         this.activeShapeEl.style.width = `${this.activeShape.width}px`;
//         this.activeShapeEl.style.height = `${this.activeShape.height}px`;
//         this.activeShapeEl.style.borderRadius = '0%'
//         this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.height/2}px`;
//         this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.width/2}px`;
//       } else {
//         this.activeShapeEl.style.width = `${this.activeShape.radius * 2}px`;
//         this.activeShapeEl.style.height = `${this.activeShape.radius * 2}px`;
//         this.activeShapeEl.style.borderRadius = '100%';
//         this.activeShapeEl.style.top = `${this.mousePos.y - this.activeShape.radius/2}px`;
//         this.activeShapeEl.style.left = `${this.mousePos.x - this.activeShape.radius/2}px`;
//       }
//     }
  
//     placeShape(){
//       this.activeShapeEl = null;
//       this.renderShape();
//     }
//     clear(){
//       this.activeShapeEl = null;
//       this.gardenEl.innerHTML = '';
//       this.renderShape();
//     }
//   }