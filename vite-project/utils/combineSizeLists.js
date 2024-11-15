function combineSizeList(originalSizesList, updatedSizeList) {
    // Creamos una copia del array original para mantener inmutabilidad
    let sizesList = [...originalSizesList];
    console.log('he sido llamado')
    console.log(originalSizesList)
    console.log(updatedSizeList)

    // Verificamos que updatedSizeList existe y es un array
    if (updatedSizeList && Array.isArray(updatedSizeList)) {
        // Eliminamos la declaración const innecesaria antes del map
        updatedSizeList.forEach((element) => {
            const index = originalSizesList.findIndex(
                (item) => item.size === element.size
            );
            
            if (index !== -1) {
                // Usamos spread operator para crear un nuevo objeto
                sizesList[index] = { ...sizesList[index], ...element };
            } else {
                console.error(`Tamaño ${element.size} no encontrado en la lista original`);
            }
        });
    }
    
    return sizesList;
}

export default combineSizeList;