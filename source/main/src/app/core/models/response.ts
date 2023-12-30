export interface Response<T> {
    /**
     * Código de respuesta.
     */
    code: number;
    /**
     * Mensaje de respuesta.
     */
    message: string;
    /**
     * Datos de respuesta.
     */
    data: T;
}