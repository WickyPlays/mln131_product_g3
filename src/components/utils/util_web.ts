export function setPageHeadTitle(title: string): void {
    if (!title) {
        document.title = "MLN131 - SP25 - Group 3";
        return
    }
    document.title = `${title} | MLN131 - SP25 - Group 3`;
}
