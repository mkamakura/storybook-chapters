import * as storybook from '@kadira/storybook';
import { setOptions } from '@kadira/storybook-addon-options';
import infoAddon from '@kadira/react-storybook-addon-info';
import 'storybook-chapters';

storybook.setAddon(infoAddon);

setOptions({
    name: 'React Theming',
    url: 'https://github.com/sm-react/react-theming',
    goFullScreen: false,
    showLeftPanel: true,
    showDownPanel: true,
    showSearchBox: false,
    downPanelInRight: false,
});

storybook.configure(
    () => {
      require('../src/stories');
      require('../src/ThemeSwitcher.story');
      require('../src/MaterialUI/index.story');
    },
    module
);
