import { Settings as LayoutSettings } from '@ant-design/pro-layout';

export default {
  navTheme: 'light',
  primaryColor: '#1890ff',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  menu: {
    locale: true,
  },
  title: '股票投资（Stock Investment）',
  pwa: false,
  logo: require('@/assets/logo.jpg'),
  iconfontUrl: '',
} as LayoutSettings & {
  pwa: boolean;
};
