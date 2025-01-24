export class RulesInputs{
    static checkInput(valuePrompt, message){
        if (valuePrompt === null || valuePrompt === undefined || valuePrompt === "") {
            alert(message);
            return false;
        }

        if (valuePrompt === 0 || (typeof valuePrompt === "string")) {
            alert(message);
            return false;
        }

        if (typeof valuePrompt === "object" && Object.keys(valuePrompt).length === 0) {
            alert(message);
            return false;
        }

        if (Array.isArray(valuePrompt) && valuePrompt.length === 0) {
            alert(message);
            return false;
        }

        return true;
    }
}