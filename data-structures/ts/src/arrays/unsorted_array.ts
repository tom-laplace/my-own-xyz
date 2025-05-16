export class UnsortedArray<T> {
  private _array: Array<T>;
  private _maxSize: number;
  private _size: number;

  public constructor(maxSize: number) {
    this._array = new Array<T>(maxSize);
    this._maxSize = maxSize;
    this._size = 0;
  }

  public get size(): number {
    return this._size;
  }

  public get maxSize(): number {
    return this._maxSize;
  }

  public get array(): Array<T> {
    return this._array;
  }

  public insert(newEntry: T) {
    if (this.size >= this.array.length) {
      throw new Error("Array is already full.");
    }

    this._array[this._size] = newEntry;
    this._size += 1;
  }

  public remove(index: number) {
    if (this.size === 0) {
      throw new Error("Remove from an empty array.");
    }

    if (index < 0 || index > this.maxSize) {
      throw new Error(`Index ${index} is invalid.`);
    }

    this._array[index] = this._array[this.size - 1];
    this._size -= 1;
  }

  public find(target: T): number | null {
    for (let index = 0; index < this.size; index++) {
      if (this._array[index] === target) {
        return index;
      }
    }

    return null;
  }

  public traverse(callback: Function) {
    for (let index = 0; index < this.size; index++) {
      callback(this.array[index]);
    }
  }

  public maxInArray(): [number, T] {
    if (this.size === 0) {
      throw new Error("Max of an empty array.");
    }

    let maxIndex = 0;

    for (let index = 0; index < this.size; index++) {
      if (this._array[index] > this._array[maxIndex]) {
        maxIndex = index;
      }
    }

    return [maxIndex, this._array[maxIndex]];
  }

  public minInArray(): [number, T] {
    if (this.size === 0) {
      throw new Error("Min of an empty array.");
    }

    let minIndex = 0;

    for (let index = 0; index < this.size; index++) {
      if (this._array[index] < this._array[minIndex]) {
        minIndex = index;
      }
    }

    return [minIndex, this._array[minIndex]];
  }

  public minMaxInArray(): { min: [number, T]; max: [number, T] } {
    if (this.size === 0) {
      throw new Error("Min Max of an empty array.");
    }

    let minIndex = 0;
    let maxIndex = 0;

    for (let index = 0; index < this.size; index++) {
      if (this._array[index] < this._array[minIndex]) {
        minIndex = index;
      }

      if (this._array[index] > this._array[maxIndex]) {
        maxIndex = index;
      }
    }

    return {
      min: [minIndex, this._array[minIndex]],
      max: [maxIndex, this._array[maxIndex]],
    };
  }
}
