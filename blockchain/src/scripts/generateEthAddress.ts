import * as sha3 from 'sha3';
import { ec as EC } from 'elliptic';

// Create an instance of the secp256k1 elliptic curve
const secp256k1 = new EC('secp256k1');

// Generate private key
function generatePrivateKey(): string {
    // Generate a random 32-byte private key (256 bits)
    let privateKey = '';
    const characters = '0123456789abcdef';
    for (let i = 0; i < 64; i++) {
        const randomIndex = Math.floor(Math.random() * 16);
        privateKey += characters[randomIndex];
    }
    return privateKey;
}

// Generate public key from private key
function generatePublicKey(privateKey: string): string {
    // Parse the private key as a big integer
    const privateKeyInt = BigInt(`0x${privateKey}`);

    // Generate the public key by performing elliptic curve multiplication
    const publicKeyPoint = secp256k1.g.mul(privateKeyInt);

    // Convert the public key point to uncompressed format
    const publicKey = publicKeyPoint.encode('hex', false).slice(2);

    return publicKey;
}

// Generate Ethereum address from public key
function generateAddress(publicKey: string): string {
    // Hash the public key using Keccak-256
    const publicKeyHash = new sha3.Keccak(256).update(Buffer.from(publicKey, 'hex')).digest('hex');

    // Take the last 20 bytes (40 characters) of the hash as the address
    const address = '0x' + publicKeyHash.slice(-40);

    return address;
}

// Generate an Ethereum wallet
function generateEthereumWallet() {
    const privateKey = generatePrivateKey();
    const publicKey = generatePublicKey(privateKey);
    const address = generateAddress(publicKey);

    return {
        privateKey,
        publicKey,
        address
    };
}

// Usage
const wallet = generateEthereumWallet();
console.log('Private Key:', wallet.privateKey);
console.log('Public Key:', wallet.publicKey);
console.log('Address:', wallet.address);
