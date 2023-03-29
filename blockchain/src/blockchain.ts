import { Block } from './block';
import crypto from 'crypto';

export class Blockchain {
    private chain: Block[];
    private difficulty: number;

    constructor(difficulty: number) {
        this.chain = [this.createGenesisBlock()];
        this.difficulty = difficulty;
    }

    private createGenesisBlock(): Block {
        return new Block(0, Date.now(), 'Genesis Block', '0', '');
    }

    public getLatestBlock(): Block {
        return this.chain[this.chain.length - 1];
    }

    public addBlock(newBlock: Block): void {
        newBlock.previousHash = this.getLatestBlock().hash;
        newBlock.hash = this.calculateHash(newBlock);
        this.chain.push(newBlock);
    }

    private calculateHash(block: Block): string {
        const data = block.index + block.timestamp + JSON.stringify(block.data) + block.previousHash;
        let hash = '';
        let nonce = 0;
        while (!this.isValidHash(hash)) {
            nonce++;
            hash = this.hashData(data + nonce);
        }
        return hash;
    }

    private hashData(data: string): string {
        // Use your preferred hashing algorithm
        return crypto.createHash('sha256').update(data).digest('hex');
    }

    private isValidHash(hash: string): boolean {
        return hash.substring(0, this.difficulty) === Array(this.difficulty + 1).join('0');
    }

    public isValidChain(): boolean {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];

            if (currentBlock.hash !== this.calculateHash(currentBlock)) {
                return false;
            }

            if (currentBlock.previousHash !== previousBlock.hash) {
                return false;
            }
        }

        return true;
    }
}
