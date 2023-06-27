
import { Block } from './block';
import { Blockchain } from './blockchain';

const blockchain = new Blockchain(4);

// create a new block
const block1 = new Block(1, Date.now(), { sender: 'Alice', receiver: 'Bob', amount: 50 }, '0', '');
const block2 = new Block(2, Date.now(), { sender: 'Bob', receiver: 'Alice', amount: 25 }, '0', '');

blockchain.addBlock(block1);
blockchain.addBlock(block2);
