export function smoothScroll() {
    const { height: cardHeight } = document.querySelector(".galler").firstElementChild.getBoundingClientRect();

    window.scrollBy({
        top: cardHeight * 2,
        behavior: "smooth",
    });
};
