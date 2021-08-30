const insert = (num) => document.form.textarea.value = document.form.textarea.value + num

const equal = () => {
	let hasil = document.form.textarea.value
	document.form.textarea.value = eval(hasil)
}

const clean = () => document.form.textarea.value = ""

const back =() => {
	var hasil = document.form.textarea.value
	document.form.textarea.value = hasil.substring(0,hasil.length-1)
}