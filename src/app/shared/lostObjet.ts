export interface LostObject {

        _id?:string
        description:string
        date:Date | string
        zone:string
        latitude?:number
        longitude?:number
        imgList:any[]
        hour:number
        type: "lost" | "found"
}
