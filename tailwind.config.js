module.exports = {
    purge: [
        "./resources/**/*.blade.php",
        "./resources/**/*.js",
        "./resources/**/*.vue",
    ],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {},
        color: {
            white2: "#f5f5f5",
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
