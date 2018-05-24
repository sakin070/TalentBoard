export class Applicant {

  public id: string;
  public fullName: string;
  public email: string;
  public state: string;

  constructor(fullName: string, email: string, state: string) {
    this.fullName = fullName;
    this.email = email;
    this.state = state;
  }
}
