function clipText(title, limit) {
    console.log(title);

    if (title.length > limit) {
        return title.substring(0, limit) + "...";
    }
    else return title;
}

export default clipText;