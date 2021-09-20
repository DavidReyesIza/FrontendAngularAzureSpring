export class employee {
  id?: number;
  name?: string;
  dept?: string;
  salary?: string;


  deserialize(input: any): this {
    Object.assign(this, input);
    return this;
  }
}
