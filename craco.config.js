module.exports = {
    webpack: {
      configure: (webpackConfig) => {
        // Find the source-map-loader rule and exclude node_modules
        const sourceMapLoaderRule = webpackConfig.module.rules.find(
          (rule) =>
            rule.oneOf &&
            rule.oneOf.find(
              (r) =>
                r.enforce === 'pre' &&
                r.use &&
                r.use.some((u) => u.loader && u.loader.includes('source-map-loader'))
            )
        );
  
        if (sourceMapLoaderRule) {
          sourceMapLoaderRule.oneOf.forEach((r) => {
            if (
              r.enforce === 'pre' &&
              r.use &&
              r.use.some((u) => u.loader && u.loader.includes('source-map-loader'))
            ) {
              r.exclude = /node_modules/;
            }
          });
        }
  
        return webpackConfig;
      },
    },
  };