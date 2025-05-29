export class DynamicArray<T> {
  #array: Array<T>;
  #capacity: number;
  #size: number;

  public constructor(initialCapacity = 1) {
    this.#array = new Array<T>(initialCapacity);
    this.#size = 0;
    this.#capacity = initialCapacity;
  }

  public doubleSize() {
    const oldArray = this.#array;

    this.#array = new Array<T>(this.#capacity * 2);
    this.#capacity *= 2;

    for (let i = 0; i < oldArray.length; i++) {
      this.#array[i] = oldArray[i];
    }
  }

  public insert(value: T) {
    if (this.#size >= this.#capacity) {
      this.doubleSize();
    }

    this.#array[this.#size] = value;
    this.#size += 1;
  }
}
