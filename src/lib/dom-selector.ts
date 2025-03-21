export function $(elem: string) {
	return document.querySelector(elem)
}

export function $$(elem: string) {
	return document.querySelectorAll(elem)
}
