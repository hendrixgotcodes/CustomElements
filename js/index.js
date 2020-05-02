class BlogHeader extends HTMLElement{
    constructor()
    {
        super();
        this.textContent = "Hello world";
    }
}
window.customElements.define("blog-header", BlogHeader);
