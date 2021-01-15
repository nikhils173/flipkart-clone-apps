const baseUrl = "https://flipkart-rest-servers.herokuapp.com";
export const api = `${baseUrl}/api`;
export const generatePublicUrl = (fileName) => {
    return `http://localhost:2000/public/${fileName}`;
}