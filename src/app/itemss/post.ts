export class Post {
    public id!: number
    public title!: string
    public Carrera!: string

    set(data: any){
        this.id = data.id
        this.title = data.title
        this.Carrera = data.Carrera
      }
}

