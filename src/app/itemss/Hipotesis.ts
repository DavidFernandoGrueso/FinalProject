import { Descripcion_tema } from "./Descripcion_tema"

export class Hipotesis {
    public id!: number
    public Hipote!: string
    public post!: string

    set(data: any){
        this.id = data.id
        this.Hipote = data.Hipote
        this.post = data.post
      }
}

