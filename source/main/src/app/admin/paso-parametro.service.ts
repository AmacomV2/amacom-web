import { Injectable, Injector } from '@angular/core';

/**
 * Clase que define el servicio para pasar informacion
 * entre componentes Angular.
 * La idea es utilizar este servicio para pasar informacion
 * entre componentes/pantallas de manera que no se utilicen
 * herramientas como el sessionStorage.
 */
@Injectable()
export class PasoParametrosService {
    
    /**
     * Mapa para almacenar la informacion de los parametros
     * que se pasan entre componentes
     */
    private infoParametros: Map<string, any> = new Map<string, any>();
    /**
     * Mapa para almacenar los parametros agrupados bajo
     * un discriminador para luego limpiarlos facilmente
     */
    private agrupamientoParametrosKey: Map<string, Array<string>> = new Map<string, Array<string>>();
    
    /**
     * Constructor
     */
    constructor(injector: Injector) {
    }
    
    /**
     * Metodo encargado de almacenar un parametro
     * que sera enviando desde un componente a otro
     */
    public adicionarParametro(id:string, valor:any, agrupador?:string): void {
        if (!id || valor === null || valor === undefined) {
            return;
        }
        if (agrupador) {
            this.agruparParametro(agrupador, id);
        }
        this.infoParametros.set(id, valor);
    }
    
    /**
     * Metodo encargado de retornar la informacion de
     * un parametro almacenado previamente
     * 
     */
    public obtenerParametro(id:string): any {
        if (!id) {
            return null;
        }
        let parametro: any = this.infoParametros.get(id);
        if (parametro === undefined) {
            parametro = null;
        }
        return parametro;
    }

    /**
     * Metodo encargado de agrupar los parametros recibidos
     * para luego eliminarlos facilmente
     */
    private agruparParametro(agrupador:string, idParametro:string): void {
        let listaIdParametros: Array<string> | undefined = this.agrupamientoParametrosKey.get(agrupador);
        if (!listaIdParametros) {
            listaIdParametros = new Array<string>();
        }
        listaIdParametros.push(idParametro);
        this.agrupamientoParametrosKey.set(agrupador, listaIdParametros);
    }

    /**
     * Metodo encargado de eliminar los parametros
     * agrupados bajo cierto agrupador
     */
    public eliminarParametros(agrupador:string): void {
        let listaIdParametros: Array<string> | undefined= this.agrupamientoParametrosKey.get(agrupador);
        if (!listaIdParametros) {
            return;
        }
        listaIdParametros.forEach(idParametro => {
            this.infoParametros.delete(idParametro);
        });
    }

    /**
     * Metodo para eliminar un parametro especifico
     * por el id
     */
    public eliminarParametroPorId(id:string): void {
        if (!id) {
            return;
        }
        this.infoParametros.delete(id);
    }
    
}