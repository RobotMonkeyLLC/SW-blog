const detailLabels = {
    characters: {
        card : {
            name: ['gender', 'hair_color', 'eye_color'],
            label: ['Gender:', 'Hair Color:', 'Eye Color:']
        },
        detail: {
            name: ['name', 'gender', 'hair_color', 'eye_color'],
            label: ['Name', 'Gender', 'Height', 'Hair Color', 'Eye Color']
        }
    },
    planets: {
        card: {
            name: ['terrain', 'population', 'climate'],
            label: ['Terrain:', 'Population:', 'Climate:']
        },
        detail: {
            name: ['terrain', 'population', 'climate'],
            label: ['Terrain:', 'Population:', 'Climate:']
        }
    },
    vehicles: {
        card: {
            name: ['model', 'manufacturer', 'cost_in_credits'],
            label: ['Model:', 'Manufacturer:', 'Cost in Credits:']
        },
        detail: {
            name: ['model', 'manufacturer', 'cost_in_credits'],
            label: ['Model:', 'Manufacturer:', 'Cost in Credits:']
        }
    }
}
export default detailLabels;