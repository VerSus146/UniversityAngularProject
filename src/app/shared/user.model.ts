import { Money, Currencies } from 'ts-money'
import { StatsModel } from "./stats.model";

export class UserModel {
  static id: number = 0;
  user_id: number;
  username: string = '';
  birthday: string;
  money: Money;
  stats: StatsModel;
  password: string;

  constructor(username: string, password: string, birthday: string) {
    this.user_id = UserModel.id++
    this.username = username
    this.money = new Money(0, Currencies.PLN)
    this.birthday = birthday
    this.password = password
    this.stats = new StatsModel()
  }

  getUsername(){
    return this.username;
  }

  getUser_id(){
    return this.user_id;
  }

  getMoney(){
    return this.money;
  }

  getDate(){
    return this.birthday
  }

  setMoney(money: Money){
    this.money = money
  }
}
