//Local extension imports
const ExtensionUtils = imports.misc.extensionUtils;
const Me = ExtensionUtils.getCurrentExtension();

//Main imports
const AppDisplay = imports.ui.appDisplay;
const Main = imports.ui.main;

const ShortcutMaker = Me.imports.shortcutMaker;

//save old popupmenu
var oldPopupMenu = null;

function enable() {
    log(`enabling ${Me.metadata.name}`);
    oldPopupMenu = AppDisplay.AppIcon.prototype.popupMenu;
    ShortcutMaker.editIconClass(oldPopupMenu);
}

// REMINDER: It's required for extensions to clean up after themselves when
// they are disabled. This is required for approval during review!
function disable() {
    log(`disabling ${Me.metadata.name}`);

    //this._popUpMenuItem.destroy();
    AppDisplay.AppIcon.prototype.popupMenu = oldPopupMenu;
}


function init() {
    
}
