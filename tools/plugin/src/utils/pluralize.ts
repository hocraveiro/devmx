/* eslint-disable no-prototype-builtins */
const pluralRules: [RegExp, string][] = [];
const singularRules: [RegExp, string][] = [];
const uncountables: Record<string, boolean> = {};
const irregularPlurals: Record<string, string> = {};
const irregularSingles: Record<string, string> = {};

/**
 * Sanitize a pluralization rule to a usable regular expression.
 */
function sanitizeRule(rule: string | RegExp): RegExp {
  if (typeof rule === 'string') {
    return new RegExp('^' + rule + '$', 'i');
  }
  return rule;
}

/**
 * Pass in a word token to produce a function that can replicate the case on
 * another word.
 */
function restoreCase(word: string, token: string): string {
  if (word === token) return token;
  if (word === word.toLowerCase()) return token.toLowerCase();
  if (word === word.toUpperCase()) return token.toUpperCase();
  if (word[0] === word[0].toUpperCase()) {
    return token.charAt(0).toUpperCase() + token.substr(1).toLowerCase();
  }
  return token.toLowerCase();
}

/**
 * Interpolate a regexp string.
 */
function interpolate(str: string, ...args: string[]): string {
  return str.replace(/\$(\d{1,2})/g, (match, index) => {
    return args[index] || '';
  });
}

/**
 * Replace a word using a rule.
 */
function replace(word: string, rule: [RegExp, string], ...params: string[]): string {
  return word.replace(rule[0], (match) => {
    const result = interpolate(rule[1], ...params);
    return match === '' ? restoreCase(word[word.length - 1], result) : restoreCase(match, result);
  });
}

/**
 * Sanitize a word by passing in the word and sanitization rules.
 */
function sanitizeWord(token: string, word: string, rules: [RegExp, string][]): string {
  if (!token.length || uncountables.hasOwnProperty(token)) {
    return word;
  }
  let len = rules.length;
  while (len--) {
    const rule = rules[len];
    if (rule[0].test(word)) return replace(word, rule);
  }
  return word;
}

/**
 * Replace a word with the updated word.
 */
function replaceWord(
  replaceMap: Record<string, string>,
  keepMap: Record<string, string>,
  rules: [RegExp, string][]
) {
  return function (word: string): string {
    const token = word.toLowerCase();
    if (keepMap.hasOwnProperty(token)) return restoreCase(word, token);
    if (replaceMap.hasOwnProperty(token)) return restoreCase(word, replaceMap[token]);
    return sanitizeWord(token, word, rules);
  };
}

/**
 * Check if a word is part of the map.
 */
function checkWord(
  replaceMap: Record<string, string>,
  keepMap: Record<string, string>,
  rules: [RegExp, string][]
): (word: string) => boolean {
  return function (word: string): boolean {
    const token = word.toLowerCase();
    if (keepMap.hasOwnProperty(token)) return true;
    if (replaceMap.hasOwnProperty(token)) return false;
    return sanitizeWord(token, token, rules) === token;
  };
}

/**
 * Pluralize or singularize a word based on the passed-in count.
 */
function pluralize(word: string, count: number, inclusive?: boolean): string {
  const pluralized = count === 1 ? pluralize.singular(word) : pluralize.plural(word);
  return (inclusive ? count + ' ' : '') + pluralized;
}

/**
 * Pluralize a word.
 */
pluralize.plural = replaceWord(irregularSingles, irregularPlurals, pluralRules);

/**
 * Check if a word is plural.
 */
pluralize.isPlural = checkWord(irregularSingles, irregularPlurals, pluralRules);

/**
 * Singularize a word.
 */
pluralize.singular = replaceWord(irregularPlurals, irregularSingles, singularRules);

/**
 * Check if a word is singular.
 */
pluralize.isSingular = checkWord(irregularPlurals, irregularSingles, singularRules);

/**
 * Add a pluralization rule to the collection.
 */
pluralize.addPluralRule = function (rule: string | RegExp, replacement: string) {
  pluralRules.push([sanitizeRule(rule), replacement]);
};

/**
 * Add a singularization rule to the collection.
 */
pluralize.addSingularRule = function (rule: string | RegExp, replacement: string) {
  singularRules.push([sanitizeRule(rule), replacement]);
};

/**
 * Add an uncountable word rule.
 */
pluralize.addUncountableRule = function (word: string | RegExp) {
  if (typeof word === 'string') {
    uncountables[word.toLowerCase()] = true;
  } else {
    pluralize.addPluralRule(word, '$0');
    pluralize.addSingularRule(word, '$0');
  }
};

/**
 * Add an irregular word definition.
 */
pluralize.addIrregularRule = function (single: string, plural: string) {
  single = single.toLowerCase();
  plural = plural.toLowerCase();
  irregularSingles[single] = plural;
  irregularPlurals[plural] = single;
};

/**
 * Irregular rules.
 */
[
  ['I', 'we'],
  ['me', 'us'],
  ['he', 'they'],
  ['she', 'they'],
  ['them', 'them'],
  ['myself', 'ourselves'],
  ['yourself', 'yourselves'],
  ['itself', 'themselves'],
  ['herself', 'themselves'],
  ['himself', 'themselves'],
  ['themself', 'themselves'],
  ['is', 'are'],
  ['was', 'were'],
  ['has', 'have'],
  ['this', 'these'],
  ['that', 'those'],
  ['my', 'our'],
  ['its', 'their'],
  ['his', 'their'],
  ['her', 'their'],
  ['echo', 'echoes'],
  ['dingo', 'dingoes'],
  ['volcano', 'volcanoes'],
  ['tornado', 'tornadoes'],
  ['torpedo', 'torpedoes'],
  ['genus', 'genera'],
  ['viscus', 'viscera'],
  ['stigma', 'stigmata'],
  ['stoma', 'stomata'],
  ['dogma', 'dogmata'],
  ['lemma', 'lemmata'],
  ['schema', 'schemata'],
  ['anathema', 'anathemata'],
  ['ox', 'oxen'],
  ['axe', 'axes'],
  ['die', 'dice'],
  ['yes', 'yeses'],
  ['foot', 'feet'],
  ['eave', 'eaves'],
  ['goose', 'geese'],
  ['tooth', 'teeth'],
  ['quiz', 'quizzes'],
  ['human', 'humans'],
  ['proof', 'proofs'],
  ['carve', 'carves'],
  ['valve', 'valves'],
  ['looey', 'looies'],
  ['thief', 'thieves'],
  ['groove', 'grooves'],
  ['pickaxe', 'pickaxes'],
  ['passerby', 'passersby'],
  ['canvas', 'canvases'],
].forEach(rule => pluralize.addIrregularRule(rule[0], rule[1]));

/**
 * Pluralization rules.
 */
[
  [/s?$/i, 's'],
  [/([^aeiou]ese)$/i, '$1'],
  [/(ax|test)is$/i, '$1es'],
  [/(alias|[^aou]us|t[lm]as|gas|ris)$/i, '$1es'],
  [/(e[mn]u)s?$/i, '$1s'],
  [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1i'],
  [/(alumn|alg|vertebr)(?:a|ae)$/i, '$1ae'],
  [/(seraph|cherub)(?:im)?$/i, '$1im'],
  [/(her|at|gr)o$/i, '$1oes'],
  [/(sis)$/i, 'ses'],
  [/(?:(kni|wi|li)fe|(ar|l|ea|eo|oa|hoo)f)$/i, '$1$2ves'],
  [/([^aeiouy]|qu)y$/i, '$1ies'],
  [/(x|ch|ss|sh|zz)$/i, '$1es'],
  [/(matr|cod|mur|sil|vert|ind|append)(?:ix|ex)$/i, '$1ices'],
  [/(pe)(?:rson|ople)$/i, '$1ople'],
  [/(child)(?:ren)?$/i, '$1ren'],
  [/eaux$/i, '$0'],
  [/m[ae]n$/i, 'men'],
  ['thou', 'you'],
].forEach(rule => pluralize.addPluralRule(rule[0], rule[1] as string));

/**
 * Singularization rules.
 */
[
  [/s$/i, ''],
  [/(ss)$/i, '$1'],
  [/(wi|kni|(?:after|half|high|low|mid|non|night|[^\w]|^)li)ves$/i, '$1fe'],
  [/(ar|(?:wo|[ae])l|[eo][ao])ves$/i, '$1f'],
  [/ies$/i, 'y'],
  [/(x|ch|ss|sh|zz|tto|go|cho|alias|[^aou]us|t[lm]as|gas|(?:her|at|gr)o|[aeiou]ris)(?:es)?$/i, '$1'],
  [/(analy|diagno|parenthe|progno|synop|the|empha|cri|ne)(?:sis|ses)$/i, '$1sis'],
  [/(movie|twelve|abuse|e[mn]u)s$/i, '$1'],
  [/(alumn|syllab|vir|radi|nucle|fung|cact|stimul|termin|bacill|foc|uter|loc|strat)(?:us|i)$/i, '$1us'],
  [/(pe)(rson|ople)$/i, '$1rson'],
  [/(child)ren$/i, '$1'],
  [/(eau)x?$/i, '$1'],
  [/men$/i, 'man'],
].forEach(rule => pluralize.addSingularRule(rule[0], rule[1] as string));

/**
 * Uncountable rules.
 */
[
  'adulthood',
  'advice',
  'agenda',
  'aid',
  'aircraft',
  'alcohol',
  'ammo',
  'analytics',
  'anime',
  'athletics',
  'audio',
  'bison',
  'blood',
  'buffalo',
  'butter',
  'carp',
  'cash',
  'chassis',
  'chess',
  'clothing',
  'cod',
  'commerce',
  'cooperation',
  'corps',
  'debris',
  'diabetes',
  'digestion',
  'elk',
  'energy',
  'equipment',
  'excretion',
  'expertise',
  'firmware',
  'flounder',
  'fun',
  'gallows',
  'garbage',
  'graffiti',
  'hardware',
  'health',
  'herpes',
  'homework',
  'housework',
  'information',
  'jeans',
  'justice',
  'labour',
  'literature',
  'machinery',
  'mackerel',
  'media',
  'moose',
  'music',
  'news',
  'rice',
  'salmon',
  'scissors',
  'series',
  'shrimp',
  'software',
  'staff',
  'swine',
  'tennis',
  'trout',
  'welfare',
  'you',
].forEach(pluralize.addUncountableRule);

export { pluralize };
