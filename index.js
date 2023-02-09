const formatTypes = {
  UNDERSCORE: 'underscore',
  CAMELCASE: 'camelCase'
}

const underscore2CamelCase = (str) => {
  if (!str.includes('_'))
    return str;
  const words = str.split('_');
  const firstWord = words[0];
  const otherWords = words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
  return firstWord + otherWords;
}

const camelCase2underscore = (str) => {
  let l = 0, r = 0;
  const words = [];
  while (r <= str.length) {
    if (r == str.length || str[r] === str[r].toUpperCase()) {
      let word = str.slice(l, r).toLowerCase();
      words.push(word);
      l = r;
    }
    ++r;
  }
  return words.join('_');
}

const formatObject = (obj, formatType) => {
  let convertFunc;
  if (formatType === formatTypes.CAMELCASE)
    convertFunc = underscore2CamelCase;
  else if (formatType === formatTypes.UNDERSCORE)
    convertFunc = camelCase2underscore;

  for (const k in obj) {
    const newK = convertFunc(k);
    Object.defineProperty(obj, newK, Object.getOwnPropertyDescriptor(obj, k));
    if (k !== newK)
      delete obj[k];
  }
  return obj;
}

const GFormat = {
  underscore2CamelCase,
  camelCase2underscore,
  formatObject,
  formatTypes,
};

module.exports = GFormat;
