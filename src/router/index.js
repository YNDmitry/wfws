import { createRouter, createWebHistory } from 'vue-router'

import home from '../pages/home.vue'
import reports from '../pages/reports.vue'
import study from '../pages/study.vue'
import blog from '../pages/blog.vue'
import blogTemplate from '../templates/blogTemplate.vue'

const routes = [
  {
    name: 'Home',
    path: '/',
    component: home,
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    name: 'Reports',
    path: '/reports',
    component: reports,
    meta: {
      layout: 'mainLayout'
    }
  },
  {
    name: 'Study',
    path: '/study',
    component: study,
    meta: {
      layout: 'studyLayout'
    }
  },
  {
    name: 'Blog',
    path: '/blog',
    component: blog,
    meta: {
      layout: 'mainLayout'
    }
  },
	{
    name: 'BlogTemplate',
    path: '/blog/:id',
    component: blogTemplate,
    meta: {
      layout: 'mainLayout'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  linkActiveClass: 'current',
  linkExactActiveClass: 'current',
  routes
})

export default router