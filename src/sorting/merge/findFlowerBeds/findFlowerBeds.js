function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));

  return merge(arr.length, left, right);
}

function merge(length, left, right) {
  const result = new Array(length).fill(0);
  let l = 0,
    r = 0,
    k = 0;

  while (l < left.length && r < right.length) {
    if (
      left[l][0] < right[r][0] ||
      (left[l][0] === right[r][0] && left[l][1] <= right[r][1])
    ) {
      result[k] = left[l];
      l++;
      k++;
    } else {
      result[k] = right[r];
      r++;
      k++;
    }
  }

  while (l < left.length) {
    result[k] = left[l]; // перенеси оставшиеся элементы left в result
    l++;
    k++;
  }
  while (r < right.length) {
    result[k] = right[r]; // перенеси оставшиеся элементы right в result
    r++;
    k++;
  }

  return result;
}

export function findFlowerBeds(segments) {
  if (segments.length === 0) {
    return [];
  }

  // Step 1: Sort segments using merge sort
  const sortedSegments = mergeSort(segments);

  // Step 2: Merge overlapping segments
  const mergedSegments = [];
  let [currentStart, currentEnd] = sortedSegments[0];

  for (let i = 1; i < sortedSegments.length; i++) {
    const [start, end] = sortedSegments[i];
    if (start <= currentEnd) {
      // Check for overlap or adjacency
      currentEnd = Math.max(currentEnd, end); // Extend the current segment
    } else {
      mergedSegments.push([currentStart, currentEnd]);
      [currentStart, currentEnd] = [start, end];
    }
  }

  // Don't forget to add the last segment
  mergedSegments.push([currentStart, currentEnd]);

  return mergedSegments;
}
