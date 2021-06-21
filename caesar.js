const caesar = (str, shift) => {
    if (shift === 0) return str

    return str.replace(/[a-zA-Z]/g, (char) =>
        String.fromCharCode(((char.charCodeAt() - 97 + shift) % 26) + 97)
    )
}

module.exports = caesar