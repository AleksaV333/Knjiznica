const routes = [
  {
    path: '/',
    component: () => import('pages/IndexPage.vue'),
  },
  {
    path: '/popis_knjiga',
    component: () => import('pages/PopisKnjigaPage.vue'),
  },
  {
    path: '/pretrazivanje',
    component: () => import('pages/TraziKnjiguPage.vue'),
  },
  {
    path: '/o_nama',
    component: () => import('pages/ONamaPage.vue'),
  },
  {
    path: '/lokacija',
    component: () => import('pages/LokacijaPage.vue'),
  },
  {
    path: '/login',
    component: () => import('pages/LoginPage.vue'),
  },
  {
    path: '/registracija',
    component: () => import('pages/RegistracijaPage.vue'),
  },
];
