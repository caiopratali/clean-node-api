import { AddAccountRepository } from '../../../../data/protocols/add-account-repository';
import { AccountModel } from '../../../../domain/models/account';
import { AddAccountModel } from '../../../../domain/usecases/add-account';
import { MongoHelper } from '../helpers/mongo-helper';

class AccountMongoRepository implements AddAccountRepository {
  async add(accountData: AddAccountModel): Promise<AccountModel> {
    const accoutnCollection = MongoHelper.getCollection('accounts');

    const { insertedId: id } = await accoutnCollection.insertOne(accountData);

    const { _id, ...accountWithoutId } = await accoutnCollection.findOne({
      _id: id,
    });

    const account = {
      ...accountWithoutId,
      id: _id.toHexString(),
    } as AccountModel;

    return account;
  }
}

export { AccountMongoRepository };
