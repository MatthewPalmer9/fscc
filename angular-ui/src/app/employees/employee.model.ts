export class EmployeeObj {
  public id: number;
  public email: string;
  public userId: string;
  public firstName: string;
  public lastName: string;
  public address: string;
  public city: string;
  public state: string;
  public zip: string;
  public homePhone: string;
  public cellPhone: string;

  constructor(
    id: number,
    email: string,
    userId: string,
    firstName: string,
    lastName: string,
    address: string,
    city: string,
    state: string,
    zip: string,
    homePhone: string,
    cellPhone: string) {
      this.id = id;
      this.email = email;
      this.userId = userId;
      this.firstName = firstName;
      this.lastName = lastName;
      this.address = address;
      this.city = city;
      this.state = state;
      this.zip = zip;
      this.homePhone = homePhone;
      this.cellPhone = cellPhone;
    }
}

