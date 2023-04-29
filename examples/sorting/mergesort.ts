// wrapper function for Mergesort1
export function Mergesort<T>(
  arr: T[],
  comparator: (a: T, b: T) => number,
) {
  if (arr.length == 0) return;
  Mergesort1<T>(arr, 0, arr.length - 1, comparator);
}

function Mergesort1<T>(
  arr: T[],
  low: number,
  high: number,
  comparator: (a: T, b: T) => number,
) {
  if (low < high) {
    // divide
    const median: number = Math.floor((low + high) / 2);

    // recursive
    Mergesort1<T>(arr, low, median, comparator);
    Mergesort1<T>(arr, median + 1, high, comparator);

    // merge
    Merge<T>(arr, low, median + 1, high, comparator);
  }
}

// merges two sorted halves of an array together
function Merge<T>(
  arr: T[],
  low: number,
  mid: number,
  high: number,
  comparator: (a: T, b: T) => number,
) {
  const nLeft: number = mid - low;
  const nRight: number = high - mid + 1;

  // temporary arrays
  const left: T[] = [];
  const right: T[] = [];

  for (let i = 0; i < nLeft; i++) {
    left[i] = arr[low + i];
  }

  for (let j = 0; j < nRight; j++) {
    right[j] = arr[mid + j];
  }

  // merge arrays

  let i = 0;
  let j = 0;

  for (let k = low; k <= high; k++) {
    // both halves contain elements
    if (i < nLeft && j < nRight) {
      if (comparator(left[i], right[j]) < 0) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      // left half still contains elements
    } else if (i < nLeft) {
      arr[k] = left[i];
      i++;
      // right half still contains elements
    } else { // j < nRight
      arr[k] = right[j];
      j++;
    }
  }
}
