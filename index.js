// import { Calc } from "../../portfolio/calc/calculate.js"

// 難易度別ボタン
const level_btn = document.querySelectorAll("#level_btn button");

level_btn.forEach((elem) => {
    elem.addEventListener("click", e => {
                // InitialSetting.setLevel(elem, start_btn);
                InitialSetting.setLevel(elem);
            })
        });

// 四則演算別ボタン
const select_symbol = document.querySelectorAll("#select_symbol button");

select_symbol.forEach((elem) => {
    elem.addEventListener("click", () => {
        InitialSetting.setSymbol(elem);
    })
});

// スタートボタン
const start_btn = document.querySelector("#start_btn");

start_btn.addEventListener("click", () => {

    // const level_number = start_btn.dataset.lavel;
    const level_number = Calculation.level;
    const symbols = document.getElementById("symbols").value;

    if(InitialSetting.isCheck(level_number, symbols)){
        document.querySelector(".modal").close();
        Calculation.getSplitNumber(level_number);
    }
});

// 答えボタン
const answer_btn = document.querySelector("#answer_btn");

answer_btn.addEventListener("click", e => {
    const next_btn = document.querySelector("#next_btn");
    next_btn.disabled = false;
});

// 次へボタン
const next_btn = document.querySelector("#next_btn");

next_btn.addEventListener("click", e => {
    Calculation.getQuestionCount();
});

class InitialSetting {

    /**
     * 難易度別のデータ属性を取得
     * スタートボタンにデータ属性を設定する
     * @param {*} elem 
     * @param {*} start_btn 
     */
    // static setLevel(elem, start_btn){
        static setLevel(elem){
        const level_number = (elem.getAttribute("data-level"));
        Calculation.level = level_number;
    }

    /**
     * 選択した四則演算の記号を設定する
     * @param {*} elem 
     */
    static setSymbol(elem){
        document.getElementById("symbols").value = elem.textContent;
    }

    /**
     * 難易度と四則演算記号を選んだかチェックする
     * @param {*} start_btn 
     */
    static isCheck(level_number, symbols ){
        if(!level_number){
            // アラートの表示が嫌いだから他の方法でやりたい、据え置き
            alert("レベルをえらんでね")
        } else if (!symbols) {
            alert("たしざん？ひきざん？どれにする？")
        } else {
            return level_number;
        }
    }
}

class Calculation {
    get level(){
        return this._count;
    }

    get count(){
        return this._count;
    }

    static getQuestionCount(){
        if(!this.count) {
            this.count = 0;
        }

        ++this.count;

        if (this.count !== 10){
            const level_number = Calculation.level;
            Calculation.getSplitNumber(level_number);
            console.log("10回未満")
        }else{
            console.log("10回")

        }
    }

    /**
     * プロパティに持たせた数字をハイフンで区切り、配列にする
     * @param {*} num 
     */
    static getSplitNumber(num){
        const question_number =  num.split("-");
        this.makeRandomNumber(question_number);
    }

    /**
     * ランダムな数字をつくる
     * @param {*} question_number 
     */
    static makeRandomNumber(question_number){

        const numbers = [];
        question_number.forEach((number) => {
            const num = Math.floor((Math.random() * (9 - 1 ) + 1) * Number(number));
            numbers.push(num);
        });

        this.setQuestion(numbers);
    }

    /**
     * 配列の中の最大値を左辺に、最小値を右辺にセットする
     * @param {}} numbers 
     */
    static setQuestion(numbers){
        const max = Math.max(...numbers);
        const min = Math.min(...numbers);

        document.getElementById("max_number").value = max;
        document.getElementById("min_number").value = min;

        next_btn.disabled = true;
    }
}

class Answering {

    static getAnswer(){
        // ここでインポートしたのほしい

        const max = document.getElementById("max_number");
        const min = document.getElementById("min_number");
        const symbol = document.getElementById("symbols");

        const input_answer = document.getElementById("answer");

        if(Number(input_answer) === correct_answer){
            console.log("せいかい");
        } else {
            console.log("ちがうよ");
        }



    }
}