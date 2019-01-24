class Window {
    constructor(name, navElement) {
        this.name = name;
        this.element = null;
        this.icon = null;
        this.navElement = navElement;
        
        // ширина и высота от 100 до 500 px
        this.width = (Math.random() * (500 - 100) + 100).toFixed();
        this.height = (Math.random() * (500 - 100) + 100).toFixed();
        
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

        this.element.onclick = () => (console.log(this.name))

        this.createNav();
        this.initIconWindow();
        
        return this.element;
    }

    initIconWindow() {
        this.icon = document.createElement('div');
        this.icon.id = 'icon-window-' + this.name;

        this.navElement.appendChild(this.icon)
    }

    createNav() {
        let navWindow = document.createElement('div');
            navWindow.id = 'nav-window-' + this.name;
            navWindow.innerText = 'window ' + this.name;
        
        let closeButton = document.createElement('button');
            closeButton.id = 'close-button-' + this.name;
            closeButton.innerText = 'x';

        navWindow.appendChild(closeButton);
        this.element.appendChild(navWindow);
    }
}
