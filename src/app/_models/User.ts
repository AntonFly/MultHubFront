export class User {
  login: string;
  password: string;
  name: string;
  surName: string;
  eMail: string;

  constructor(login: string, password: string){
    this.login = login;
    this.password = password;
  }
}
