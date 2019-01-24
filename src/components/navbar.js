class Navbar {
    constructor(root) {
        this.root = root;
        this.element = null;
        this.countWindows = 0;

        this.createWindow = this.createWindow.bind(this);
    }

    initNavbar() {
        this.element = document.createElement('div');
        this.element.id = 'navbar';

        let addButton = document.createElement('button');
            addButton.id = 'addButton';
            addButton.innerText = '+';
            addButton.onclick = this.createWindow;

        this.element.appendChild(addButton);
        this.root.appendChild(this.element);
    }

    createWindow() {  
        let window = new Window(this.countWindows, this.element);
        
        let workspace = document.getElementById('workspace');        
            workspace.appendChild(window.initWindow(this.countWindows));

        this.countWindows += 1;
    }
}
