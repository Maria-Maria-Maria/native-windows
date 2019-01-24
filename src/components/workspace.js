class Workspace {
    constructor(root) {
        this.root = root;
    }

    initWorkspace() {
        this.root.insertAdjacentHTML('beforeend', '<div id="workspace">workspace</div>');        
    }
}