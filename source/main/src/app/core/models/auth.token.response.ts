/**
 * la Respuesta del token de autenticacion por el endpoint de auth/login.
 */
export interface AuthTokenResponse {
    accessToken: string;
    refreshToken: string;
}