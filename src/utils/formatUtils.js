export const formatPrice = (price) => {
    return `${price} ₽`;
};

export const truncateText = (text, maxLength = 50) => {
    if (text.length <= maxLength) return text;
    return text.substring(0, maxLength) + '...';
};