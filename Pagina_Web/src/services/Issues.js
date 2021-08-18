export async function getAllIssues() {
    const url = "/issues";
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export async function postIssue() {
    
}