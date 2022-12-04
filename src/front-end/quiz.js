// Getting all required elements from dom.
let content = document.querySelector("#content");
let question_space = document.querySelector("#main");
let active_progress_bar = document.querySelector(".progress-bar .active")

// Setting up the progress.
let progress = 0;

// Instancing the question counter. This tell us what is the current question on the screen. 
__current__ = 0;

// Instancing the questions.
const questions = [

	{
		id: 16,
		title: "A mulher teve filhos?",
		feature_name: "has_children",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 34,
		title: "Quantos?",
		feature_name: "number_of_births",
		struct: {
			type: "text"
		},
	},
	{
		id: 16,
		title: "Ela já abortou?",
		feature_name: "abortion",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 11,
		title: "Amamentou?",
		feature_name: "has_breastfed",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 34,
		title: "Por quantos meses?",
		feature_name: "breastfed_time",
		struct: {
			type: "text"
		},
	},
	{
		id: 5,
		title: "Qual era a idade da mulher, em anos, quando houve a primeira menstruação?",
		feature_name: "menarche_age",
		struct: {
			type: "text",
		}
	},
	{
		id: 2,
		title: "A mulher está na menopausa?",
		feature_name: "menopause_status",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},

	},
	{
		id: 10,
		title: "Qual o índice de massa corpórea da mulher?",
		feature_name: "body_mass_index",
		struct: {
			type: "text",
		}
	},
	{
		id: 13,
		title: "Fez terapia hormonal?",
		feature_name: "hormone_therapy_status",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 14,
		title: "Qual foi a duração, em meses, da terapia hormonal?",
		feature_name: "hormone_therapy_time",
		struct: {
			type: "text",
		}
	},
	{
		id: 50,
		title: "Tem histórico familiar de câncer?",
		feature_name: "has_breast_cancer_family_history",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 8,
		title: "A mulher fuma?",
		feature_name: "tobaco",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 8,
		title: "A mulher bebe?",
		feature_name: "alcohol",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 17,
		title: "O câncer é benigno?",
		feature_name: "is_benign",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 15,
		title: "Qual foi o diagnóstico primário?",
		feature_name: "primary_diagnostic",
		struct: {
			type: "text",
		}
	},
	{
		id: 19,
		title: "Qual a diferenciação tubular?",
		feature_name: "tubular_differentiation",
		struct: {
			type: "text",
		}
	},
	{
		id: 18,
		title: "Qual o índice mitótico?",
		feature_name: "mitotic_index",
		struct: {
			type: "text",
		}
	},
	{
		id: 6,
		title: "Qual o grau histológico?",
		feature_name: "histological_grade",
		struct: {
			type: "text",
		}
	},
	{
		id: 6,
		title: "Qual o grau histológico baseado em Nottinghan?",
		feature_name: "histological_grade_based_on_nottinghan",
		struct: {
			type: "text",
		}
	},
	{
		id: 9,
		title: "Qual o subtipo do câncer?",
		feature_name: "tumor_subtype",
		struct: {
			type: "multiple-choose",
			options: [1,2,3,4]
		},
	},
	{
		id: 3,
		title: "Qual o percentual de progesterona da mulher?",
		feature_name: "progesteron_percentage",
		struct: {
			type: "text",
		},
	},
	{
		id: 7,
		title: "Já ocorreu recidiva?",
		feature_name: "ricidive_status",
		struct: {
			type: "true-or-false",
			options: ["Sim","Não"]
		},
	},
	{
		id: 1,
		title: "Quantos dias se passaram desde a descoberta do tumor?",
		feature_name: "time_with_tumor_delta",
		struct: {
			type: "text"
		},
	},
	{
		id: 4,
		title: "Quando o câncer foi descoberto, qual era a idade da mulher em anos?",
		feature_name: "age_when_cancer_was_discovered_in_months",
		struct: {
			type: "text",
		}
	},
]


// Instancing the next function.
async function next() {

	if(__current__ == questions.length) {

		// Setting the page title as 100%.
		document.title = "100%"

		// Hidding the quiz.
		document.querySelector(".quiz").classList.remove("active")

		// Showing the loading.
		document.querySelector(".loading").classList.add("active")

		// Getting the text element.
		const text = document.querySelector("#loading-text")

		// Instancing the UX texts...
		const texts = ["Colhendo informações...","Analisando amostras...","Comparando resultados...","Quase lá!","Pronto. Vamos ao seu resultado."]

		// Handling effects.
		text.textContent = texts[0]
		text.classList.add("fade-in")

		await new Promise(r => setTimeout(r, 1000));

		text.classList.remove("fade-in")
		text.classList.add("fade-out")

		await new Promise(r => setTimeout(r, 1000));

		text.classList.remove("fade-out")
		text.classList.add("fade-in")
		text.textContent = texts[1]
		
		await new Promise(r => setTimeout(r, 2000));

		text.classList.remove("fade-in")
		text.classList.add("fade-out")

		await new Promise(r => setTimeout(r, 1000));

		text.classList.remove("fade-out")
		text.classList.add("fade-in")
		text.textContent = texts[2]

		await new Promise(r => setTimeout(r, 1500));

		text.classList.remove("fade-in")
		text.classList.add("fade-out")

		await new Promise(r => setTimeout(r, 1000));

		text.classList.remove("fade-out")
		text.classList.add("fade-in")
		text.textContent = texts[3]

		await new Promise(r => setTimeout(r, 1500));

		text.classList.remove("fade-in")
		text.classList.add("fade-out")

		await new Promise(r => setTimeout(r, 1000));

		text.classList.remove("fade-out")
		text.classList.add("fade-in")
		text.textContent = texts[4]

		// Instancing a variable to store the response.
		let response = {}

		

		// Sending the request.
		response = await axios.post('http://127.0.0.1:5000/predict', {"has_children":0,"number_of_births":0,"abortion":1,"has_breastfed":0,"breastfed_time":0,"menarche_age":13,"menopause_status":1,"body_mass_index":3,"hormone_therapy_status":0,"hormone_therapy_time":0,"has_breast_cancer_family_history":1,"tobaco":1,"alcohol":1,"is_benign":1,"primary_diagnostic":0,"tubular_differentiation":0,"mitotic_index":0,"histological_grade":0,"histological_grade_based_on_nottinghan":1,"tumor_subtype":4,"progesteron_percentage":30,"ricidive_status":0,"time_with_tumor_delta":100,"age_when_cancer_was_discovered_in_months":5000});

		// Updating the response.
		response = response.data

		// Printing the response.
		console.log(response)

		// Saving the response.
		localStorage.setItem("response", JSON.stringify(response))

		// Hidding the loading.
		document.querySelector(".loading").classList.remove("active")

		// Showing the final screen.
		document.querySelector(".answer-screen").classList.add("active")

		// Constructing the content based on the received response.
		// Getting all required dom elements.
		const predicted = document.querySelector("#predito");
		const time = document.querySelector("#time")
		const classification = document.querySelector("#classificacao")

		// Inserting the information...
		predicted.textContent = response.predito
		time.textContent = response.tempo
		classification.textContent = response.classificacao

	} else {

		// Updating the progress.
		progress = (__current__/questions.length)*100

		// Removing the current question from HTML.
		__current__ != 0 ? question_space.remove() : false;

		// Adding __current__ by one.
		__current__ += 1;

		// Constructing the next question.
		if(questions[__current__-1].struct.type == "text") {

			if(questions[__current__-1].feature_name == "number_of_births") {

				if(sessionStorage.getItem("has_children") == 0) {

					sessionStorage.setItem("number_of_births", 0)

					return next()

				}

			} else if (questions[__current__-1].feature_name == "breastfed_time") {

				if(sessionStorage.getItem("has_breastfed") == 0) {

					sessionStorage.setItem("breastfed_time", 0)

					return next()

				}

			}  else if (questions[__current__-1].feature_name == "hormone_therapy_time") {

				if(sessionStorage.getItem("hormone_therapy_status") == 0) {

					sessionStorage.setItem("hormone_therapy_time", 0)

					return next()

				}

			}

			document.querySelector("#rep-btn").classList.add("disabled")
			
			const _main = document.createElement("div")
			_main.setAttribute("id","main")
			_main.setAttribute("class","main")
			
			const _question = document.createElement("p")
			_question.setAttribute("id","question")
			_question.setAttribute("class","question")
			_question.textContent = questions[__current__-1].title

			_main.appendChild(_question)

			const _input = document.createElement("input")
			_input.setAttribute("type","number")
			_input.setAttribute("name","answer")
			_input.setAttribute("class","answer")
			_input.setAttribute("id","txt-answer")
			_input.setAttribute("placeholder","Digite aqui a resposta")

			_input.addEventListener("input", (event) => {
				
				let value = event.target.value

				if (questions[__current__-1].feature_name == "body_mass_index") {

					if(event.target.value < 18.5) {

						value = 1

					} else if(event.target.value <= 24.9) {

						value = 2

					} else if(event.target.value <= 29.9) {

						value = 3
						
					} else if(event.target.value <= 34.9) {

						value = 4
						
					} else if(event.target.value <= 39.9) {

						value = 5
						
					} else {

						value = 6

					}

				} else if (questions[__current__-1].feature_name == "age_when_cancer_was_discovered_in_months") {

					value = event.target.value * 12
					
				}

				sessionStorage.setItem(`${questions[__current__-1].feature_name}`, value)

				if(event.target.value.length > 0) {

					document.querySelector("#rep-btn").classList.remove("disabled")

				} else {

					document.querySelector("#rep-btn").classList.add("disabled")

				}

			})

			_main.appendChild(_input)

			content.appendChild(_main)

			_input.focus()

		} else if(questions[__current__-1].struct.type == "true-or-false") {

			sessionStorage.setItem(`${questions[__current__-1].feature_name}`, 1)

			const _main = document.createElement("div")
			_main.setAttribute("id","main")
			_main.setAttribute("class","main")
			
			const _question = document.createElement("p")
			_question.setAttribute("id","question")
			_question.setAttribute("class","question")
			_question.textContent = questions[__current__-1].title

			_main.appendChild(_question)

			const _input_div1 = document.createElement("div")
			_input_div1.setAttribute("class","opt-answer active")
			_input_div1.setAttribute("value","1")
			_input_div1.textContent = questions[__current__-1].struct.options[0]

			const _input_div2 = document.createElement("div")
			_input_div2.setAttribute("class","opt-answer")
			_input_div2.setAttribute("value","0")
			_input_div2.textContent = questions[__current__-1].struct.options[1]

			const options = [_input_div1, _input_div2]

			options.forEach(option => {

				option.addEventListener("click", event => {

					const current_active_opt_item = document.querySelector(".opt-answer.active")

					if(!event.target.classList.contains("active")){

						current_active_opt_item.classList.remove("active")
						event.target.classList.add("active")
						sessionStorage.setItem(`${questions[__current__-1].feature_name}`, event.target.getAttribute("value"))
						
					}



				})

			})

			_main.appendChild(_input_div1)
			_main.appendChild(_input_div2)

			content.appendChild(_main)

		} else {

			const _main = document.createElement("div")
			_main.setAttribute("id","main")
			_main.setAttribute("class","main")
			
			const _question = document.createElement("p")
			_question.setAttribute("id","question")
			_question.setAttribute("class","question")
			_question.textContent = questions[__current__-1].title

			_main.appendChild(_question)

			const _input_div1 = document.createElement("div")
			_input_div1.setAttribute("class","multiple-choose active")
			_input_div1.setAttribute("value","1")
			_input_div1.textContent = questions[__current__-1].struct.options[0]

			const _input_div2 = document.createElement("div")
			_input_div2.setAttribute("class","multiple-choose")
			_input_div2.setAttribute("value","2")
			_input_div2.textContent = questions[__current__-1].struct.options[1]

			const _input_div3 = document.createElement("div")
			_input_div3.setAttribute("class","multiple-choose")
			_input_div3.setAttribute("value","3")
			_input_div3.textContent = questions[__current__-1].struct.options[2]

			const _input_div4 = document.createElement("div")
			_input_div4.setAttribute("class","multiple-choose")
			_input_div4.setAttribute("value","4")
			_input_div4.textContent = questions[__current__-1].struct.options[3]

			const options = [_input_div1, _input_div2, _input_div3, _input_div4]

			options.forEach(option => {

				option.addEventListener("click", event => {

					const current_active_opt_item = document.querySelector(".multiple-choose.active")

					if(!event.target.classList.contains("active")){

						current_active_opt_item.classList.remove("active")
						event.target.classList.add("active")
						sessionStorage.setItem(`${questions[__current__-1].feature_name}`, event.target.getAttribute("value"))
						
					}



				})

			})


			_main.appendChild(_input_div1)
			_main.appendChild(_input_div2)
			_main.appendChild(_input_div3)
			_main.appendChild(_input_div4)

			content.appendChild(_main)


		}

		question_space = document.querySelector("#main");

		active_progress_bar.style.width = `${progress}%`

		document.title = `${progress.toFixed(0)}%`

	}

}

// Adding a click event listener.
document.querySelector("#rep-btn").addEventListener("click", (event) => {
	
	// Calling the next function.
	event.target.classList.contains("disabled") ? false : next()

})

// Calling the next function when page load.
next()