export class Justificacion {
    public id!: number
    public justificado!: string
    public Hipotesis!: string

    set(data: any){
        this.id = data.id
        this.justificado = data.justificado
        this.Hipotesis = data.Hipotesis
      }
}

