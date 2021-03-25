const vue = new Vue({
    el: '#main',
    data: {
        currentQuestion: 0,
        currentQuestionOutput: 1,
        questions: [
            { question: 'Причинами своего плохого настроения я делюсь только с ним / ней' },
            { question: 'Наши характеры во многом схожи' },
            { question: 'Я прощаю ему / ей все обиды' },
            { question: 'Он / она хорошо ко мне относится' },
            { question: 'У нас одинаковое состояние и настроение в те моменты, когда мы рядом друг с другом' },
            { question: 'Я доверяю ему / ей все свои чувства и мысли' },
            { question: 'Я не могу представить свою жизнь без него / неё' },
            { question: 'Я готов/а на что угодно ради него / неё' },
            { question: 'Его настроение и состояние во многом зависят от меня' },
            { question: 'Даже трудно представить, насколько тяжело и уныло жилось бы без него / неё' },
            { question: 'Заканчиваем?' },
        ],

        answers: [
            { yes: 0 },
            { noButYes: 0 },
            { yesButNo: 0 },
            { no: 0 }
        ],
    },

    methods: {
        nextQuestion: function (value, event) {
            this.currentQuestion += 1;
            
            if (this.currentQuestion == 11) {
                this.checkResults();
            }

            this.currentQuestionOutput += 1;

            switch (value) {
                case 'yes': this.answers[0].yes += 1; break;
                case 'noButYes': this.answers[1].noButYes += 1; ; break;
                case 'yesButNo': this.answers[2].yesButNo += 1; ; break;
                case 'no': this.answers[3].no += 1; ; break;
            }

            event.preventDefault();
        },

        checkResults: function () {
            console.log(this.answers[0].yes);
            console.log(this.answers[1].noButYes);
            console.log(this.answers[2].yesButNo);
            console.log(this.answers[3].no);

            if (this.answers[0].yes == 10) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 10 из 10.</p>
                            <p class="result-text mt-3">Вы с партнером полная совместимость!</p>
                            <p class="result-text">Жизнь прекрасна!</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[0].yes >= 5) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 7 из 10.</p>
                            <p class="result-text mt-3">Вы с партнером разделяете чувства друг друга, 
                            <p class="result-text">понимаете и принимаете таким, какой он / она есть на самом деле - со всеми достоинствами и недостатками.</p>
                            <p class="result-text">Жизнь прекрасна!</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[1].noButYes == 10) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 6 из 10.</p>
                            <p class="result-text mt-3">Ваши отношения можно назвать сложными и неопределенными.
                            <p class="result-text">Вам приходится идти на компромисс с какими-то явными неудовлетворяющими вас недостатками партнера, но тем не менее большое количество его достоинств перевешивает и вселяет в вас надежду на светлое будущее.</p>
                            <p class="result-text">И ваши отношения вполне могут быть очень страстными и яркими.</p>
                            <p class="result-text">Жизнь хороша!</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[1].noButYes >= 5) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 5 из 10.</p>
                            <p class="result-text mt-3">Вы с партнером разделяете чувства друг друга, 
                            <p class="result-text">понимаете и принимаете таким, какой он / она есть на самом деле - со всеми достоинствами и недостатками.</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[2].yesButNo == 10) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 4 из 10.</p>
                            <p class="result-text mt-3">Ваши отношения можно назвать сложными и неопределенными. </p>
                            <p class="result-text">Вам приходится идти на компромисс с какими-то явными неудовлетворяющими вас недостатками партнера, </p> 
                            <p class="result-text">но тем не менее большое количество его достоинств перевешивает и вселяет в вас надежду на светлое будущее.</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[2].yesButNo >= 5) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 3 из 10.</p>
                            <p class="result-text mt-3">Это низкий результат, понимаете и принимаете таким, </p>
                            <p class="result-text">какой он / она есть на самом деле - со всеми достоинствами и недостатками.</p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[3].no == 10) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 2 из 10.</p>
                            <p class="result-text mt-3">Либо ваши отношения носят дружеский характер или, так сказать, «отношения без обязательств». </p>
                            <p class="result-text">Либо вы довольно замкнутый человек и видите в первую очередь недостатки других людей. </p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[3].no >= 5) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 2 из 10.</p>
                            <p class="result-text mt-3">Либо ваши отношения носят дружеский характер или, так сказать, «отношения без обязательств». </p>
                            <p class="result-text">Либо вы довольно замкнутый человек и видите в первую очередь недостатки других людей. </p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            } else if (this.answers[3].no <= 5) {
                document.getElementById('main').innerHTML = `
                    <div class="container-fluid text-center">
                        <h1 class="mt-3">Тест: Насколько вы влюблены?</h1>
                        <div class="result-div">
                            <p class="result-text pt-2">По шкале любви вы набрали 2 из 10.</p>
                            <p class="result-text mt-3">Либо ваши отношения носят дружеский характер или, так сказать, «отношения без обязательств». </p>
                            <p class="result-text">Либо вы довольно замкнутый человек и видите в первую очередь недостатки других людей. </p>
                        </div>
                        <button class="btn btn-outline-warning mt-2" onclick="location.reload()">Пройти тест еще раз</button>
                    </div>
                `;
            }
        }
    }
});