export const capitalizeLang = (language) => {
    const splitLang = language.slice(1)
    const capitalize = language[0].toUpperCase();
    const rejoinWord = capitalize + splitLang
    return rejoinWord
}

