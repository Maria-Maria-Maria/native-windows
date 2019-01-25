class Workspace {
    constructor(root) {
        this.element = null;
        this.root = root;
        this.windows = new Array();
        this.countWindows = 0;
        
        this.createWindow = this.createWindow.bind(this);
        this.lowerWindows = this.lowerWindows.bind(this);
    }

    initWorkspace() {
        this.element = document.createElement('div');
        this.element.id = 'workspace';
        
        this.root.appendChild(this.element);
    }

    lowerWindows() {
        for (let window of this.windows) {
            window.lower()
        }
    }

    createWindow() {  
        let window = new Window(this.countWindows, this.lowerWindows, this.dragItem);
        
        let workspace = document.getElementById('workspace');        
            workspace.appendChild(window.initWindow());
        
        this.windows.push(window);
        this.countWindows += 1;
    }
}
