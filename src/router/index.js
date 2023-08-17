import LoginScreen from '../login';
import HomeScreen from '../home';

export default [
  // 登录界面
  {
    name: 'LoginScreen',
    component: LoginScreen,
    // options: { ...headerOptions, headerTransparent: false },
  },
  // 首页
  {
    name: 'HomeScreen',
    component: HomeScreen,
    // options: headerOptions,
  },
]
