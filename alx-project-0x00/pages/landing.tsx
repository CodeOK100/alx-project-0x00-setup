import Card from "@/components/Card"
import Button from "@/components/Button"
const Landing: React.FC =  () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Button title="Small Button" styles="rounded-sm" />
      <Button title="Medium Button" styles="rounded-md" />
      <Button title="Large Button" styles="rounded-full lg:rounded-lg" />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  )
}
export default Landing