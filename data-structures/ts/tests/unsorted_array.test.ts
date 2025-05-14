import { UnsortedArray } from "../src/structures/unsorted_array";

describe("Unsorted Array", () => {
  describe("insert element", () => {
    test("it should insert an element at the right position", () => {
      let unsortedArray = new UnsortedArray(1);
      unsortedArray.insert(1);

      expect(unsortedArray.size).toBe(1);
      expect(unsortedArray.array).toStrictEqual(new Array(1).fill(1));
    });

    test("it should throw an error if the array is already full", () => {
      let unsortedArray = new UnsortedArray(1);
      unsortedArray.insert(1);

      expect(() => {
        unsortedArray.insert(2);
      }).toThrow("Array is already full.");
    });
  });

  describe("remove element", () => {
    test("it should remove an element at the index given", () => {
      let array = new UnsortedArray(3);
      array.insert(1);
      array.insert(2);
      array.insert(3);

      array.remove(1);

      expect(array.size).toBe(2);
    });

    test("it should throw an error if the array is an empty array", () => {
      let array = new UnsortedArray(0);

      expect(() => {
        array.remove(1);
      }).toThrow("Remove from an empty array.");
    });

    test("it should throw an error if the index is out of bounds", () => {
      let array = new UnsortedArray(3);
      array.insert(1);

      expect(() => {
        array.remove(-1);
      }).toThrow(`Index -1 is invalid.`);

      expect(() => {
        array.remove(5);
      }).toThrow("Index 5 is invalid.");
    });
  });

  describe("find element", () => {
    test("it should return the index of the first element that match if it's present in the array", () => {
      let array = new UnsortedArray(2);
      array.insert(4);
      array.insert(8);

      const found = array.find(8);

      expect(found).toBe(1);
    });

    test("it should return null if the element it's not present", () => {
      let array = new UnsortedArray(2);
      array.insert(4);
      array.insert(8);

      const found = array.find(15);

      expect(found).toBeNull();
    });
  });

  describe("traverse", () => {
    test("it should execute the callback on all the element of the array", () => {
      const logSpy = jest.spyOn(console, "log");

      let array = new UnsortedArray(2);
      array.insert(1);
      array.insert(2);

      array.traverse(console.log);

      expect(logSpy).toHaveBeenCalledWith(1);
      expect(logSpy).toHaveBeenCalledWith(2);
    });
  });

  describe("maxInArray", () => {
    test("it should return the index of/and the greatest element of array", () => {
      const array = new UnsortedArray(3);
      array.insert(5);
      array.insert(25);
      array.insert(3);

      const max = array.maxInArray();

      expect(max).toStrictEqual([1, 25]);
    });

    test("it should throw an error if the size of the array is 0", () => {
      const array = new UnsortedArray(0);

      expect(() => {
        array.maxInArray();
      }).toThrow("Max of an empty array.");
    });
  });

  describe("minInArray", () => {
    test("it should return the index of/and the lowest element of array", () => {
      const array = new UnsortedArray(3);
      array.insert(5);
      array.insert(25);
      array.insert(3);

      const min = array.minInArray();

      expect(min).toStrictEqual([2, 3]);
    });

    test("it should throw an error if the size of the array is 0", () => {
      const array = new UnsortedArray(0);

      expect(() => {
        array.minInArray();
      }).toThrow("Min of an empty array.");
    });
  });

  describe("minMaxInArray", () => {
    test("it should return index of/and the lowest and the greatest element of array", () => {
      const array = new UnsortedArray(3);
      array.insert(5);
      array.insert(25);
      array.insert(3);

      const minMax = array.minMaxInArray();

      expect(minMax.min).toStrictEqual([2, 3]);
      expect(minMax.max).toStrictEqual([1, 25]);
    });

    test("it should throw an error if the size of the array is 0", () => {
      const array = new UnsortedArray(0);

      expect(() => {
        array.minMaxInArray();
      }).toThrow("Min Max of an empty array.");
    });
  });
});
