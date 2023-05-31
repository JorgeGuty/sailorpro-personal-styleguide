export function isNumber(char) {
    const charCode = char.charCodeAt(0);
    return (charCode >= 48 && charCode <= 57);
}