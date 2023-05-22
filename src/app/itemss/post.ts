export class Post {
    public id!: number
    public title!: string
    public adiccion!: string
    public Carrera!: string

    set(data: any){
        this.id = data.id
        this.title = data.title
        this.adiccion! = data.adiccion
        this.Carrera = data.Carrera
      }
}

