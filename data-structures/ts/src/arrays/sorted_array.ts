export class SortedArray<T> {
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
    if (this.size >= this.maxSize) {
      throw new Error("Array is already full.");
    }

    this._array[this.size] = newEntry;

    for (let index = this.size - 1; index >= 0; index--) {
      let newEntry = this.array[index + 1];
      let elementToCompare = this.array[index];

      if (elementToCompare > newEntry) {
        this._array[index] = newEntry;
        this._array[index + 1] = elementToCompare;
      } else {
        break;
      }
    }

    this._size += 1;
  }

  public linearSearch(target: T): number | null {
    for (let index = 0; index < this.size; index++) {
      if (target === this.array[index]) {
        return index;
      } else if (this.array[index] > target) {
        return null;
      }
    }

    return null;
  }

  public binarySearch(target: T): number | null {
    let l = 0;
    let r = this.size - 1;

    while (l <= r) {
      let midIndex = Math.floor((l + r) / 2);
      let midVal = this.array[midIndex];

      if (midVal === target) {
        return midIndex;
      }

      if (midVal < target) {
        l = midIndex + 1;
      }

      if (midVal > target) {
        r = midIndex - 1;
      }
    }

    return null;
  }

  public delete(target: T) {
    const index = this.binarySearch(target);

    if (index === null) {
      throw new Error(
        `Unable to delete element ${target}: the entry is not in the array`
      );
    }

    for (let i = index; i < this.size; i++) {
      this._array[i] = this.array[i + 1];
    }

    this._size -= 1;
  }

  public deleteAt(index: number) {
    if (index > this.size) {
      throw new Error(
        `Unable to delete element at index ${index}: index out of bounds`
      );
    }

    for (let i = index; i < this.size; i++) {
      this._array[i] = this.array[i + 1];
    }

    this._size -= 1;
  }

  public traverse(callback: Function) {
    for (let index = 0; index < this.size; index++) {
      callback(this.array[index]);
    }
  }
}
