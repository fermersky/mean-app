export class Hint {
  constructor(
    public title: string,
    public tags: string[],
    public author: string,
    public user_id: string,
    public slug: string,
    public date: Date
  ) {}
}
