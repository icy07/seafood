import "./popup.min.js";
//#region src/components/forms/rating/rating.js
function formRating() {
	const ratings = document.querySelectorAll("[data-fls-rating]");
	if (!ratings.length) return;
	ratings.forEach((rating) => {
		const ratingValue = +rating.dataset.flsRatingValue;
		formRatingInit(rating, +rating.dataset.flsRatingSize || 5);
		if (ratingValue) formRatingSet(rating, ratingValue);
	});
	function formRatingInit(rating, ratingSize) {
		let html = `<div class="rating__items">`;
		for (let i = 0; i < ratingSize; i++) html += `<span class="rating__item --icon-star"></span>`;
		html += `</div>`;
		rating.insertAdjacentHTML("beforeend", html);
	}
	function formRatingSet(rating, value) {
		const ratingItems = rating.querySelectorAll(".rating__item");
		const fullStars = parseInt(value);
		const partialStar = value - fullStars;
		ratingItems.forEach((item, index) => {
			item.classList.remove("rating__item--active");
			const existingSpan = item.querySelector("span");
			if (existingSpan) existingSpan.remove();
			if (index <= fullStars - 1) item.classList.add("rating__item--active");
			else if (index === fullStars && partialStar) item.insertAdjacentHTML("beforeend", `<span class="--icon-star" style="width:${partialStar * 100}%"></span>`);
		});
	}
}
document.querySelector("[data-fls-rating]") && window.addEventListener("load", formRating);
//#endregion
