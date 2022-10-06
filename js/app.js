const startBtn = document.querySelector('#start');
const screens = document.querySelectorAll('.screen')
const container = document.querySelector('.container');
const input = document.querySelector('#input');
const addBTn = document.querySelector('#add');
const tipBtn = document.querySelector('#tip');
const wordEn = document.querySelector('.word');
const wordsEn = ["able", "about", "above", "accept", "across", "act", "actually", "add", "admit", "afraid", "after", "afternoon", "again", "against", "age", "ago", "agree", "ahead", "air", "all", "allow", "almost", "alone", "along", "already", "alright", "also", "although", "always", "am", "amaze", "and", "anger", "angry", "animal", "annoy", "another", "answer", "any", "anymore", "anyone", "anything", "anyway", "apartment", "apparently", "appear", "approach", "are", "area", "aren't", "arm", "around", "arrive", "as", "ask", "asleep", "ass", "at", "attack", "attempt", ];
const wordsRu = ["способный", "о", "выше", "принимать", "через", "действовать", "на самом деле ", "добавить ", "признавать", "бояться", "после", "послеполудня", "снова", "против", "возраст", "тому назад ", "соглашаться", "предстоящий", "воздух", "все", "разрешать", "почти", "один", "вдоль", "уже", "хорошо", "также", "несмотря на то что", "всегда", "есть", "удивлять", "и", "злость", "злой", "животное", "раздражать / досаждать", "другой", "ответ", "любой", "больше", "кто либо ", "что либо", "тем не менее", "квартира", "по всей видимости", "появляться", "приближение", "есть", "область", "не", "рукоятка", "около", "прибыть", "как", "вопрос", "спящий", "являться", "в", "атака / нападать", "попытка ", ];
const indexWordsEn = wordsEn.length
/* let indexArrayWordRu =  */

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    screens[0].classList.add('up')
    changeWordEn();
})

addBTn.addEventListener('click', (event) => {
    listener(event);
})

input.addEventListener('keyup', (event) => {
    if (event.which == 13) {
        listener(event);
    }
})

tipBtn.addEventListener('click', (event) => {
    openModalTip() 
})


function listener(event) {
    event.preventDefault()
    const value = input.value;
    const indexRu = wordsRu.findIndex(i => i === value)
    const indexEn = wordsEn.findIndex(i => i === wordEn.innerHTML)
    if (indexRu == indexEn) {
        cleanInput()
        changeWordEn();
    } else {
        openModalError();
    }
}

function cleanInput() {
    input.value = '';
}

function openModalTip() {
    const modal = document.createElement('div')
    const indexEn = wordsEn.findIndex(i => i === wordEn.innerHTML)
    modal.innerHTML = `<h2 class='error'>${wordsRu[indexEn]}</h2>`
    modal.classList.add('modal')
    tipBtn.setAttribute('disabled', 'true')

    setTimeout(() => {
        modal.remove()
    }, 2700);

    setTimeout(() => {
        tipBtn.removeAttribute('disabled')
    }, 15000);

    container.append(modal)
}


function openModalError() {
    const modal = document.createElement('div')
    modal.innerHTML = `<h2 class='error'>неверно!<br> <span> попробуй заново <span> </h2>`
    modal.classList.add('modal')

    setTimeout(() => {
        modal.remove()
    }, 1700);

    container.append(modal)
}



function changeWordEn() {
    let index = random(0, wordsEn.length - 1)
    let indexEn = wordsEn.findIndex(i => i === wordEn.innerHTML)

    if (index === indexEn) {
        changeWordEn();
    } else {
        wordEn.innerHTML = `${wordsEn[index]}`
    }
}


function random(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


console.log(tipBtn)