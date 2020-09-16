// < !--Отступ у body подстраивается под размер Хедера-- >

console.log(
	document.querySelector(".page-header").getBoundingClientRect().height,
)

const { height: pageHeaderHeight } = document
	.querySelector(".page-header")
	.getBoundingClientRect()

document.body.style.paddingTop = `${pageHeaderHeight}px`
