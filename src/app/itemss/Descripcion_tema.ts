export class Descripcion_tema {
    public id!: number
    public tema!: string
    public post!: string

    set(data: any){
        this.id = data.id
        this.tema = data.tema
        this.post = data.post
      }
}

