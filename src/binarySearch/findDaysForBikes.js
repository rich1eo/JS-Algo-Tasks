export function findDaysForBikes(savings, cost) {
  const firstDayForOneBike = binarySearch(savings, cost);
  const firstDayForTwoBikes = binarySearch(savings, 2 * cost);

  return [firstDayForOneBike, firstDayForTwoBikes];
}

export function findDaysForBikesRecursive(savings, cost) {
  const firstDayForOneBike = recursiveBinarySearch(
    savings,
    cost,
    0,
    savings.length
  );
  const firstDayForTwoBikes = recursiveBinarySearch(
    savings,
    2 * cost,
    0,
    savings.length
  );

  return [firstDayForOneBike, firstDayForTwoBikes];
}

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }

  return arr[left] >= target ? left + 1 : -1;
}

function recursiveBinarySearch(arr, target, left, right) {
  if (left >= right) {
    return arr[left] >= target ? left + 1 : -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] >= target) {
    return recursiveBinarySearch(arr, target, left, mid);
  } else {
    return recursiveBinarySearch(arr, target, mid + 1, right);
  }
}
