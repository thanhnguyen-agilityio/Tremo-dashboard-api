export const valid_create_product = (payload) => {
    const REQUIRE_FIELDS = [
        'name',
        'price',
        'category',
        'weight'
    ];

    let isMissingRequireField = false;
    REQUIRE_FIELDS.forEach((field)=> {
        if (payload[field] === undefined) {
            isMissingRequireField = true
        }
    })
    return isMissingRequireField
};