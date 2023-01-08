export interface entityPrestamoI{
    idcreditos: number,
    fechaprestamo: Date,
    banco: string,
    idgasto: number,
    cantretiro: number,
    cuota: number,
    nrocontracto: number,
    fechaproxpago: Date,
    estado:string
}

export interface entityPrestamoPostI{
    fechaprestamo: Date,
    banco: string,
    idgasto: number,
    cantretiro: number,
    cuota: number,
    nrocontracto: number,
    fechaproxpago: Date,
    estado:string
}

export interface entityPrestamoPutI{
    idcreditos: number,
    fechaprestamo: Date,
    banco: string,
    idgasto: number,
    cantretiro: number,
    cuota: number,
    nrocontracto: number,
    fechaproxpago: Date,
    estado:string
}

export interface entityPrestamoGetIdI{
    idcreditos: number,
    fechaprestamo: Date,
    banco: string,
    idgasto: number,
    cantretiro: number,
    cuota: number,
    nrocontracto: number,
    fechaproxpago: Date,
    estado:string
}

export interface entityPrestamoPutI{
    idcreditos: number,
    fechaprestamo: Date,
    banco: string,
    idgasto: number,
    cantretiro: number,
    cuota: number,
    nrocontracto: number,
    fechaproxpago: Date,
    estado:string
}