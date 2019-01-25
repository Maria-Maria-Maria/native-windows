class Mover {
    constructor (moveElement) {
        this.mousePosition = {
            x: null,
            y: null
        };
        
        this.offset = {
            x: null,
            y: null
        }

        this.moveElement = moveElement;
        this.isDown = false;
    }

    initMover () {
        this.moveElement.addEventListener('mousedown', (e) => {
            this.isDown = true;
            this.offset = {
                x: this.moveElement.offsetLeft - e.clientX,
                y: this.moveElement.offsetTop  - e.clientY
            };
        }, true);

        document.addEventListener('mouseup', () => {
            this.isDown = false;
        }, true);

        document.addEventListener('mousemove', (e) => { 
            e.preventDefault();
            
            if (this.isDown) {
                this.mousePosition = {
                    x : e.clientX,
                    y : e.clientY
                };
                
                this.moveElement.style.left = (this.mousePosition.x + this.offset.x + 'px');
                this.moveElement.style.top  = (this.mousePosition.y + this.offset.y) + 'px';
            }
        }, true);
    }
}
