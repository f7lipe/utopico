import * as authRepositories from '../repositories/authRepository.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export async function signin(email: string, password: string) {
    const user = await authRepositories.getUserByEmail(email);
    if (!user) {
        throw {status: 404, message: 'User not found'};
    }
    const isUserPassord = bcrypt.compareSync(password, user.password);
    if (isUserPassord) {
        throw {status: 401, message: 'Invalid password'};
    }
    const token = createToken(user.id);
    return token;
}

function createToken(userId: number) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, {
      expiresIn: '2d',
    });
  }