export default class GNEnum<T> {
  constructor(protected value: T) {}

  public toString() {
    return String(this.value);
  }

  public getValue() {
    return this.value;
  }

  public valueOf() {
    return this.value;
  }

  public isEqual(value: any) {
    return this.value === value;
  }
}
