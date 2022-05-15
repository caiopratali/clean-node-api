import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accoutnCollection = MongoHelper.getCollection('accounts');

    const { insertedId: id } = await accoutnCollection.insertOne(accountData);

    const account = await accoutnCollection.findOne({
      _id: id,
    });

    return MongoHelper.map(account);
  }
}

export { AccountMongoRepository };
