export interface Possesions {

        ownerId:string
        lost: Boolean
        name: String
        code: String
        image:string | Blob
        marque?:string
        model?:string
        looses?:Loose []
}
interface Loose {
  lostDate:number
  lostTimeRange?:number
  foundDate:number
  foundBy_UserId?:string
  lostAreaInformation?:string []

}
