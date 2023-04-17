import passport from 'passport';
import { local } from './strategy/local';
import { User } from '../database/entity/User';
import { AppDataSource } from '../database/data-source';

export enum AuthenticationType {
  local,
}

passport.serializeUser((user: User, done) => {
  console.log('serialize', user);
  done(null, user);
});

passport.deserializeUser(async (username: string, done) => {
  const userRepository = AppDataSource.getRepository(User);
  console.log('deserialize', username);
  try {
    const user = await userRepository.findOneBy({ username });
    console.log('get user', username, user);
    if (user) {
      done(null, user);
    } else {
      throw new Error('User does not exist');
    }
  } catch (err) {
    done(err, null);
  }
});

passport.use(local);

export default passport;
