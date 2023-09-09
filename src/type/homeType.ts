export type IMG_TYPE = {
    description:string,
    imgsrc:string
}
export type PROJECT_INFO = {
    title: string, 
    description: string,
    imgUrl: string,
}
export type NOTICE_INFO = {
        name: string,
        faculty:string,
        subject:string,
        department:string,
        city:string,
        company:string,
    // notices:() => void

}
export type GROUP_INFO = {
    departmentName:string,
    introduction:string
}
export type HEADER_INFO = {
    items:string,
    label:string,
    key:string,
    icon?:React.ReactNode,
    targetId:string,
    childern?:GROUP_INFO[]
}