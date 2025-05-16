import { SortedArray } from "../../src/arrays/sorted_array";

describe("Sorted Array", () => {
  describe("insert", () => {
    test("it should insert the element sorted", () => {
      let arr = new SortedArray<number>(5);
      let testArr = new Array<number>(5);
      testArr = [1, 2, 3, 5, 8];

      arr.insert(3);
      arr.insert(5);
      arr.insert(2);
      arr.insert(8);
      arr.insert(1);

      expect(arr.array).toStrictEqual(testArr);
    });

    test("it should throw an error if the array is already full", () => {
      let arr = new SortedArray(1);
      arr.insert(1);

      expect(() => {
        arr.insert(2);
      }).toThrow("Array is already full.");
    });
  });

  describe("binary search", () => {
    test("it should return the index of the targeted element", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      const index = arr.binarySearch(2);

      expect(index).toBe(1);
    });

    test("it should return null if the target element doesn't exist", () => {
      let arr = new SortedArray<number>(2);
      arr.insert(1);
      arr.insert(2);

      const index = arr.binarySearch(3);

      expect(index).toBeNull();
    });
  });

  describe("linear search", () => {
    test("it should return the index of the targeted element", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      const index = arr.linearSearch(2);

      expect(index).toBe(1);
    });

    test("it should return null if the target element doesn't exist", () => {
      let arr = new SortedArray<number>(2);
      arr.insert(1);
      arr.insert(2);

      const index = arr.linearSearch(3);

      expect(index).toBeNull();
    });
  });

  describe("delete", () => {
    test("it should remove the target and still keeps the array sorted", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      arr.delete(2);

      expect(arr.size).toBe(2);
      expect(arr.binarySearch(2)).toBeNull();
      expect(arr.binarySearch(1)).toBe(0);
      expect(arr.binarySearch(3)).toBe(1);
    });

    test("it should throw an error if the targeted element is not in the array", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      expect(() => {
        arr.delete(4);
      }).toThrow("Unable to delete element 4: the entry is not in the array");
    });
  });

  describe("deleteAt", () => {
    test("it should remove the element at the index given", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      arr.deleteAt(1);

      expect(arr.size).toBe(2);
      expect(arr.binarySearch(2)).toBeNull();
      expect(arr.binarySearch(1)).toBe(0);
      expect(arr.binarySearch(3)).toBe(1);
    });

    test("it should throw an error if the index is out of bounds", () => {
      let arr = new SortedArray<number>(3);
      arr.insert(1);
      arr.insert(2);
      arr.insert(3);

      expect(() => {
        arr.deleteAt(4);
      }).toThrow("Unable to delete element at index 4: index out of bounds");
    });
  });

  describe("traverse", () => {
    test("it should execute the callback on all the element of the array", () => {
      const logSpy = jest.spyOn(console, "log");

      let array = new SortedArray<number>(2);
      array.insert(1);
      array.insert(2);

      array.traverse(console.log);

      expect(logSpy).toHaveBeenCalledWith(1);
      expect(logSpy).toHaveBeenCalledWith(2);
    });
  });
});
