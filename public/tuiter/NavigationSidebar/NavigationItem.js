const NavigationItem = (navigation, active) => {

    if (active === navigation.name) {
        return(`
            <a href="${navigation.navLink}" class="list-group-item list-group-item-action active">
                <span class="${navigation.faIcon}"></span>
                <span class="d-none d-xl-inline">${navigation.name}</span>
            </a>
        `)
    } else {
        return(`
            <a href="${navigation.navLink}" class="list-group-item list-group-item-action">
                <span class="${navigation.faIcon}"></span>
                <span class="d-none d-xl-inline">${navigation.name}</span>
            </a>
        `)
    }

}

export default NavigationItem;