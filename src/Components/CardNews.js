// Todo componente nada mais é que uma função do JavaScript que vai retornar mais JavaScript, HTML e CSS

class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card")

        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "card__left");
        
        const autor = document.createElement("span");
        const linkTitle = document.createElement("a");
        const conteudo = document.createElement("p");

        cardLeft.appendChild(autor);
        autor.textContent = "By " + (this.getAttribute("autor") || "Anonymous");
        cardLeft.appendChild(linkTitle);
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = this.getAttribute("link-url")
        cardLeft.appendChild(conteudo);
        conteudo.textContent = this.getAttribute("conteudo");

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "card__right");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "/assets/vader-obviously.png";
        newsImage.alt = this.getAttribute("photo-alt") || "Not Satan Goss"
        
        cardRight.appendChild(newsImage);
        
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
        
        return componentRoot;
    }

    styles() {
        const style = document.createElement("style");
        style.textContent = `
        .card {
            width: 80%;
            -webkit-box-shadow: 10px 10px 26px 0px rgba(212,212,212,0.57);
            -moz-box-shadow: 10px 10px 26px 0px rgba(212,212,212,0.57);
            box-shadow: 10px 10px 26px 0px rgba(212,212,212,0.57);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }
        
        .card__left {
            display: flex;
            flex-direction: column;
            justify-content: center;
            padding-left: 10px;
        }
        
        .card__left > a {
            margin-top: 15px;
            font-size: 25px;
            color: black;
            text-decoration: none;
            font-weight: bold;
        }
        
        .card__left > p {
            color: rgb(70, 70, 70);
        }
        
        .card__left > span {
            font-weight: 400;
        }
        
        `

        return style;
    }
}

customElements.define("card-news", CardNews);