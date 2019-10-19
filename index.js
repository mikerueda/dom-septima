const data = [ { name: 'Juan de las nieves', age: 18 }, { name: 'Dayaneris', age: 22 }, { name: 'Tony', age: 38 } ]

const store = {
	totalAsignatures: {},
	comissions: [
		{
			name: 'septima',
			students: [
				{
					name: 'sultana',
					asignatures: [
						{ name: 'math', score: 7 },
						{ name: 'History', score: 3 },
						{ name: 'Physics', score: 8 }
					]
				},
				{
					name: 'calixta',
					asignatures: [
						{ name: 'Chemistry', score: 8 },
						{ name: 'History', score: 2 },
						{ name: 'Art', score: 2 },
						{ name: 'Physics', score: 7 }
					]
				}
			]
		}
	]
}

const printScores = (str) => {
	const comission = store.comissions.find((e) => e.name === str)
	console.log(`${comission.name} :`)
	comission.students.forEach((student) => {
		console.log('  ' + student.name + ' :')
		student.asignatures.forEach((asignature) => {
			console.log(`     ${asignature.name} : ${asignature.score}`)
		})
	})
}

queryAsignatures = () => {
	let data = {}
	store.comissions.find((comission) => comission.name === 'septima').students.forEach((student) => {
		student.asignatures.forEach((asignature) => {
			if (!data.hasOwnProperty(asignature.name)) {
				data[asignature.name] = []
			}
			data[asignature.name].push(asignature.score)
		})
	})
	store.totalAsignatures = data
	approvedPerSignature()
}

const approvedPerSignature = () => {
	let approved = {}
	Object.keys(store.totalAsignatures).forEach((e) => {
		let aux = store.totalAsignatures[e].filter((e) => e > 3)
		//console.log(`la materia ${e} fue aprobada por ${aux.length} elumnes`)
		approved[e] = aux.length
	})
	console.log(approved)
	let winner = {}
	Object.keys(approved).reduce((a, b) => {
		if (approved[a] > approved[b]) {
			winner = { name: a, score: approved[a] }
			return a
		} else {
			winner = { name: b, score: approved[b] }
			return b
		}
	})

	console.log(winner)
}

queryAsignatures()

const initialize = () => {
	const container = document.getElementById('root')
	data.forEach((element) => printCharacter(element, container))
}

const printCharacter = (el, no) => {
	let name = document.createElement('p')
	name.innerText = el.name
	let age = document.createElement('em')
	age.innerText = el.age

	name.appendChild(age)
	no.appendChild(name)
}
