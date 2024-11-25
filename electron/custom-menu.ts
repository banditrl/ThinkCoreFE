import { BrowserWindow, Menu, MenuItem } from "electron";

const addCustomMenu = (win: BrowserWindow | null) => {
    const menu = Menu.getApplicationMenu();

    if (!menu) return;

    const fileMenu = menu.items.find((item) => item.label === 'File');

    if (fileMenu?.submenu) {
        fileMenu.submenu.append(
            new MenuItem({
                label: 'Go to Home',
                click: () => {
                    win?.webContents.send('navigate-to-home');
                },
            })
        );
    }

    // Update the application menu with the modified version
    Menu.setApplicationMenu(menu);
}

export default addCustomMenu;
