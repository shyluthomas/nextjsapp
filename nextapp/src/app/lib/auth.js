import {hash} from 'bcryptjs';

export async function hashPassword(password) {
    const hashpw = hash(password,12);
    return hashpw;
}