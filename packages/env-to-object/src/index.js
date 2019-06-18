const camelCase = require('camel-case')


const main = (opt = {}) => {
  const
    {
      formatKey = camelCase,
      filter = () => true,
      delimiter = '__',
      relativeTo = '',
      deserialize = v => v
    } = opt,
    config = {},
    envKeys = Object.keys(process.env).filter(filter)

  for (let i = 0, len = envKeys.length; i < len; i++) {
    let
      envKey = envKeys[i],
      keys = envKey.replace(relativeTo, '').split(delimiter).filter(Boolean),
      nested = config

    if (len === 1)
      nested[formatKey(keys[0])] = deserialize(process.env[envKey])
    else
      for (let j = 0, len = keys.length; j < len; j++) {
        let key = formatKey(keys[j])

        if (nested.hasOwnProperty(key) === false)
          nested[key] = {}

        if (len - 1 === j)
          nested[key] = deserialize(process.env[envKey])
        else
          nested = nested[key]
      }
  }

  return config
}

export default main
