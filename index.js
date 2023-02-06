const getCamelCase = (str) => {
  if (!str.includes('_'))
    return str;
  const words = str.split('_');
  const firstWord = words[0];
  const otherWords = words.slice(1).map(word => word[0].toUpperCase() + word.slice(1)).join('');
  return firstWord + otherWords;
}

const getCamelCaseObject = (obj) => {
  for (const k in obj) {
    if (!k.includes('_'))
      continue;
    const newK = getCamelCase(k);
    Object.defineProperty(obj, newK, Object.getOwnPropertyDescriptor(obj, k));
    delete obj[k];
  }
  return obj;
}

const FormatObjectKeys = {
  getCamelCaseObject
};

export default FormatObjectKeys;
