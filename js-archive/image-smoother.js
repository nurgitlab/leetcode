var imageSmoother = function (img) {
  let matrix = []
  img.forEach((_, i) => {
    matrix.push([])
  })
  for (let i = 0; i < img.length; i++) {
    let line = img[i]
    for (let j = 0; j < line.length; j++) {
      matrix[i][j] = sum(img, i, j)
    }
  }

  return matrix
};

function sum(img, i, j) {
  let el1 = undefined, el2 = undefined, el3 = undefined
  if (img[i - 1] !== undefined) {
    if (img[i - 1][j - 1] !== undefined) {
      el1 = img[i - 1][j - 1]
    }
  }

  if (img[i - 1] !== undefined) {
    if (img[i - 1][j] !== undefined) {
      el2 = img[i - 1][j]
    }
  }

  if (img[i - 1] !== undefined) {
    if (img[i - 1][j + 1] !== undefined) {
      el3 = img[i - 1][j + 1]
    }
  }

  let el4 = undefined, el5 = undefined
  if (img[i][j - 1] !== undefined) {
    el4 = img[i][j - 1]
  }

  if (img[i][j + 1] !== undefined) {
    el5 = img[i][j + 1]
  }


  let el6 = undefined, el7 = undefined, el8 = undefined
  if (img[i + 1] !== undefined) {
    if (img[i + 1][j - 1] !== undefined) {
      el6 = img[i + 1][j - 1]
    }
  }

  if (img[i + 1] !== undefined) {
    if (img[i + 1][j] !== undefined) {
      el7 = img[i + 1][j]
    }
  }

  if (img[i + 1] !== undefined) {
    if (img[i + 1][j + 1] !== undefined) {
      el8 = img[i + 1][j + 1]
    }
  }

  let el = [el1, el2, el3, el4, el5, el6, el7, el8]
  let sum = img[i][j]
  let s = 1
  el.forEach(element => {
    if (element !== undefined) {
      sum += element
      s += 1
    }
  })

  return Math.floor(sum / s)
}

console.log(imageSmoother([[6, 9, 7]]))