export const srcRoot = import.meta.url;

export function imgPng(name: string) {
    return new URL(`./assets/img/${name}.png`, srcRoot)
}

export function imgJpeg(name: string) {
    return new URL(`./assets/img/${name}.jpeg`, srcRoot)
}

export function imgSvg(name: string) {
    return new URL(`./assets/img/${name}.jpeg`, srcRoot)
}