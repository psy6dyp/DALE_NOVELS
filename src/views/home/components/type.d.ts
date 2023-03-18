export interface IBook {
  image: string
  name: string
}

export interface ILink {
  link: string
  name: string
}

export interface INovelData {
  titleImg: string
  books: IBook[]
  links: ILink[]
}
