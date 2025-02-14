import routerPath from './routerPath.js'


const routes = [
  // UserMain
  {
    path: routerPath.root, //?  
    component: () => import('@/views/pages/pUserMainView.vue'), 
    children: [
      // main
      {
        path: routerPath.root, //?
        component: () => import('@/views/containers/01_Main/MainContainer'), //?
        meta: {
        }
      },
      // 회원
      {
        path: routerPath.member.root, //?
        name: 'memberContainer',
        component: () => import('@/views/containers/02_Member/MemberContainer'), //?
        children: [
          {
            // path: routerPath.member.list,
            path: routerPath.member.list, //?
            name: 'memberListContainer',
            component: () => import('@/views/containers/02_Member/MemberListContainer'),
            meta: {
              title: '회원 | 조회'
            }
          }
        ]
      }
    ]
  }

]

export default routes
