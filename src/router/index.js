import { createRouter, createWebHashHistory } from 'vue-router'
import Customers from '../views/Customers.vue'
import TransactionForm from '../components/TransactionForm.vue'
import Dashboard from '../views/Dashboard.vue'
import Products from '../views/Products.vue'

const routes = [
  {
    path: '/',
    name: 'Customers',
    component: Customers,
  },
  {
    path: '/customers/:customerId/transaction',
    name: 'TransactionForm',
    component: TransactionForm,
  },
  {
    path: '/Dashboard',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/products',
    name: 'Products',
    component: Products,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
