import { computed, defineComponent, inject, ref, type Ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { useRoute, useRouter } from 'vue-router';
import { useVuelidate } from '@vuelidate/core';

import ProductoService from './producto.service';
import { useValidation } from '@/shared/composables';
import { useAlertService } from '@/shared/alert/alert.service';

import { type IProducto, Producto } from '@/shared/model/producto.model';

export default defineComponent({
  compatConfig: { MODE: 3 },
  name: 'ProductoUpdate',
  setup() {
    const productoService = inject('productoService', () => new ProductoService());
    const alertService = inject('alertService', () => useAlertService(), true);

    const producto: Ref<IProducto> = ref(new Producto());
    const isSaving = ref(false);
    const currentLanguage = inject('currentLanguage', () => computed(() => navigator.language ?? 'es'), true);

    const route = useRoute();
    const router = useRouter();

    const previousState = () => router.go(-1);

    const retrieveProducto = async productoId => {
      try {
        const res = await productoService().find(productoId);
        producto.value = res;
      } catch (error) {
        alertService.showHttpError(error.response);
      }
    };

    if (route.params?.productoId) {
      retrieveProducto(route.params.productoId);
    }

    const { t: t$ } = useI18n();
    const validations = useValidation();
    const validationRules = {
      nombre: {},
      descripcion: {},
    };
    const v$ = useVuelidate(validationRules, producto as any);
    v$.value.$validate();

    return {
      productoService,
      alertService,
      producto,
      previousState,
      isSaving,
      currentLanguage,
      v$,
      t$,
    };
  },
  created(): void {},
  methods: {
    save(): void {
      this.isSaving = true;
      if (this.producto.id) {
        this.productoService()
          .update(this.producto)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showInfo(this.t$('ecommerceApp.producto.updated', { param: param.id }));
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      } else {
        this.productoService()
          .create(this.producto)
          .then(param => {
            this.isSaving = false;
            this.previousState();
            this.alertService.showSuccess(this.t$('ecommerceApp.producto.created', { param: param.id }).toString());
          })
          .catch(error => {
            this.isSaving = false;
            this.alertService.showHttpError(error.response);
          });
      }
    },
  },
});
