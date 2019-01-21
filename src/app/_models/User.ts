export class User {
  login: string;
  password: string;
  name: string;
  surName: string;
  email: string;
  mobile: string;
  sendOnInvites: boolean;
  sendOnPost: boolean;

  constructor(login: string, password: string){
    this.login = login;
    this.password = password;
  }
}
