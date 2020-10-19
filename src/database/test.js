const Database = require("./db");
const saveOrphanage = require("./saveOrphanage")

Database.then(async db => {
    // insirir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.53678441493467",
        lng: "-46.57692047615052",
        name: "Orfanato Raio de Luz",
        about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        whatsapp: "11940028922",
        images: [
            "http://1.bp.blogspot.com/-PVG-ny4pUjE/VIY1zS-RbmI/AAAAAAAABHw/7JoT0Hkg79k/s1600/1513718_413909758757604_2345657430787329874_n.jpg",
            
            "http://3.bp.blogspot.com/-sdcm0k6sZ9M/UgW-Ya1PNiI/AAAAAAAAA8o/5twPpqoIsKo/s1600/1014182_136531006555935_1212975885_n.jpg",
        ].toString(),
        instructions: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
        opening_hours: "Horário de Visita Das 18h às 8h",
        open_on_weekends: "0",
    });

    // consultar dados na tabela
    
    const selectedOrphanages = await db.all(`SELECT * FROM orphanages;`)
    console.log(selectedOrphanages)
    
    // consultar um orfanato pelo id
//     const orphanage = await db.all("SELECT * FROM orphanages WHERE id = 1")
//     console.log(orphanage)
    
    // deletar dados da tabela
//     console.log(await db.run("DELETE FROM orphanages WHERE id = '4' "))
    
})











