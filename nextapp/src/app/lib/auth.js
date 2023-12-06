import {hash, compare} from 'bcryptjs';

export async function hashPassword(password) {
    const hashpw = hash(password,12);
    return hashpw;
}

export async function verifyPassword(password, hashedPassword) {
    const valid = compare(password,hashedPassword);
    return valid;
}