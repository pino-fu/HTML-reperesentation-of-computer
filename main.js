const computer = {
	id: 1,
	manufacturer: "Apple",
	make: "Macbook",
	model: "Pro",
	specs: {
		memory: 32,
		hardDrive: "500 GB",
		processor: 2.4
	}
}


const objToHTML = (obj) => {
    const newObj = `<section id ="computer--${obj.id}>"\n\t<h1>${obj.manufacturer} ${obj.make}</h1>\n\t<div>Model: ${obj.model}</div>\n\t<div>Memory: ${obj.specs.memory}</div>\n\t<div>Hard drive space: ${obj.specs.hardDrive} GB</div>\n\t<div>Processor speed: ${obj.specs.processor} Ghz</div>\n</section>`
    return newObj
}

const toHTML = objToHTML(computer);

console.log(toHTML);





// REFERENCE BELOW 

// {/* <section id="computer--1">
            // 	<h1>Apple Macbook</h1>
            // 	<div>Model: Pro</div>
            // 	<div>Memory: 32 GB</div>
            // 	<div>Hard drive space: 500 GB</div>
            // 	<div>Processor speed: 2.4 Ghz</div>
// </section> */}