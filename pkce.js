import crypto from 'node:crypto';

export function generateCodeVerifier() {
    const length = Math.floor(Math.random() * (128 - 43 + 1)) + 43;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    let codeVerifier = '';
    for (let i = 0; i < length; i++) {
        codeVerifier += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return codeVerifier;
}

export function generateCodeChallenge(codeVerifier) {
    if (!codeVerifier) {
        throw new Error('codeVerifier is required');
    }
    const codeVerifierBytes = Buffer.from(codeVerifier, 'utf8');
    const hashedCodeVerifier = crypto.createHash('sha256').update(codeVerifierBytes).digest();
    return hashedCodeVerifier.toString('base64').replace(/=+$/, '');
}

export function generateState() {
    const length = Math.floor(Math.random() * (50 - 32 + 1)) + 32;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-';
    let state = '';
    for (let i = 0; i < length; i++) {
        state += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return state;
}

