
export interface MailResponse {
    respuesta: string,
    errores: Array<string>,
    mail: Mail
}

export interface Mail{
    emisor: string,
	asunto: string,
	nombre:string,
	mensaje: string
}
