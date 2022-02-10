function map (arr, callback) {
  if (!Array.isArray(arr) || !arr.length || typeof callback !== 'function') {
    return []
  } else {
    let result = []
    for(let i = 0;i<arr.length; i++) {
      result.push(callback(arr[i], i , arr))
    }
    return result
  }
}

