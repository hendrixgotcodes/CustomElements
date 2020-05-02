class BlogHeader extends HTMLElement{
    constructor()
    {
        super();
        this.textContent = "I Am A Blog Header";
    }
}
window.customElements.define("blog-header", BlogHeader);