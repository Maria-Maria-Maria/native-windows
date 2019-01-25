class Navbar {
    constructor(root, createWindow, countWindows) {
        this.root = root;
        this.element = null;
        this.countWindows = countWindows;
        this.createWindow = createWindow;
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
}
