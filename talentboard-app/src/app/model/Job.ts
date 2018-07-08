export class Job {
  public id: string;
  public title: string;
  public description: string;
  public location: string;
  public salary: string;
  public applicantIds: Array<string>;
  public isOpen: boolean;
}
