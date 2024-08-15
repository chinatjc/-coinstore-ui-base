import type { FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconProps {
  icon: FontAwesomeIconProps['icon'];
  spin?: FontAwesomeIconProps['spin'];
  style?: FontAwesomeIconProps['style'];
  className?: FontAwesomeIconProps['className'];
  theme?: ThemeProps;
}
