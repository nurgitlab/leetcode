const floodFill = function (image, sr, sc, color) {
  image.forEach((el, i) => {
    image[i] = ['*', ...el, '*']
  })
  let s = []
  for (let i = 0; i < image[0].length; i++) {
    s.push('*')
  }
  image = [s, ...image, s]

  let defColor = image[sr + 1][sc + 1]

  function rec(tx, ty) {
    image[tx][ty] = '#'
    if (image[tx + 1][ty] === defColor) {
      rec(tx + 1, ty)
    }
    if (image[tx - 1][ty] === defColor) {
      rec(tx - 1, ty)
    }
    if (image[tx][ty + 1] === defColor) {
      rec(tx, ty + 1)
    }
    if (image[tx][ty - 1] === defColor) {
      rec(tx, ty - 1)
    }
  }


  rec(sr + 1, sc + 1)
  image.splice(0, 1)
  image.splice(image.length - 1, 1)

  for (let i = 0; i < image.length; i++) {
    image[i].splice(0, 1)
    image[i].splice(image[i].length - 1, 1)
  }

  for (let i = 0; i < image.length; i++) {
    for (let j = 0; j < image[i].length; j++) {
      if (image[i][j] === '#') {
        image[i][j] = color
      }
    }
  }

  return image
};

console.log(floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0))