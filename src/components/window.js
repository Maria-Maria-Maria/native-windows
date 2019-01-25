class Window {
    constructor(name, lowerWindows) {
        this.name = name;
        this.element = null;
        this.icon = null;
        this.lowerWindows = lowerWindows;

        // флаг, что окно открыто
        this.isOpen = true;

        // флаг, что окно поверх все
        this.isTop = false;
        
        // ширина и высота от 200 до 500 px
        this.width = (Math.random() * (500 - 200) + 100).toFixed();
        this.height = (Math.random() * (500 - 200) + 100).toFixed();
        
        // рандомные координаты 
        this.x = (Math.random() * (window.innerWidth - this.width)).toFixed();
        this.y = (Math.random() * (window.innerHeight - this.height)).toFixed();
    }

    initWindow() {
        this.element = document.createElement('div');
        this.element.id = 'window-' + this.name;
        this.element.style.top = this.y + 'px';
        this.element.style.left = this.x + 'px';
        this.element.style.height = this.height + 'px';
        this.element.style.width = this.width + 'px'; 
        this.element.className = 'top'
        this.element.draggable=true;

        // окно поверх остальных
        this.element.onclick = () => {
            this.lowerWindows(); 
            this.isTop = true;
            this.element.classList.add('top');
        }

        this.createNav();
        this.initIconWindow();

        // перемещать окно
        let mover = new Mover(this.element);
            mover.initMover();
       
        return this.element;
    }

    initIconWindow() {
        this.icon = document.createElement('div');
        this.icon.id = 'icon-window-' + this.name;
        this.icon.innerText = 'window ' + this.name;
        
        this.icon.onclick = () => {            
            // открыть окно и расположить поверх
            if (!this.isOpen) {
                this.element.classList.remove('hidden');
                this.isOpen = true;
            }

             // если окно поверх остальных - скрыть, иначе - отобразить поверх остальных 
            if (this.isTop) {
                this.element.classList.add('hidden');
                this.element.classList.remove('top');
                this.isOpen = false;
                this.isTop = false;
            } else {
                this.lowerWindows(); 
                this.isTop = true;
                this.element.classList.add('top');
            }
        }

        // добавить на рабочую панель
        document.getElementById('navbar').appendChild(this.icon)
    }

    createNav() {
        let navWindow = document.createElement('div');
            navWindow.id = 'nav-window-' + this.name;
            navWindow.innerText = 'window ' + this.name;
        
        let closeButton = document.createElement('button');
            closeButton.id = 'close-button-' + this.name;
            closeButton.innerText = 'x';
            
            // удалить окно
            closeButton.onclick = () => {
                this.element.remove();
                this.icon.remove();
            }
        
        let miniButton = document.createElement('button');
            miniButton.id = 'mini-button-' + this.name;
            miniButton.innerText = '_';
            
            // свернуть окно
            miniButton.onclick = () => {
                if (this.isOpen) {
                    this.element.classList.add('hidden');
                    this.isOpen = false;
                }
            }

        navWindow.appendChild(closeButton);
        navWindow.appendChild(miniButton);
        this.element.appendChild(navWindow);
    }

    lower() {
        this.isTop = false;
        this.element.classList.remove('top');
    }
}
