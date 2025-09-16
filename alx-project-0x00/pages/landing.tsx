import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
  return (
    <main className="flex flex-col h-screen justify-center items-center text-4xl font-semibold">
      <h1>Landing Page</h1>
      <Button title="Small Button" styles="rounded-sm" />
      <Button title="Medium Button" styles="rounded-md" />
      <Button title="Large Button" styles="rounded-full lg:rounded-lg" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </main>
  )
}

export default Landing
