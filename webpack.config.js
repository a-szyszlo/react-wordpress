const path = require('path');

module.exports = {
    mode: 'development', // Ustaw na 'development' lub 'production'
    entry: './assets/js/src/index.js',
    output: {
        path: path.resolve(__dirname, 'assets/js/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(sa|sc|c)ss$/, 
                use: [
                    'style-loader',   
                    'css-loader',     
                    'sass-loader'     
                ]
            },
            {
                test: /\.svg$/i,
                issuer: /\.[jt]sx?$/,
                use: ['@svgr/webpack'],
              },
        
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
};
