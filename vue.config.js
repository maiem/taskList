module.exports = {
    css: {
        loaderOptions: {
            scss: {
                additionalData: `
                    @import "../assets/scss/_reset.scss";
                    @import "../assets/scss/_media.scss";
                    @import "../assets/scss/_grid.scss";
                `
            }
        }
    }
}