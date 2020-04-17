export function getMobileURL(url: string) {
    return (url) ? url.replace ('wikipedia', 'm.wikipedia'): '';
}