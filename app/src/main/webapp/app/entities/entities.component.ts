import { defineComponent, provide } from 'vue';

import RegionService from './region/region.service';
import CountryService from './country/country.service';
import ProductoService from './producto/producto.service';
import UserService from '@/entities/user/user.service';
// jhipster-needle-add-entity-service-to-entities-component-import - JHipster will import entities services here

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'Entities',
  setup() {
    provide('userService', () => new UserService());
    provide('regionService', () => new RegionService());
    provide('countryService', () => new CountryService());
    provide('productoService', () => new ProductoService());
    // jhipster-needle-add-entity-service-to-entities-component - JHipster will import entities services here
  },
});
