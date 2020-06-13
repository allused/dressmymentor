// There should be a better way to get the images, but for now I found
//  this as the best option to import the images, without using <img> tags, anonymus functions returns the image object
export let dressUp = {
    newHeadImage: () => {
        return new Image()
    },
    newBodyImage: () => {
        return new Image()
    },



    laciHead: () => {
        let laciHead = new Image();
        laciHead.src = "/static/images/heads/laci2.png";
        return laciHead
    },

    firstFullBody: () => {
        let firstBody = new Image();
        firstBody.src = "/static/images/body/body1.png";
        return firstBody
    },

    firstBodyDefTop: () => {
        let body = new Image();
        body.src = "/static/images/body/default_top.png";
        return body
    },

    sBodyDefTop: () => {
        let body = new Image();
        body.src = "/static/images/body/2003-ab-top.png";
        return body
    },

    sBodyDefBottom: () => {
        let body = new Image();
        body.src = "/static/images/body/2003-ab-bottom.png";
        return body
    },



    firstBodyDefBottom: () => {
        let body = new Image();
        body.src = "/static/images/body/default_bottom.png";
        return body
    },

    secondBody: () => {
        let secondBody = new Image();
        secondBody.src = "/static/images/bottom2/jeans-short.png";
        return secondBody
    },

    adamHead: () => {
        let adamHead = new Image();
        adamHead.src = "/static/images/heads/adam2.png";
        return adamHead
    },

    gaborHead: () => {
        let gaborHead = new Image();
        gaborHead.src = "/static/images/heads/gabor2.png";
        return gaborHead
    },

    benceHead: () => {
        let head = new Image();
        head.src = "/static/images/heads/gabor2.png";
        return head
    },

    sBody1PantsFull: () => {
        let pants = new Image();
        pants.src = "/static/images/bottom2/grey-sweatpants.png";
        return pants
    },

    sBody2PantsFull: () => {
        let pants = new Image();
        pants.src = "/static/images/bottom2/jeans-short.png";
        return pants
    },

    sBody1Pants: () => {
        let pants = new Image();
        pants.src = "/static/images/bottom2/grey-sweatpants-bottom.png";
        return pants
    },

    sBody2Pants: () => {
        let pants = new Image();
        pants.src = "/static/images/bottom2/jeans-short-bottom.png";
        return pants
    },

    sBody1Top: () => {
        let top = new Image();
        top.src = "/static/images/top2/adidas-croptop-top.png";
        return top
    },

    sBody2Top: () => {
        let top = new Image();
        top.src = "/static/images/top2/black-gucci-top.png";
        return top
    },

    sBody3Top: () => {
        let top = new Image();
        top.src = "/static/images/top2/szili-supreme-top.png";
        return top
    },

    sBody4Top: () => {
        let top = new Image();
        top.src = "/static/images/top2/white-gucci-shirt-top.png";
        return top
    },

    sBody2TopFull: () => {
        let top = new Image();
        top.src = "/static/images/top2/black-gucci-fullbody.png";
        return top
    },

    sBody1TopFull: () => {
        let top = new Image();
        top.src = "/static/images/top2/adidas-croptop.png";
        return top
    },

    sBody3TopFull: () => {
        let top = new Image();
        top.src = "/static/images/top2/szili-supreme.png";
        return top
    },

    sBody4TopFull: () => {
        let top = new Image();
        top.src = "/static/images/top2/white-gucci-shirt.png";
        return top
    },

    fBody1Top: () => {
        let top = new Image();
        top.src = "/static/images/tops/adidas-tshirt-builder-top.png";
        return top
    },

    fBody2Top: () => {
        let top = new Image();
        top.src = "/static/images/tops/mickey-gucci-builder-top.png";
        return top
    },

    fBody3Top: () => {
        let top = new Image();
        top.src = "/static/images/tops/supreme-builder-top.png";
        return top
    },

    fBody4Top: () => {
        let top = new Image();
        top.src = "/static/images/tops/gucci-pan-builder-top.png";
        return top
    },

    fBody1Pants: () => {
        let pants = new Image();
        pants.src = "/static/images/bottoms/builder-jeanshort-bottom.png";
        console.log(pants)
        return pants
    },


    fBody2Pants: () => {
        let pants = new Image();
        pants.src = "/static/images/bottoms/grey-sweetpants-builder-bottom.png";

        return pants
    },


    fBody1Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses/blackdress-builder.png";
        return dress
    },

    fBody2Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses/reddress-builder.png";
        return dress
    },

    fBody3Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses/whitedress-builder.png";
        return dress
    },

    fBody4Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses/yellowdress-builder.png";
        return dress
    },

    sBody1Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses2/black-dress.png";
        return dress
    },

    sBody2Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses2/red-dress.png";
        return dress
    },

    sBody3Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses2/white-dress.png";
        return dress
    },

    sBody4Dress: () => {
        let dress = new Image();
        dress.src = "/static/images/dresses2/yellow-dress.png";
        return dress
    },


}
