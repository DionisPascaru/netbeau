import HomeView from '../views/HomeView';
import AboutView from '../views/AboutView';
import ServicesView from '../views/ServicesView';
import TechnologiesView from '../views/TechnologiesView';
import PortfolioView from '../views/PortfolioView';
import ContactView from '../views/ContactView';
import ProjectDetailsComponent from "@/components/portfolio/ProjectDetailsComponent";

export default [
    {
        path: '/',
        name: 'HomeView',
        component: HomeView
    },
    {
        path: '/about',
        name: 'AboutView',
        component: AboutView
    },
    {
        path: '/services',
        name: 'ServicesView',
        component: ServicesView
    },
    {
        path: '/technologies',
        name: 'TechnologiesView',
        component: TechnologiesView
    },
    {
        path: '/portfolio',
        name: 'PortfolioView',
        component: PortfolioView,
    },
    {
        path: '/portfolio/:id/:slug',
        name: 'ProjectDetailsComponent',
        component: ProjectDetailsComponent
    },
    {
        path: '/contact',
        name: 'ContactView',
        component: ContactView
    }
];