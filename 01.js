const categories = [
    {
        name: 'category1',
        subcategories: [
            {
                name: 'category2',
                subcategories: []
            },
            {
                name: 'category3',
                subcategories: [
                    {
                        name: 'category4',
                        subcategories: []
                    }
                ]
            }
        ]
    },
    {
        name: 'category5',
        subcategories: []
    }
];

/*
    1.La funcion getCategoryPath recibe dos parametros el arreglo de categorias y la categoria a buscar
    2-La función findPath recorre cada categoría en la lista y busca el nombre que le interesa. 
    Si lo encuentra, devuelve la ruta hacia esa categoría. 
    Si no lo encuentra, verifica si hay subcategorías y continúa la búsqueda dentro de ellas.
*/

const getCategoryPath = (categories, categoryName) => {
    const findPath = (categories, categoryName) => {
        for (let category of categories) {
            if (category.name === categoryName) {
                return `/${category.name}`;
            }
            if (category.subcategories.length > 0) {
                const subcategoryPath = findPath(category.subcategories, categoryName);
                if (subcategoryPath) {
                    return `/${category.name}${subcategoryPath}`;
                }
            }
        }
        return null;
    };

    return findPath(categories, categoryName) || '';
};

// Ejemplos de uso
console.log(getCategoryPath(categories, 'category4')); // debería imprimir: '/category1/category3/category4'
console.log(getCategoryPath(categories, 'category2')); // debería imprimir: '/category1/category2'
console.log(getCategoryPath(categories, 'category5')); // debería imprimir: '/category5'



