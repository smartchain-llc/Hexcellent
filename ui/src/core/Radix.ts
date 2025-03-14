
export type ByteRadixId = 'hex'
    | 'dec'
    | 'oct'
    | 'bin'
export type BytePrefix = '0x'
    | '0d'
    | '0o'
    | '0b'
export type ByteRadix = 16|10|8|2

export type ByteRadixes = {[k in ByteRadixId]: ByteRadix}
export const ByteRadixes: ByteRadixes = {
    hex: 16,
    dec: 10,
    oct: 8,
    bin: 2
} 
export class Radix {
    constructor(
    readonly id: ByteRadixId,
    readonly prefix: BytePrefix,
    readonly radix: ByteRadix){}
    prefixedToStr (value: number): string{ return this.prefix+value.toString(this.radix)}
    toStr (value: number): string{ return value.toString(this.radix)}
}

export const Hexidecimal: Radix = new Radix('hex', "0x",16)
export const Decimal: Radix = new Radix('dec', "0d",10)
export const Octal: Radix = new Radix('oct', "0o",8)
export const Binary: Radix = new Radix('bin', "0b",2)

export type BytePrefixes = {[k in ByteRadixId]: BytePrefix}
export const BytePrefixes: BytePrefixes = {
    hex: "0x",
    dec: "0d",
    oct: "0o",
    bin: "0b"
}

export class InputValue {

}