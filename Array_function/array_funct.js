let lang_arr = ['ruby','Python','node','react']
console.log("-------------------------------------------------------")
console.log(lang_arr[1])
console.log("-------------------------------------------------------")
let last_lang = lang_arr[lang_arr.length - 1]
console.log(last_lang)
console.log("-------------------------------------------------------")
lang_arr.forEach(function(item, index, array) {
    console.log(item, index)
})
console.log("-------------------------------------------------------")
lang_arr.forEach(function(item) {
    console.log(item)
})
console.log("-----------------------Remove frm the end of array--------------------------------")
let last_item = lang_arr.pop()
console.log(last_item)
console.log(lang_arr)
console.log("-----------------------Remove frm the Front of array-------------------------------")
let frst_item = lang_arr.shift()
console.log(frst_item)
console.log(lang_arr)
console.log("lll",Object.keys(lang_arr))

lang_arr[14] = 'ReacT'
console.log(lang_arr)
console.log(Array.isArray(lang_arr));