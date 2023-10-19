
export interface Resena {
    id?: number;
    tour: Tour;
    turista: Usuario;
    titulo: string;
    descripcion: string;
    fecha: Date;
    estrella: number;
}

export interface Credenciales {
    "email"?: string;
    "password"?: string
}

export interface Tour {
    id: number;
    barrioMedellin?: Barrio;
    guia?: Guia;
    descripcion?: string;
    nombre?: string;
}

export interface Barrio {
    codigoPostal: number;
    nombre?: string;
}

export interface Guia {
    id?: number;
    ciudadResidencia: string;
    barrioResidencia: string;
    barrioGuia: Barrio;
    ingles: boolean;
    usuario: Usuario;
}

export interface Usuario {
    numeroIdentidad: number;
    nombre: string;
    correo?: string;
    celular?: string;
    contrasena?: string;
    tipoUsuario?: TipoUsuario;
}

export interface TipoUsuario {
    id: number;
    tipoUsuario?: string;
}
