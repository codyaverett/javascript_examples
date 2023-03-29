
export class Block {
    public index: number;
    public timestamp: number;
    public data: any;
    public previousHash: string;
    public hash: string;

    constructor(index: number, timestamp: number, data: any, previousHash: string, hash: string) {
        this.index = index;
        this.timestamp = timestamp;
        this.data = data;
        this.previousHash = previousHash;
        this.hash = hash;
    }
}
