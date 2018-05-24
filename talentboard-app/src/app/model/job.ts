export class Job {

  public id: string;
  public title: string;
  public columns: Array<string>;
  public applicantIds: Array<string>;

  constructor(title: string, columns: Array<string>, applicantIds: Array<string>) {
    this.title = title;
    this.columns = columns;
    this.applicantIds = applicantIds;
  }
}
