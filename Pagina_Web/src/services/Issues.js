//TODO: modificar esto dinamicamente
const id_hotel = "0f1c446d-f92e-11eb-a416-020000fcbc46";
const id_reporter = "26ac1d7c-f92e-11eb-a416-020000fcbc46";

export async function getAllIssues() {
    const url = "/issues";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function postIssue(data) {
    const url = "/issues/new"
    const response = await fetch(url, {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data[0])
    });
}