import {createElement, Text, Wrapper} from './createElement';
import {Timeline, Animation} from './animation';
import {enableGesture} from './gesture';
// import {Carousel} from './carousel.view';
export class Carousel {
    constructor(config){
        this.children = [];
    }

    render(){
        let offset = 0;
        let children = this.data.map((url, currentPosition) => {
            
               let onStart = ()=> {
                   tl.pause();
                   clearTimeout(nextPicStopHandler);

                   let currentElement = children[currentPosition];
                   let currentTransformValue = Number(currentElement.style.transform.match(/translateX\(([\s\S]+)px\)/)[1]);
                   offset = currentTransformValue + 500 * currentPosition;
               }
    
               let onPan = event => {
                   let lastPosition = (currentPosition - 1 + this.data.length) % this.data.length;
                   let nextPosition = (currentPosition + 1) % this.data.length;
    
                   let lastElement = children[lastPosition];
                   let currentElement = children[currentPosition];
                   let nextElement = children[nextPosition];

              
                   let dx = event.detail.clientX - event.detail.startX;
                   console.log('pand dx',dx);
                   let lastTransformValue = - 500 - 500 * lastPosition + offset + dx;
                   let currentTransformValue = - 500 * currentPosition + offset + dx;
                   let nextTransformValue = 500 - 500 * nextPosition + offset + dx;

                   lastElement.style.transform = `translateX(${lastTransformValue }px)`;
                   currentElement.style.transform = `translateX(${currentTransformValue}px)`;
                   nextElement.style.transform = `translateX(${nextTransformValue}px)`;
               }

               let onPanend = event => {
                    let direction = 0;
                    let dx = event.detail.clientX - event.detail.startX;
                    console.log('dx,offset', dx, event.detail.clientX,event.detail.startX, offset);
                    if (dx + offset > 250) {
                        direction = 1;
                    } else if (dx  + offset < -250) {
                        direction = -1;
                    }
                    tl.reset();
                    tl.start();

                   let lastPosition = (currentPosition - 1 + this.data.length) % this.data.length;
                   let nextPosition = (currentPosition + 1) % this.data.length;
    
                   let lastElement = children[lastPosition];
                   let currentElement = children[currentPosition];
                   let nextElement = children[nextPosition];

                    console.log(direction);
                    // if(direction) {
                        let currentAnimation = new Animation(currentElement.style, 'transform', offset + dx - 500 * currentPosition, direction * 500 - 500 * currentPosition,  500, 0, linear, v => `translateX(${v}px)`);
                        let lastAnimation = new Animation(lastElement.style, 'transform', offset + dx - 500 - 500 * lastPosition, direction * 500 - 500 - 500 * lastPosition,  500, 0, linear, v => `translateX(${v}px)`);
                        let nextAnimation = new Animation(nextElement.style, 'transform', offset + dx + 500 - 500 * nextPosition, direction * 500 + 500 - 500 * nextPosition,  500, 0, linear, v => `translateX(${v}px)`);
                        
                        tl.add(currentAnimation);
                        tl.add(lastAnimation);
                        tl.add(nextAnimation);

                        position = (position - direction + this.data.length) % this.data.length;
                        nextPicStopHandler = setTimeout(nextPic, 3000);
                        console.log('next');
                    // }
               }
    
               let element = <img src={url} enableGesture={true} onStart={onStart} onPanend={onPanend}  onPan={onPan} />;
               element.style.transform = 'translateX(0px)';
               element.addEventListener('dragstart', event => event.preventDefault());
               return element;
           });
        let root = <div class='carousel'>
            {children}
        </div>;

       let position = 0;
       let linear = t => t;

       let tl = new Timeline();
       tl.start();
       
       var nextPicStopHandler = null;
       
       

       //运用 animation组件修改 carousel
       let nextPic = ()=> {
           console.log('nexPic');
           let nextPosition = (position + 1) % this.data.length;
           //获取第一个图片
           let current = children[position];
           let next = children[nextPosition];

           tl.add(new Animation(current.style, 'transform', - 500 * position, - 500 - 500 * position, 1000, 0, linear, v => `translateX(${v}px)`));
           tl.add(new Animation(next.style, 'transform', 500 - 500 * nextPosition, -500 * nextPosition, 1000, 0, linear, v => `translateX(${v}px)`));
           
           position = nextPosition;
           
           nextPicStopHandler = setTimeout(nextPic, 3000);
       }
       nextPic();

       return root;
   }

    setAttribute(name, value) {
        this[name] = value;
    }

    appendChild(child){
        this.children.push(child);
    }

    addEventListener(type, handler, config) {
        document.addEventListener(...arguments);
    }

    
        
    mountTo(parent){
        this.render().mountTo(parent)
    }

}

