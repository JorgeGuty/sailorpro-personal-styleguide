const def = {
    colors: require('../constants/colors'),
    gradients: require('../constants/gradients'),
    shadows: require('../constants/shadows')
}

const getTemplate = () => {
    return {
        colors: { ...def.colors, ...window.template?.colors },
        gradients: { ...def.gradients, ...window.template?.gradients },
        shadows: { ...def.shadows, ...window.template?.shadows }
    }
}

export const templateFromURL = async (url) => {
    var styleJson = await fetch(url)
    templateFromJson(await styleJson.json())
}

export const templateFromJson = (json) => {
    window.template = json
}



export default getTemplate