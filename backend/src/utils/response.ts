interface Response {
  code: number,
  message: string
}

export default (code:number, message:string): Response => {return { code: code, message: message}}