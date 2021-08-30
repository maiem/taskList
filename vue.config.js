module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "../assets/scss/_reset.scss";
                `
            }
        }
    },

    devServer: {
        proxy: 'https://localhost:44302/'
    }

}


