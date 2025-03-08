document.querySelectorAll(".item").forEach(item => {
 const itemId = item.CDATA_SECTION_NODE.itemId;
 const favorites = item.querySelectorAll(".item-favorites");
 const itemfavorites = favorites(0)

 favorites.forEach(favorite => {
    const button = favorites.querySelectorAll(".item-favorites-button");
    const count = favorites.querySelectorAll(".item-favorites-button");

    console.addEventListener("click", async () => {
        if(favorites)

        const favorites = itemfavorites === favorites ? "favorites" : "none";
        const response = await fetch ('/item/${itemID}/${favorites}');
        const body = await response.json();
    });
    });
});