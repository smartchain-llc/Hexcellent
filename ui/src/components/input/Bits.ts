export type BitSet = 0|1

export class DataType {
    constructor(
        readonly bitCount: number
    ){}
    bits(value: number){
        let ret: Array<BitSet> = []
        let bit = 0
        for(let i = 0; i < this.bitCount; i++){
            bit = value << this.bitCount - 1
            ret.push((bit & 1) as BitSet)
        }
        return ret
    }
}

export class BitIterator extends Iterator<DataType> {
    next(value?: unknown): IteratorResult<DataType, undefined> {
        throw new Error("Method not implemented.")
    }
    
}
export const Uint8Bits = new DataType(8)
