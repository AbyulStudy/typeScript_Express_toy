import bcrypt from 'bcrypt';

class Authentication {
  public static passwordHash = (password: string): Promise<string> => {
    return bcrypt.hash(password, 10);
  };
}

export default Authentication;
