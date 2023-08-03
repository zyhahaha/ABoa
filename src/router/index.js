import LoginScreen from '../pages/login';
import UserDetails from '../pages/user';

export default [
  // 登录界面
  {
    name: 'LoginScreen',
    component: LoginScreen,
    // options: { ...headerOptions, headerTransparent: false },
  },
  // 用户详情
  {
    name: 'UserDetails',
    component: UserDetails,
    // options: headerOptions,
  },
]
