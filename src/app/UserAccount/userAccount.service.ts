import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {UserModel} from "../shared/user.model";

@Injectable({
  providedIn: "root",
})

// Z założenia serwis ten ma obsługiwać zapytania API do bazy danych z kontami użytkowników
export class userAccountService{

  users: any = [];

  constructor(private router: Router) {
    let users = localStorage.getItem("Users")
    if(users != null){
      this.users = JSON.parse(users)
    }
  }

  createUser(username: string, suit: string, birthday: string){
    let users: any = JSON.parse(localStorage.getItem("Users"))
    if(users != null){
      if(users.find( user => user.username == username)){
        console.log("User exists")
        return
      }
    }
    let user = new UserModel(username, suit, birthday)
    this.users.push([user, this.users.length])
    localStorage.setItem('Users', JSON.stringify(this.users))
    this.router.navigate(['UserAccount'])
  }

  getUser(username){
    return this.users.find( user => user.username == username)
  }

  public loginUser(username, password){
    let users = JSON.parse(localStorage.getItem("Users"))
    let user = users.find(user => user[0].username == username && user[0].password == password)
    if(user == null){
    } else {
      localStorage.setItem('LoggedUser', JSON.stringify(user))
    }
  }
}
