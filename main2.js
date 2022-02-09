function color_deconstruct(color) {
    if (color === 'orange') {
      return 'red and yellow';
    } else if (color === 'purple') {
      return 'red and blue';
    } else if (color === 'green') {
      return 'blue and yellow'
    }
  }

module.exports = color_deconstruct;