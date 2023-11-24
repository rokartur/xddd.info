import './styles/globals.scss'
import styles from './styles/index.module.scss'
import { render } from 'preact'
import { useEffect } from 'preact/hooks'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const App = () => {
	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
		document.body.scrollTo({ top: 0, behavior: 'smooth' })
		document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })

		gsap.fromTo(
			'#main',
			{ opacity: 0, scale: .5 },
			{
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: 'back',
				stagger: .2,
				scrollTrigger: { trigger: '#main', start: 'top 50%' },
			})

		gsap.fromTo(
			'#definition-item',
			{ opacity: 0, scale: .7 },
			{
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: 'back',
				stagger: .2,
				scrollTrigger: { trigger: '#definitions', start: 'top 50%', end: '95% 50%', scrub: 1 },
			})

		gsap.fromTo(
			'#faq-item',
			{ opacity: 0, scale: .7 },
			{
				opacity: 1,
				scale: 1,
				duration: .4,
				ease: 'back',
				stagger: .2,
				scrollTrigger: { trigger: '#faq', start: 'top 50%', end: 'bottom 50%' },
			})
	}, [])

	const definitions = [
		{
			title: 'xd',
			description: 'heh, zabawne',
		},
		{
			title: 'xddddddd',
			description: 'całkiem śmieszne, ale nie na tyle, żeby napisać "xD", ewentualnie ukazanie cringe',
		},
		{
			title: 'xD',
			description: 'śmieszne, bardzo dobry żart',
		},
		{
			title: 'XD',
			description: 'o kurwa, ale turbo śmieszność',
		},
		{
			title: 'xDDD',
			description: 'śmieszniejsze niż "xD", ale mniej śmieszne od "XDDDD"',
		},
		{
			title: 'XDDDDDD',
			description: 'duszę się ze śmiechu',
		}, {
			title: 'XDXDXDXD',
			description: 'ultra śmieszność',
		},
		{
			title: 'XDdDddD',
			description: 'tak śmieszne, że nie mogę przestać się trząść',
		},
		{
			title: 'iksde',
			description: 'sarkastyczne, ukazuje, że wiadomość wyżej była żałosna',
		},
		{
			title: '?XD',
			description: 'o co ci chodzi?',
		},
		{
			title: 'X kurwa D',
			description: 'używane głównie przez dziewczyny, reakcja na cringowe zachowanie',
		},
		{
			title: 'Xd',
			description: 'nieśmieszne, nie chce mi się nawet odkliknąć capslocka, wypierdalaj',
		},
		{
			title: 'Xdddd',
			description: 'mam autyzm',
		},
		{
			title: 'XXXDDD',
			description: '?????',
		}, {
			title: 'XDDDDDDDDDDDDD',
			description: 'używane przez 12-latków',
		},
	]

	const faq = [
		{
			q: 'CO OZNACZA ILOŚĆ "D"?',
			a: 'Im więcej "D" w XDDD tym jest śmieszniej. Uwaga: w przypadku użycia zbyt dużej liczby "D" emotikon zmienia znaczenie i ukazuje, że autor ma 12 lat. Powszechnie akceptowalne jest użycie do około 12 "D"',
		},
		{
			q: 'PASTA O "Xd"',
			a: 'Serio, mało rzeczy mnie triggeruje tak jak to chore „Xd”. Kombinacji x i d można używać na wiele wspaniałych sposobów. Coś cię śmieszy? Stawiasz „xD”. Coś się bardzo śmieszy? Śmiało: „XD”! Coś doprowadza Cię do płaczu ze śmiechu? „XDDD” i załatwione. Uśmiechniesz się pod nosem? „xd”. Po kłopocie. A co ma do tego ten bękart klawiaturowej ewolucji, potwór i zakała ludzkiej estetyki - „Xd”? Co to w ogóle ma wyrażać? Martwego człowieka z wywalonym jęzorem? Powiem Ci, co to znaczy. To znaczy, że masz w telefonie włączone zaczynanie zdań dużą literą, ale szkoda Ci klikać capsa na jedno „d” później. Korona z głowy spadnie? Nie sondze. „Xd” to symptom tego, że masz mnie, jako rozmówcę, gdzieś, bo Ci się nawet kliknąć nie chce, żeby mi wysłać poprawny emotikon. Szanujesz mnie? Używaj „xd”, „xD”, „XD”, do wyboru. Nie szanujesz mnie? Okaż to. Wystarczy, że wstawisz to zjebane „Xd” w choć jednej wiadomości. Nie pozdrawiam',
		},
		{
			q: 'Styl życia "XD"',
			a: `Odkąd zacząłem wyznawać "xD" moje życie stało się spokojniejsze. Nie denerwuję się już prawie wcale, kiedy spotykają mnie sytuacje stresowe, myślę sobie xD i wszystko staje się prostsze. \n
Naprawdę polecam ten styl życia. Wcale nie robi ze mnie lenia tylko osobę które nie denerwuje się z dupy tak jak kiedyś. \n
Kolos? xD \n
Prezentacja przed w chuj dużą grupą nieznajomych ludzi? xD \n
Wyjebali z roboty? xD \n
Wyśmiała cię jakaś laska na imprezie? xD \n
Zrobiłeś coś pojebanego? xD \n
I od razu lżej i można się wziąć za siebie a nie płakać czy się wkurwiać. \n
uczucie 10/10 \n
`,
		},
		{
			q: 'ADOBE XD',
			a: 'W 2016 została wydana jedna z aplikacji pakietu Adobe - "Adobe XD". Program służy do tworzenia interaktywnych prototypów aplikacji mobilnych oraz stron internetowych. ',
		},
		{
			q: 'Disney XD',
			a: 'Stacja telewizyjna ze Stanów Zjednoczonych należąca do Disneya emitująca głównie seriale dziecięce. Oprócz tego zajmuje się produkcją własnych seriali i filmów. Wystartowała 13 lutego 2009 zastępując Toon Disney i Jetix. Jest adresowana głównie do chłopców w wieku 6 do 14 lat. ',
		},
	]

	return (
		<main className={styles.overlay}>
			<section id={'main'} className={styles.mainContainer}>
				<div className={styles.heading}>
					<h1 id={'main'}>XD</h1>
					<p id={'main'}>Śmieszniej już nie będzie</p>
				</div>

				<span className={styles.mouseScrollDown} onClick={() => {
					const definitions = document.querySelector('#definitions')
					definitions.scrollIntoView({ behavior: 'smooth', block: 'start' })
				}}><span/></span>
			</section>

			<section id={'definitions'} className={styles.definitionsContainer}>
				<h2 id={'definition-item'}>
					Jak używać XDD?
				</h2>

				<div className={styles.definitionsList}>
					{definitions.map(({ title, description }, i) => (
						<div key={i} id={'definition-item'} className={styles.definition}>
							<p>{title}</p>
							<p>{description}</p>
						</div>
					))}
				</div>
			</section>

			<section id={'faq'} className={styles.faqContainer}>
				{faq.map(({ q, a }, i) => (
					<div key={i} id={'faq-item'} className={styles.question}>
						<p>{q}</p>
						<p>{a}</p>
					</div>
				))}
			</section>

			<footer>
				<a href={'https://github.com/rokartur'} target={'_blank'}>@rokartur</a>
				<a href={'https://github.com/rokartur/xddd.info'} target={'_blank'}>@repo</a>
			</footer>
		</main>
	)
}

render(<App/>, document.body)
