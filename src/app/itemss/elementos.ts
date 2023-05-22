export class elementos {
    public id!: number
    public Descripcion_tema!: string
    public Hipotesis!: string
    public Justificacion!: string

    set(dat: any){
            this.id = dat.id
            this.Descripcion_tema = dat.Descripcion_tema
            this.Hipotesis = dat.Hipotesis
            this.Justificacion = dat.Justificacion
    }
}
