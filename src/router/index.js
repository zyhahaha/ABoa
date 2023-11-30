import LoginScreen from '../login';
import HomeScreen from '../home';

export default [
  // 首页
  {
    name: 'HomeScreen',
    component: HomeScreen,
    options: { headerShown: false },
  },
  // 登录界面
  {
    name: 'LoginScreen',
    component: LoginScreen,
    options: { headerShown: false },
  },
]
