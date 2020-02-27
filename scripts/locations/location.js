const location = (locationObject) => {
    return `
    <section class="location">
          <img src="${locationObject.image}" alt="${locationObject.id}" class="location__img" id="${locationObject.id}Img" />
          <h4 class="locationName">${locationObject.name}</h4>

          <dialog class="dialog--tip" id="tips--${locationObject.id}">
            <p>${locationObject.message}</p>
            <button class="button--close" id="close-${locationObject.id}">Close</button>
          </dialog>
        </section>
    `
}

export default location;