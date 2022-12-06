import jwt from 'jsonwebtoken';

export class JwtUtils {
  private static readonly secret = process.env.JWT_SECRET;

  static async decode(token: string): Promise<any> {
    return jwt.verify(token, String(JwtUtils.secret));
  }

  static sign(payload: string | object | Buffer): string {
    return jwt.sign(payload, String(JwtUtils.secret));
  }
}