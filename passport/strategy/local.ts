import { Strategy } from 'passport-local';
import { AppDataSource } from '../../database/data-source';
import { User } from '../../database/entity/User';

export const local = new Strategy(async (username, password, done) => {
  const userRepository = AppDataSource.getRepository(User);

  try {
    const user = await userRepository.findOneBy({ username });
    if (!user) {
      return done(null, false, { message: 'Unknown User' });
    }
    if (user.password === password) {
      return done(null, user);
    } else {
      return done(null, false, { message: 'Invalid password' });
    }
  } catch (error) {
    return done(error, null);
  }
});
