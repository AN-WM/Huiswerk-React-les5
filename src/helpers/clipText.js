function clipText(title, limit) {

    if (title.length > limit) {
        return title.substring(0, limit) + "...";
    }
    else return title;
}

export default clipText;