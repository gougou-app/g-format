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
  const words = [];
  for (let l = 0, r = 0; r <= str.length; ++r) {
    if (str[r] === '_')
      continue;
    if (r == str.length || str[r] === str[r].toUpperCase()) {
      let word = str.slice(l, r).toLowerCase();
      words.push(word);
      l = r;
    }
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
    if (k === newK)
      continue;
    Object.defineProperty(obj, newK, Object.getOwnPropertyDescriptor(obj, k));
    delete obj[k];
  }
  return obj;
}

const getCamelCase = (obj) => {
  return formatObject(obj, formatTypes.CAMELCASE);
}

const getUndersocre = (obj) => {
  return formatObject(obj, formatTypes.UNDERSCORE);
}

const GFormat = {
  underscore2CamelCase,
  camelCase2underscore,
  getCamelCase,
  getUndersocre,
  formatObject,
  formatTypes,
};

module.exports = GFormat;
