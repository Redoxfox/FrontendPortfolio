export interface entityApuestasI{
    id: number,
    nro_fecha:number,
    id_liga:number,
    equipo_1:number,
    gol_eq1: number,
    equipo_2: number,
    gol_eq2: number,
    local_eq1:number,
    local_eq2:number,
    temporada:string,
    fecha:string,
    estado:string
}

export interface entityNombreEquipoGetI{
    id: number,
    id_liga: number,
    nombre: string,
    estado:string
}

export interface entityParamsMatchesI{
    id: number,
    urlDate: string
}

export interface requestI{
    request: boolean,
    msg: string
}

export interface entityLinksDatesI{
    idLiga: number,
    link: string
}

export interface entityLeaguesI{
    id: number,
    nombre:string,
    pais:string,
    continente:string,
    num_dates:number
}
