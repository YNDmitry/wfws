import { createRouter, createWebHistory } from "vue-router";

import home from "../pages/home.vue";
import reports from "../pages/reports.vue";
import study from "../pages/study.vue";
import studyMain from "../pages/studyMain.vue";
import blog from "../pages/blog.vue";
import blogTemplate from "../templates/blogTemplate.vue";
import lastReports from "../pages/lastReports.vue";
import news from "../pages/news.vue";

const routes = [
	{
		name: "Home",
		path: "/",
		component: home,
		meta: {
			layout: "mainLayout",
			title: "Главная",
		},
	},
	{
		name: "Reports",
		path: "/reports",
		component: reports,
		meta: {
			layout: "mainLayout",
			title: "Отчёты компаний",
		},
	},
	{
		name: "LastReports",
		path: "/reports/last-reports",
		component: lastReports,
		meta: {
			layout: "mainLayout",
			title: 'Отчёты'
		},
	},
	{
		name: "Blog",
		path: "/blog",
		component: blog,
		meta: {
			layout: "mainLayout",
		},
	},
	{
		name: "BlogTemplate",
		path: "/blog/:id",
		component: blogTemplate,
		meta: {
			layout: "mainLayout",
		},
	},
	{
		name: "Study",
		path: "/study",
		component: study,
		meta: {
			layout: "mainLayout",
			title: "Обучение",
		},
	},

	{
		name: "StudyMain",
		path: "/study/:id",
		component: studyMain,
		meta: {
			layout: "studyLayout",
			title: "",
		},
	},
	{
		name: "Blog",
		path: "/blog",
		component: blog,
		meta: {
			layout: "mainLayout",
			title: "Блог",
		},
	},
	{
		name: "BlogTemplate",
		path: "/blog/:id",
		component: blogTemplate,
		meta: {
			layout: "mainLayout",
			title: "",
		},
	},
	{
		name: "news",
		path: "/news",
		component: news,
		meta: {
			layout: "mainLayout",
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	linkActiveClass: "current",
	linkExactActiveClass: "current",
	scrollBehavior() {
		return {
			top: 0,
		};
	},
	routes,
});

export default router;
