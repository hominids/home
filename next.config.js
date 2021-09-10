const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([optimizedImages], { target: 'serverless' });

module.exports = {
    images: {
        domains: ["tjvanslooten.github.io", "spee.ch"],
    }
}

/* https://tjvanslooten.github.io/imgColor.jpg */
