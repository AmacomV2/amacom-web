import { ComponentType } from '@angular/cdk/portal';
import { Marco } from '@core/dialog/models/marco';
import { dataModalView, configModalView } from '@shared/components/modal-view/models/config.view.modal.view';

export interface ActionCrud<T> {
  /**
   * componente que se mostrara en el modal y que recibira la informacion para saber si crea o edita.
   */
  //component?: ComponentType<any>;

  modal: Marco;
  /**
   * si se quiere mostrar otro componente en la vista. utilizando routerLink.
   */
  urlView?: string;
  /**
   * titulo del modal.
   */
  //title: string;

  actionType: 'add' | 'edit' | 'delete' | 'view';

  /**
   * url del endpoint para hacer la peticion POST, PUT, DELETE.
   */
  urlEndpoint?: string;

  /**
   * la configuracion de la vista de ver y el orden de la informacion
   */
  configView?: configModalView[];

  

  //params?: (data: T) => any;
  //body?: (data: T) => any;
}

export interface ModalConfig<T> {
  edit: ActionCrud<T>;
  create: ActionCrud<T>;
  delete: ActionCrud<T>;
  view: ActionCrud<T>;
}
