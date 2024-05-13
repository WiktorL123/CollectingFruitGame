export default class Item{
    #img
    #pos
    #frame
    #maxFrames

    constructor({img, pos}) {
        this.#img = img;
        this.#pos = pos;
        this.#frame = 0;
        this.#maxFrames = 4;
    }

    draw(ctx){
        const spriteWidth = 35; // Szerokość pojedynczego jabłka w pikselach
        const spriteHeight = 35; // Wysokość pojedynczego jabłka w pikselach
        const spacing = 35; // Odległość pomiędzy jabłkami w pikselach
        this.#maxFrames = Math.floor(this.#img.height / (spriteHeight + spacing)); // Całkowita liczba klatek


      ctx.drawImage(  this.#img, 0,
          this.#frame * (spriteHeight + spacing),
          spriteWidth, spriteHeight, this.#pos.x, this.#pos.y,
            spriteWidth,
            spriteHeight)



        if (this.#frame<this.#maxFrames)
            this.#frame++
        else
            this.#frame=0
    }
}