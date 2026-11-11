import { callRobloxApi } from '../../../core/api.js';

let currentOptionSelected;


/** @type {import('../privacyToggles.d.ts').Dropdown} */
export default {
    title: 'privacyToggles.dropdowns.example.name', // manage translation strings
    name: 'example',
    settingAttached: 'privacyTogglesDropdownExampleToggleEnabled',
    icon: {
        icon: "tilt",
        filled: true,
    },
    getInitialItems: async (accountSettings) => {
        /** @type {import('../privacyToggles.d.ts').DropdownOption[]} */
        let options = [
            {
                label: 'privacyToggles.dropdowns.shared.off',
                value: 'Off',
                default: true
            },
            {
                label: 'privacyToggles.dropdowns.shared.on',
                value: 'On'
            }
        ];
        return options;
    },
    valueChanged: async (value) => {
        if (currentOptionSelected === value) return;
        currentOptionSelected = value;
        
        if (value === 'On') {
            
        }
        if (value === 'Off') {
            // logic for when the toggle is turned off
        }
        
    },
    changeSettingsBasedOtherSettings: async (currentSettings, otherSettingName, otherSettingValue, setValue) => {
        // change option and option availability based on other dropdown toggles and stuff!
        // this function is completely optional
        return currentSettings;
    },
}
