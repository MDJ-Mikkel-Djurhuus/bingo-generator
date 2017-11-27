export const shuffle = (array) => {
    let i = 0
        , j = 0
        , temp = null;

    for (i = array.length - 1; i > 0; i -= 1) {
        j = Math.floor(Math.random() * (i + 1))
        temp = array[i]
        array[i] = array[j]
        array[j] = temp
    }
    return array;
}

export const htmlToElements = (html) => {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.childNodes;
}

export const htmlToElement = (html) => {
    let template = document.createElement('template');
    template.innerHTML = html;
    return template.content.firstChild;
}