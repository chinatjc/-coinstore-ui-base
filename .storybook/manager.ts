import { addons } from '@storybook/manager-api';
import { themes } from '@storybook/theming';

addons.setConfig({
  theme: themes.light,
});

/** 该文件作用：管理 story 的 UI options 和 theme */
