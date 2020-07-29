const calculateBMI = () => {
	let weightInput = document.getElementById('weight')
	parseInt(weightInput.value)
	let heightInput = document.getElementById('height')
	parseInt(heightInput.value)
	let results = calculateMetricBMI (weightInput.value,heightInput.value).toFixed(2)
	let displayResultsElement = document.getElementById ('results')
	let message = BMInotification(parseFloat(results))
	displayResultsElement.innerHTML = `<h2>Your results: ${results} and you are deemed ${message}</h2>`
	}