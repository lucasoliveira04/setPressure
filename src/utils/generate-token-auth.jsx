function generateTokenAuth(length = 64) {
    let token = "";

    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const specialCharacters = "!@#$%&*()_+";

    for (let i = 0; i < length; i++) {
        const randomSet = Math.random() < 0.8 ? characters : specialCharacters; 
        token += randomSet.charAt(Math.floor(Math.random() * randomSet.length));
    }

    return token;
}

export default generateTokenAuth;
