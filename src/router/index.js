import Vue from 'vue'
import Router from 'vue-router'
const Home = () => import('@/components/pages/Home')
const AboutMe = () => import('@/components/pages/AboutMe')

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/about-me',
      component: AboutMe
    }
  ]
})
