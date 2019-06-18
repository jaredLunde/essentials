// Adapted from: https://github.com/TehShrike/deepmerge
//
// Copyright Nick Fisher
// License MIT
import isMergeableObject from 'is-mergeable-object'


export const mergeIfMergeable = (value, optionsArgument) =>
  isMergeableObject(value)
    ? deepMerge(Array.isArray(value) ? [] : {}, value, optionsArgument)
    : value

export const arrayMergeOverwrite = (target, source, optionsArgument) => {
  if (target === source) return target
  const output = [...target]

  for (let i = 0; i < source.length; i++)
    output[i] = mergeIfMergeable(source[i], optionsArgument);

  return output
}

export const arrayMergeConcat = (target, source, optionsArgument) => {
  if (target === source) return target
  const output = [...target]

  for (let i = 0; i < source.length; i++)
    output.push(mergeIfMergeable(source[i], optionsArgument));

  return output
}

export const arrayMergeReplace = (target, source, optionsArgument) => {
  if (target === source) return target

  const output = []

  for (let i = 0; i < source.length; i++)
    output.push(mergeIfMergeable(source[i], optionsArgument));

  return output
}

const mergeObject = (target, source, optionsArgument) => {
  if (target === source)
    return target

  const destination = {...target}, sourceKeys = Object.keys(source)

  for (let i = 0; i < sourceKeys.length; i++) {
    const key = sourceKeys[i]

    if (!isMergeableObject(source[key]) || target[key] === void 0)
      destination[key] = mergeIfMergeable(source[key], optionsArgument)
    else
      destination[key] = deepMerge(target[key], source[key], optionsArgument)
  }

  return destination
}

const deepMerge = (target, source, optionsArgument) => {
  const
    sourceIsArray = Array.isArray(source),
    targetIsArray = Array.isArray(target),
    options = optionsArgument || { arrayMerge: arrayMergeReplace },
    sourceAndTargetTypesMatch = sourceIsArray === targetIsArray

  if (!sourceAndTargetTypesMatch)
    return mergeIfMergeable(source, optionsArgument)
  else if (sourceIsArray)
    return (options.arrayMerge || arrayMergeReplace)(target, source, optionsArgument)
  else
    return mergeObject(target, source, optionsArgument)
}

export default deepMerge