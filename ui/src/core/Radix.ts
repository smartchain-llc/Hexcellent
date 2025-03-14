
export type ByteRadix = 'hex'
    | 'dec'
    | 'oct'
    | 'bin'
export type BytePrefix = '0x'
    | '0d'
    | '0o'
    | '0b'

export type BytePrefixes = {[k in ByteRadix]: BytePrefix}
export const BytePrefixes: BytePrefixes = {
    hex: "0x",
    dec: "0d",
    oct: "0o",
    bin: "0b"
}