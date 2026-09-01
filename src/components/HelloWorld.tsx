interface HelloWorldProps {
  name?: string
}

export function HelloWorld({ name = 'React + Vite + TypeScript' }: HelloWorldProps) {
  return <p className="hello-world">Hola, {name}</p>
}
