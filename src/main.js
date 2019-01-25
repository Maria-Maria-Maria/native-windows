let root = document.getElementById('root');

let workspace = new Workspace(root);
    workspace.initWorkspace();

let navbar = new Navbar(root, workspace.createWindow, workspace.countWindows);
    navbar.initNavbar();
