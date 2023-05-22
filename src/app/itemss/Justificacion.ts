export class Justificacion {
    public id!: number
    public justificado!: string
    public post!: string

    set(data: any){
        this.id = data.id
        this.justificado = data.justificado
        this.post = data.post
      }
}

