// wrapper function for Quicksort1
export function Quicksort<T>(
  arr: T[],
  comparator: (a: T, b: T) => number,
): void {
  if (arr.length == 0) return;
  Quicksort1<T>(arr, 0, arr.length - 1, comparator);
}

// quicksorts the array by partitioning elements
// around a pivot and recursively partitioning
// on its partitions
function Quicksort1<T>(
  arr: T[],
  low: number,
  high: number,
  comparator: (a: T, b: T) => number,
): void {
  if (low < high) {
    const pi: number = Partition<T>(arr, low, high, comparator);

    Quicksort1<T>(arr, low, pi - 1, comparator);
    Quicksort1<T>(arr, pi + 1, high, comparator);
  }
}

// partitions array elements around pivot,
// returning the index of the pivot
function Partition<T>(
  arr: T[],
  low: number,
  high: number,
  comparator: (a: T, b: T) => number,
): number {
  // choose last index as pivot
  const pivot: T = arr[high];
  let i: number = low - 1;

  for (let j = low; j < high; j++) {
    const comparison: number = comparator(arr[j], pivot);

    if (comparison < 0) {
      i++;
      Swap<T>(arr, i, j);
    }
  }

  Swap<T>(arr, i + 1, high);
  return i + 1;
}

// swaps arr[a] and arr[b] for any generic Array<T>
function Swap<T>(arr: T[], a: number, b: number) {
  const temp: T = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}
