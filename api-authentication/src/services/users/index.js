import _ from 'lodash';

import User from '../../db/model/User';

class UserService {
  static async findByEmail(email) {
    return User.query().findOne({ email: _.toLower(email) });
  }

  static async getAccountInfoById(id) {
    return User.query().findById(id);
  }
}

export default UserService;
