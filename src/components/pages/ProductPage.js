import { useParams } from 'react-router-dom'
import Card from '../Card'

export default function ProductPage() {
  const params = useParams()
	return (
		<Card>
			<h1>Product №{params.id}</h1>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dicta, quaerat mollitia id vel deleniti fugit repellendus possimus incidunt quod?</p>
		</Card>
	)
}
