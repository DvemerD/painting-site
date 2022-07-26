const calc = (size, material, options, promocode, result, formSelector, state) => {
    const sizeBlock = document.querySelector(size),
        materialBlock = document.querySelector(material),
        optionsBlock = document.querySelector(options),
        promocodeBlock = document.querySelector(promocode),
        resultBlock = document.querySelector(result),
        form = document.querySelector(formSelector);

    let sum = 0;

    const calcFunc = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = "Пожалуйста, выберите размер и материал картины";
        } else if (promocodeBlock.value === 'IWANPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
        }
    };

    sizeBlock.addEventListener('change', calcFunc);
    materialBlock.addEventListener('change', calcFunc);
    optionsBlock.addEventListener('change', calcFunc);
    promocodeBlock.addEventListener('input', calcFunc);

    form.addEventListener('click', (e) => {
        const parameters = {
            "size": sizeBlock.value,
            "material": materialBlock.value,
            "options": optionsBlock.value,
            "result": resultBlock.textContent
        }

        stateCalc(e.target, parameters, state);
    });
}

const stateCalc = (event, parameters, state) => {
    const { size, material, options, result } = parameters;

    switch (event.id) {
        case "size":
            if (size == 500) state.size = "40x50";
            if (size == 1000) state.size = "50x70";
            if (size == 1500) state.size = "70x70";
            if (size == 2000) state.size = "70x100";
            break;
        case "material":
            if (material == 1) state.material = "Холст из волокна";
            if (material == 1.2) state.material = "Льняной холст";
            if (material == 1.5) state.material = "Холст из натурального хлопка";
            break;
        case "options":
            if (options == 0) state.options = "";
            if (options == 1000) state.options = "Покрытие арт-гелем";
            if (options == 2000) state.options = "Экспресс-изготовление";
            if (options == 500) state.options = "Доставка готовых работ";
            break;
    }
    state.result = +result ? +result : 0;
}

export default calc;