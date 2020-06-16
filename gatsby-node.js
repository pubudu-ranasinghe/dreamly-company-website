const postCssLoaderRe = /postcss-loader/
const targetFiles = [`.module.css`, `.css`]

const processRule = rule => {
  if (rule.oneOf) {
    return {
      ...rule,
      oneOf: rule.oneOf.map(processRule),
    }
  }

  // if rule doesn't target one of targetFiles - leave rule untouched
  if (
    !targetFiles.some(targetFile => {
      if (rule.test instanceof RegExp) {
        return rule.test.test(targetFile)
      } else {
        return false
      }
    })
  ) {
    return rule
  }

  if (Array.isArray(rule.use)) {
    return {
      ...rule,
      use: rule.use.map(use => {
        if (!postCssLoaderRe.test(use.loader)) {
          // if it's not postcss loader - leave loader untouched
          return use
        }

        return {
          ...use,
          options: {
            ...use.options,
            plugins: loader => {
              const result = use.options.plugins(loader)

              return result.map(postCssPlugin => {
                if (postCssPlugin.postcssPlugin === `autoprefixer`) {
                  // modify `postCssPlugin.options` here
                  postCssPlugin.options.grid = `autoplace`
                }

                return postCssPlugin
              })
            },
          },
        }
      }),
    }
  }

  return rule
}

exports.onCreateWebpackConfig = ({ getConfig, actions }) => {
  const config = getConfig()

  const newConfig = {
    ...config,
    module: {
      ...config.module,
      rules: config.module.rules.map(processRule),
    },
  }
  actions.replaceWebpackConfig(newConfig)
}