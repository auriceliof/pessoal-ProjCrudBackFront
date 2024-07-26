export function update(inputs: any, name: string, newValue: any) {
    return{ ...inputs, [name]: { ...inputs[name], value: newValue} };
}

export function updateAll(inputs: any, newValue: any) {
    const newInputs: any = {};
        for (var name in inputs) {
            newInputs[name] = { ...inputs[name], value: newValue[name] };
        }

    return newInputs;
}

export function toValues(inputs: any) {

    const data: any = {};
    for (var name in inputs) {
        data[name] = inputs[name].value;
    }
    return data;
}
