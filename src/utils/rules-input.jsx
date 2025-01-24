export class RulesInputs{
    static checkInput(valuePrompt, message){
        if (valuePrompt === null || valuePrompt === "" || valuePrompt === undefined || valuePrompt === 0) {
            alert(message)
            return false;
        }

        return true;
    }
}