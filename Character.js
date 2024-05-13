
export const characterImage = new Image()
characterImage.src = "assets/idle.png"

export const characterImageWalkLeft = new Image()
characterImageWalkLeft.src = "assets/apple.png"

export const characterImageWalkRight = new Image()
characterImageWalkRight.src = "assets/walk_r.png"


export default  class Character{
    #img
    #pos
    #frame
    #maxframes
    #state
    constructor({img, pos}) {
        this.#img=img
        this.#pos = pos
        this.#frame=0
        this.#maxframes=10
        this.#state='idle'
    }

    #changeState(){
        if (this.#state==='idle') this.#img=characterImage
        if (this.#state==='walk_l') {
            this.#img = characterImageWalkLeft

        }

        if (this.#state==='walk_r') this.#img = characterImageWalkRight
    }
    #checkCharacterCollision(){
            if(this.#pos.x >= 1035) {

                this.#pos.x = 1035
            }
            if (this.#pos.x <= 0)
                this.#pos.x = 0

    }
    draw(ctx, key){
        ctx.drawImage(this.#img, this.#frame*165 ,0, 165, 200,  this.#pos.x, this.#pos.y, 165, 200)


        this.#move(key)


        if (this.#frame <this.#maxframes)
            this.#frame++
        else
            this.#frame=0

    }

    #move(key){

        if (key.ArrowLeft.pressed) {
            this.#pos.x -= 8
            this.#state='walk_l'
            this.#changeState()
            this.#checkCharacterCollision()


        }

        if (key.ArrowRight.pressed) {
            this.#pos.x += 8
            this.#state='walk_r'
            this.#changeState()
            this.#checkCharacterCollision()
        }
       else {
           this.#state='idle'
            this.#changeState()
        }
    }

}
