import { Money, Currencies } from 'ts-money'

export class StatsModel {
  LogicMachinePlays: number;
  DicePlays: number;
  MoneyDeposited: Money;
  MoneyWithdrawn: Money;
  Balance: Money;

  constructor() {
    this.LogicMachinePlays = 0;
    this.DicePlays = 0;
    this.MoneyDeposited = Money.fromDecimal(0, Currencies.PLN)
    this.MoneyWithdrawn = Money.fromDecimal(0, Currencies.PLN)
    this.Balance = Money.fromDecimal(0, Currencies.PLN)
  }

}
