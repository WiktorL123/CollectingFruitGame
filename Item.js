
export default class Item{
    #img
    #pos
    #frame
    #maxFrames
    #velocity
    #checkColision
    #character




    // get posX(){
    //     return this.#pos.x
    // }

    constructor({img, pos, checkColision, character}) {
        this.#img = img
        this.#pos = pos
        this.#frame = 0
        this.#maxFrames = 4
        this.#velocity =2
        this.#checkColision =checkColision
        this.#character=character
    }




    draw(ctx){

        const spriteWidth = 35
        const spriteHeight = 35
        const spacing = 35
        this.#maxFrames = Math.floor(this.#img.height / (spriteHeight + spacing))

       this.#pos-=this.#velocity


      ctx.drawImage(  this.#img, 0,
          this.#frame * (spriteHeight + spacing),
          spriteWidth, spriteHeight,this.#pos.x, 0,
            spriteWidth,
            spriteHeight)

        if(this.#checkColision(this.#pos, this.#character.pos))

        if (this.#frame<this.#maxFrames)
            this.#frame++
        else
            this.#frame=0
    }
}