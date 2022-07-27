interface Error {
  code: number,
  message: string
}

export default (code:number, message:string): Error => {return { code: code, message: message}}