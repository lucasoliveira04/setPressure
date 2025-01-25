export class RulesInputs{
    static checkInput(valuePrompt, message){
        if (valuePrompt === null){
            alert(message);
            return false;
        } else if (valuePrompt === ""){
            alert(message);
            return false;
        } else if (valuePrompt === undefined){
            alert(message);
            return false;
        } else if (valuePrompt === 0){
            alert(message);
            return false;
        }
        return true;
    }
}