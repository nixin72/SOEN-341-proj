#!/usr/bin/env node

const fs = require('fs')
const swag = require('../swagger.json')

function temp(strings, ...keys) {
  return (...values) => {
    const dict = values[values.length - 1] || {}
    const result = [strings[0]]
    keys.forEach((key, i) => {
      const value = Number.isInteger(key) ? values[key] : dict[key]
      result.push(value, strings[i + 1])
    })
    return result.join('')
  }
}

function pathToTitle(path) {
  return path[1].toUpperCase() + path.substr(2)
}

const nl = '\n'
const title = temp`# ${0}${nl}`
const sum = temp`## ${0}`
const end = temp`\`\`\`
${0} ${1}
\`\`\``
const params = temp`
| Name | Type | Description |
|:-----|:-----|:------------|
${0}
`
const paramRow = temp`| ${0} | ${1} | ${2} |
`

const paths = Object
  .keys(swag.paths)
  .filter(path => path !== '/' && (path.match(/\//g) || []).length < 2)

const files = paths.map(path =>
  [path, title(pathToTitle(path)) + '\n' + Object
    .keys(swag.paths)
    .filter(p => (new RegExp(`^${path}`)).test(p))
    .map(p => {
      return Object.keys(swag.paths[p])
        .map(m => {
          let data = swag.paths[p][m]
          return sum(data.summary) + nl + data.description + nl + end(m.toUpperCase(), changeParamLook(p)) +
            (data.parameters ? params(data.parameters.reduce((str, param) =>
              str + paramRow(param.name, param.in, param.description), '')) : '')
        })
    }).join('\n')]
)

files.forEach(([fileName, contents]) => {
  fs.writeFile(`./docs${fileName.toLowerCase()}.md`, contents, err => {
    if (err) {
      throw err
    }
  })
})

function changeParamLook(route) {
  return route
    .split('/')
    .map(r => r[0] === '{' ? `:${r.substr(1, r.length - 2)}` : r)
    .join('/')
}
