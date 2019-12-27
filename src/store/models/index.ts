import { Models } from '@rematch/core';
import { users } from 'store/models/users';

export interface RootModel extends Models {
  users: typeof users;
}

export default { users };
