
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
    id?: number;
    barrioMedellin?: Barrio;
    guia?: Guia;
    descripcion?: string;
    nombre: string;
    imagen: string;
    imagenData?: string;
    precioPersona?: number;
    validado?: boolean;
    temperatura?: string;
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

export interface SitioInteres {
    id: number;
    nombreSitio: string;
    barrioMedellin: Barrio;
    descripcion: string;
    imagen: string;
    imagenData?: string;
    temperatura?: string;
    horario?: string;
}

export interface Imagen {
    id: number;
    imagen: string;
    imagenData?: string;
}

export interface ImagenData {
    id: number;
    isSitio: Boolean;
}

export interface ReservarTour {
    id: number;
    tour: Tour;
    fecha: string;
    numeroPersonas: number;
    numeroContacto: string;
    precioEstimado: string;
}

export interface ChangePassword {
    id: number;
    newPassword: string;
    oldPassword: string;
}

export interface ImagenSave {
    tour: Tour;
    nameImages: string[];
}