export function log(...args: string[]){
    let msg = '[Hexcellent]: '
    args.forEach(str => {
        msg += str
    })
    console.log(msg)
}