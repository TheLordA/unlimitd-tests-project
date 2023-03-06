import Model from '..';

class User extends Model {
  static get tableName() {
    return 'users';
  }

  $beforeInsert() {
    this.createdAt = new Date().toISOString();
  }

  $beforeUpdate() {
    this.updatedAt = new Date().toISOString();
  }
}

export default User;
