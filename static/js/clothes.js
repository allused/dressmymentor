const MENTORS = ['adam', 'bence', 'gabor', 'laci'];
const BGS = getBgs();
let mentorIndex = 0;
let bgIndex = 0;


import {bodyDraw} from './main.js'
import {fBodyPositions} from './main.js'
import {dressUp} from './getimages.js'

//Get the background images name, and pass it to initBg to load them
function getBgs() {
    let raw_bgs = document.getElementById('backgroundHolder').getAttribute('name')
    let bgs = raw_bgs.split(';')
    return bgs
}

//Contain all the Cloth button Listeners, cloth changing
export let Clothes = {
    initBg: function () {
        document.body.style.background = `url("static/images/background/${BGS[bgIndex]}")`
        document.body.style.backgroundSize = 'cover'
    },

    clearClothes: function () {
        $('#clothes_section').empty()
    },

    addButtonListeners: function () {
        let buttons = document.querySelectorAll('.categoryB')
        for (let button of buttons) {
            button.addEventListener('click', () => {
                document.getElementById('clothes_section').style.display = 'grid';
                this.chooseCategory(button.getAttribute('id'))
            })
        }
    },
    //Display the selected category
    chooseCategory: function (category) {
        if (category == 'topB') {
            this.setTops()

        } else if (category == 'botB') {
            this.setBottoms()
        } else if (category == 'dressB') {
            this.setDresses()
        } else if (category == 'accessoriesB') {
            this.setAccessories()
        }
    },

    //Get all the tops name from the topB element and create an image  object from them to load in top category
    setTops: function () {
        this.clearClothes()
        let raw_tops = document.getElementById('topB').getAttribute('name')
        const class_cloth = document.getElementById('clothes_section')
        let tops = raw_tops.split(';')
        for (let t of tops) {
            const top = document.createElement('div');
            top.className = 'cloth_slot';
            const img = document.createElement('img');
            img.id = 'slot'
            img.setAttribute('src', `static/images/tops/${t}`);
            img.setAttribute('data-nid', `${t}`);
            img.data
            top.append(img);
            class_cloth.append(top)
        }

        this.clothListeners();
    },
    //Get all the bottom name from the botB element and create an image  object from them to load in bottom category
    setBottoms: function () {
        this.clearClothes()
        let raw_bottoms = document.getElementById('botB').getAttribute('name')
        const class_cloth = document.getElementById('clothes_section')
        let bottoms = raw_bottoms.split(';')
        for (let b of bottoms) {
            const bottom = document.createElement('div');
            bottom.className = 'cloth_slot';
            const img = document.createElement('img');
            img.setAttribute('data-nid', `${b}`);
            img.id = 'slot'
            img.setAttribute('src', `static/images/bottoms/${b}`);
            bottom.append(img);
            class_cloth.append(bottom)
        }

        this.clothListeners();
    },

    //Get all the dresses name from the dressB element and create an image  object from them to load in dress category
    setDresses: function () {

        this.clearClothes()
        let raw_dresses = document.getElementById('dressB').getAttribute('name')
        const class_cloth = document.getElementById('clothes_section')
        let dresses = raw_dresses.split(';')
        for (let d of dresses) {
            const dress = document.createElement('div');
            dress.className = 'cloth_slot';
            const img = document.createElement('img');
            img.id = 'slot'
            img.setAttribute('src', `static/images/dresses/${d}`);
            img.setAttribute('data-nid', `${d}`);
            dress.append(img);
            class_cloth.append(dress)
        }
        this.clothListeners();
    },

    //Get all the accessories name from the accessoriesB element and create
    // an image  object from them to load in accessories category /it contains the different mentor heads/
    setAccessories: function () {
        this.clearClothes()
        let raw_accessories = document.getElementById('accessoriesB').getAttribute('name')
        const class_cloth = document.getElementById('clothes_section')
        let accessories = raw_accessories.split(';')

        for (let a of accessories) {
            if (a.includes(MENTORS[mentorIndex])) {
                const bling = document.createElement('div');
                bling.className = 'cloth_slot';
                const img = document.createElement('img');
                img.id = 'slot';
                img.setAttribute('src', `static/images/accessories/${a}`);
                img.setAttribute('data-nid', `${a}`);
                bling.append(img);
                class_cloth.append(bling)
            }

        }
        let span;
        const buttons = document.createElement('div');
        buttons.setAttribute('id', 'accBs')
        let nextB = document.createElement('div');
        let prevB = document.createElement('div');
        prevB.setAttribute('id', 'prevB')
        prevB.setAttribute('class', 'accB')
        span = document.createElement('span')
        span.setAttribute('class', 'glyphicon glyphicon-chevron-left')
        prevB.append(span)
        buttons.append(prevB)
        nextB.setAttribute('id', 'nextB')
        nextB.setAttribute('class', 'accB')
        span = document.createElement('span')
        span.setAttribute('class', 'glyphicon glyphicon-chevron-right')
        nextB.append(span)
        buttons.append(nextB)

        class_cloth.append(buttons)

        this.mentorListeners();
        this.clothListeners();
    },

    nextMentor: function () {
        if (mentorIndex < MENTORS.length - 1) {
            mentorIndex += 1;
        } else {
            mentorIndex = 0
        }
        ;
    },

    previousMentor: function () {
        if (mentorIndex == 0) {
            mentorIndex = MENTORS.length - 1;
        } else {
            mentorIndex -= 1;
        }
        ;
    },

    mentorListeners: function () {
        let nextB = document.querySelector('#nextB');
        nextB.addEventListener('click', () => {
            this.nextMentor();
            this.setAccessories();
        })
        let prevB = document.querySelector('#prevB');
        prevB.addEventListener('click', () => {
            this.previousMentor();
            this.setAccessories();
        })
    },

    //Store all the current cloths/body parts img object
    currentBody: {
        'head': dressUp.laciHead(),
        'top': dressUp.firstBodyDefTop(),
        'bottom': dressUp.firstBodyDefBottom(),
        'dress': undefined,
        'accessories': undefined
    },


    //Handles all the body parts,head changing by updating the currentBody object
    //Also updates the currentSBODY object with the current clothes from clothsJson
    clothListeners: function () {
        /*let currentHead = dressUp.laciHead();
        let currentTop = dressUp.firstBodyDefTop();
        let currentBottom = dressUp.firstBodyDefBottom();*/

        let clothesImgs = document.querySelectorAll('#slot')
        for (let img of clothesImgs) {
            img.addEventListener('click', (event) => {
                const topPos = fBodyPositions.top;
                const bottomPos = fBodyPositions.bottom;
                const dressPos = fBodyPositions.dress;
                const headPos = fBodyPositions.head;

                let dressSrc = img.src.slice(21);
                let cloth = this.makeImage(dressSrc)
                let keyid;

                if (cloth.dataset.category.includes('top')) {


                    keyid = cloth.dataset.keyid;
                    this.currentBody.top = cloth;
                    this.currentBody.dress = undefined;
                    this.currentSBody.top = this.clothJson[keyid];
                    this.currentSBody.dress = undefined;
                    console.log(cloth)

                    if (this.currentBody.accessories !== undefined){
                        bodyDraw(this.currentBody.top, topPos, this.currentBody.accessories, headPos,
                        this.currentBody.bottom, bottomPos)
                    }else{
                        bodyDraw(this.currentBody.top, topPos, this.currentBody.head, headPos,
                        this.currentBody.bottom, bottomPos)
                    }


                } else if (cloth.dataset.category.includes('bottoms')) {
                    console.log(cloth)
                    keyid = cloth.dataset.keyid;
                    this.currentBody.bottom = cloth;
                    this.currentBody.dress = undefined;
                    this.currentSBody.bottom = this.clothJson[keyid];
                    this.currentSBody.dress = undefined;

                    if (this.currentBody.accessories !== undefined){
                        bodyDraw(this.currentBody.top, topPos, this.currentBody.accessories, headPos,
                        this.currentBody.bottom, bottomPos)
                    }else{
                        bodyDraw(this.currentBody.top, topPos, this.currentBody.head, headPos,
                        this.currentBody.bottom, bottomPos)
                    }

                } else if (cloth.dataset.category.includes('dresses')) {

                    keyid = cloth.dataset.keyid;
                    this.currentBody.dress = cloth;
                    this.currentSBody.dress = this.clothJson[keyid];

                    if (this.currentBody.accessories !== undefined){
                        bodyDraw(this.currentBody.dress, dressPos, this.currentBody.accessories, headPos)
                    } else {
                        bodyDraw(this.currentBody.dress, dressPos, this.currentBody.head, headPos)
                    }



                } else if (cloth.dataset.category.includes('access')) {

                    //keyid = cloth.dataset.keyid;
                    this.currentBody.accessories = cloth;
                    this.currentSBody.accessories = cloth;
                    this.currentSBody.head = undefined;

                    bodyDraw(this.currentBody.top, topPos, this.currentBody.accessories, headPos,
                        this.currentBody.bottom, bottomPos)

                }

            })
        }
    },

    //store the body parts for the FLEX draw,
    currentSBody: {
        'head': dressUp.laciHead(),
        'top': dressUp.sBodyDefTop(),
        'bottom': dressUp.sBodyDefBottom(),
        'dress': undefined,
        'accessories': undefined
    },

    //Creates the images for the firstBody from the bodyPart src
    makeImage: function (src) {
        let dress = new Image()
        dress.src = src
        dress.setAttribute('data-category', `${src.slice(15, 22)}`)

        //To slice the src to decide if the actual item type, and pass it in dataAttr
        if (src.slice(15, 19) == 'tops') {
            dress.setAttribute('data-keyid', `${src.slice(20, -4)}`)

        } else if (src.slice(15, 26) == 'accessories') {
            dress.setAttribute('data-keyid', `${src.slice(27, -4)}`)
        } else {
            dress.setAttribute('data-keyid', `${src.slice(23, -4)}`)
        }

        return dress
    },

    //Stores all the matching body parts for the secondBody / Flex body
    //Cloths Listener calls them by the part keyid attr. and update currentSBODY with the dressUp function
    clothJson: {
        'default_top':dressUp.sBodyDefTop(),
        'default_bottom':dressUp.sBodyDefBottom(),
        'builder-jeanshort-bottom': dressUp.sBody2Pants(),
        'grey-sweetpants-builder-bottom': dressUp.sBody1Pants(),
        'adidas-tshirt-builder-top': dressUp.sBody1Top(),
        'mickey-gucci-builder-top': dressUp.sBody2Top(),
        'supreme-builder-top': dressUp.sBody3Top(),
        'gucci-pan-builder-top': dressUp.sBody4Top(),
        'blackdress-builder': dressUp.sBody1Dress(),
        'reddress-builder': dressUp.sBody2Dress(),
        'whitedress-builder': dressUp.sBody3Dress(),
        'yellowdress-builder': dressUp.sBody4Dress(),

    },


    backgroundListeners: function () {
        let nextBg = document.querySelector('#nextBg');
        let prevBg = document.querySelector('#prevBg');
        nextBg.addEventListener('click', () => {
            this.nextBackground();
        });
        prevBg.addEventListener('click', () => {
            this.previousBackground();
        });
    },

    nextBackground: function () {
        if (bgIndex < BGS.length - 1) {
            bgIndex += 1;
        } else {
            bgIndex = 0
        }
        this.initBg();
    },

    previousBackground: function () {
        if (bgIndex > 0) {
            bgIndex -= 1;
        } else {
            bgIndex = BGS.length - 1
        }
        this.initBg();
    }


}