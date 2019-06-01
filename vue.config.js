module.exports = {
    // baseUrl:'http://rejaurrahman.co.uk/projects/external-links-helper/',
    baseUrl:'/',
    pages: {
        index: {
            entry: 'src/main.js', //entry for the public page
            template: 'public/index.html', // source template
            filename: 'index.html' // output as dist/*
        },
    },
    devServer: {
        historyApiFallback: {
            rewrites: [
                { from: /\/index/, to: '/index.html' },
            ]
        }
    }
}