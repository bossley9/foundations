export function InsertionSort<T>(
  arr: T[],
  comparator: (a: T, b: T) => number,
) {
  if (arr.length == 0) return;

  for (let n = 1; n < arr.length; n++) {
    let ai: number = n;
    let bi: number = n - 1;

    while (bi >= 0 && comparator(arr[ai], arr[bi]) < 0) {
      Swap<T>(arr, ai, bi);
      ai--;
      bi--;
    }
  }
}

// swaps arr[a] and arr[b] for any generic Array<T>
function Swap<T>(arr: T[], a: number, b: number) {
  const temp: T = arr[b];
  arr[b] = arr[a];
  arr[a] = temp;
}
