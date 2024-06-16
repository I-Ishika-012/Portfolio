export const getImgUrl = (path) => {
    return new URL(`../public/${path}`, import.meta.url).href;
}